// Copyright (c) 2020, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Lab Test Allocation Tool', {
	refresh: function(frm) {
		frm.disable_save();
	},
	onload: function(frm) {
		frappe.lab_test_allocation_tool.load_tests(frm);
	},
});

frappe.lab_test_allocation_tool = {
	load_tests: function(frm) {
			frappe.call({
				method: "frappe.client.get_list",
				args: {
					doctype: "All Tests"
				},
				callback: function(r){
					if(r.message){
					var test_list = []
					$.each(r.message,function(i,d){
						test_list.push(d.name)
					});
					}
					if(test_list){
							frm.test_area = $('<div>')
								.appendTo(frm.fields_dict.tests.wrapper);
						frm.test_list = new frappe.TestEditor(frm, frm.test_area, test_list)
					}
				}
			});
	}
}

frappe.TestEditor = Class.extend({
	init: function(frm, wrapper, test) {
		this.wrapper = wrapper;
		this.frm = frm;
		this.make(frm, test);
	},
	make: function(frm, test) {
		var me = this;

		$(this.wrapper).empty();

		var mark_test_toolbar = $('<div class="col-sm-12 bottom-toolbar">\
			<button class="btn btn-primary btn-update-test btn-xs"></button></div>')


		mark_test_toolbar.find(".btn-update-test")
			.html(__('Submit For Lab Testing'))
			.on("click", function() {
				var test_list = [];
				$(me.wrapper).find('input[type="checkbox"]').each(function(i, check) {
					if($(check).is(":checked")) {
						test_list.push(test[i]);
					}
				});
				frappe.call({
					method: "giico.geotechnical_investigation_services.doctype.lab_test_allocation_tool.lab_test_allocation_tool.lab_test_allocation",
					args:{
						"test_list":test_list,
						"sample":frm.doc.sample,
						"project":frm.doc.project
					},
					callback: function(r) {
						frappe.msgprint('Updated')
						frm.refresh()
					}
				});
			});

		var row;
		$.each(test, function(i, m) {
			if (i===0 || (i % 4) === 0) {
				row = $('<div class="row"></div>').appendTo(me.wrapper);
			}

			$(repl('<div class="col-sm-3 unmarked-test-checkbox">\
				<div class="checkbox">\
				<label><input type="checkbox" class="test-check" test="%(test)s"/>\
				%(test)s</label>\
				</div></div>', {test: m})).appendTo(row);
		});

		mark_test_toolbar.appendTo($(this.wrapper));
	}
});