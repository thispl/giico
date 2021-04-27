frappe.ui.form.on('Infiltration Test', {
	refresh:function(frm){
	// 		if(frm.doc.chart_image){
	// 			frm.trigger("generate_graph")
	// 		}
	
	// 	cur_frm.page.hide_menu()
	// 	frm.add_custom_button(__("Print"), function () {
	// 		var f_name = frm.doc.name
	// 		var print_format = "Infiltration Test";
	// 		window.open(frappe.urllib.get_full_url("/api/method/frappe.utils.print_format.download_pdf?"
	// 			+ "doctype=" + encodeURIComponent("Infiltration Test")
	// 			+ "&name=" + encodeURIComponent(f_name)
	// 			+ "&trigger_print=1"
	// 			+ "&format=" + print_format
	// 			+ "&no_letterhead=0"
	// 		));


	// 	})
	},
	// calculate: function (frm, cdt, cdn) {
	// 	// var child = frm.doc;
	// 	// for (var i = 0; i < child.if_test.length; i++) {
	// 	// 	var j = i - 1;
	// 	// 	if (j <= 0) { j = 0 }
	// 	// 	var cumul_time = child.if_test[i].time_interval + 0
	// 	// 	cur_frm.doc.if_test[0].cumul_time = cumul_time
	// 	// 	var c = child.if_test[i].time_interval+child.if_test[i].cumul_time
	// 	// 	console.log(c)

	// 	// }
	// 	refresh_field('if_test')
	// },




	// diameter_ring: function (frm) {
	// 	var a = 3.1416 * frm.doc.diameter_ring * frm.doc.diameter_ring / 4
	// 	frm.set_value("area", a)
	// }


})

// frappe.ui.form.on('IF Test', {
// 	height_water: function (frm, cdt, cdn) {
// 		var child = locals[cdt][cdn]
// 		var a = child.height_water * 60 / child.time_interval
// 		frappe.model.set_value(child.doctype, child.name, "increm_inf", a);

// 		frm.refresh_field("if_test")
// 	},
// 	increm_inf: function (frm, cdt, cdn) {
// 		var child = locals[cdt][cdn]
// 		var b = child.height_water * frm.doc.area
// 		frappe.model.set_value(child.doctype, child.name, "q", b);
// 		var c = child.q / frm.doc.area / chid.time_interval / 60
// 		frappe.model.set_value(child.doctype, child.name, "cmsec", c);
// 		var d = child.cmsec * 60 * 60
// 		frappe.model.set_value(child.doctype, child.name, "cmhr", d);
// 		var e = child.cmsec / 100
// 		frappe.model.set_value(child.doctype, child.name, "msec", e);
// 		var f = child.msec / 10000
// 		frappe.model.set_value(child.doctype, child.name, "msec1", f);
// 	},
// })
