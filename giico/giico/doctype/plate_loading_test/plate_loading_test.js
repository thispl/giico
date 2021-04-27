frappe.ui.form.on('Plate Loading Test', {
	refresh: function (frm) {
		frm.add_custom_button(__("Print"), function () {
			var f_name = frm.doc.name
			var print_format = "Plate Loading Test";
			window.open(frappe.urllib.get_full_url("/api/method/frappe.utils.print_format.download_pdf?"
				+ "doctype=" + encodeURIComponent("Plate Loading Test")
				+ "&name=" + encodeURIComponent(f_name)
				+ "&trigger_print=1"
				+ "&format=" + print_format
				+ "&no_letterhead=0"
			));
		})
		

	},
	calculate:function(frm){
		// frappe.model.set_value(mt.doctype, mt.name, "pressure", Math.round(p))
		var l1 = frm.doc.gauge_1
		var l2 = frm.doc.gauge_2
		var l = l1.length + l2.length
		for(var i=0; i<l; i++){
			var ms = frappe.model.add_child(frm.doc,frm.doc.doctype, "mean_of_final_settlement");
			$.each(frm.doc.gauge_1, function (i, d) {
				frappe.model.set_value(ms.doctype, ms.name, "corr1",d.corr_g1)
			})
			// frm.refresh_field('mean_of_final_settlement')
			}
		frm.refresh_field('mean_of_final_settlement')

		

		// $.each(frm.doc.gauge_2, function (i, d) {
		// 	var ms = frm.doc.mean_of_final_settlement
			
		// 	$.each(frm.doc.mean_of_final_settlement,function(a,b){
		// 		frappe.model.set_value(b.doctype, b.name, "corr2",d.corr_g2)
		// 	})
		// })
		// frm.refresh_field('mean_of_final_settlement')
	}
})

frappe.ui.form.on('Gauge 1', {
	load: function (frm, cdt, cdn) {
		var child = locals[cdt][cdn]
		var p = child.load * 9.807 / frm.doc.set_of_plates_used / frm.doc.set_of_plates_used / 3.1416 * 4
		frappe.model.set_value(child.doctype, child.name, "pressure", Math.round(p))
	},


})

frappe.ui.form.on('Gauge 2', {

})

