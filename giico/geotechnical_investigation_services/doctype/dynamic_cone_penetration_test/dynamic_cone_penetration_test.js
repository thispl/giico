// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Dynamic Cone Penetration Test', {
	// refresh: function(frm) {

	// }
	calculate: function (frm) {
		var child = frm.doc;
		for (var i = 0; i < child.table_1.length; i++) {
			var j = i - 1;
			if (j <= 0) { j = 0 }
			var dcp_index = (child.table_1[i].pen_mm - child.table_1[j].pen_mm) / (child.table_1[i].blow_count - child.table_1[j].blow_count)
			child.table_1[i].dcp_index = dcp_index
			child.table_1[i].den_index = Math.ceil(flt(189.93) / (Math.pow(flt(dcp_index), 0.53)))
		}
		refresh_field('table_1')
	},
	validate:function(frm){
		var total = frm.doc.loose_layer1+frm.doc.dense+frm.doc.meddense+frm.doc.loose_layer2
		console.log(total)
		frm.set_value("total_test_depth",total)
	}

});
