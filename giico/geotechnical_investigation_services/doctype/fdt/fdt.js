// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('FDT', {
	// refresh: function(frm) {

	// }
	editable: function (frm) {

	},
	calculate: function (frm) {
		var test1 = cur_frm.doc.fdt__test[0]["test_no1"] - cur_frm.doc.fdt__test[1]["test_no1"]
		// console.log(test1)
		cur_frm.doc.fdt__test[2]["test_no1"] = test1
		if (cur_frm.doc.fdt__test[2]["description"] == "Wt. of sand in hole, plate and cone(g)") {
			cur_frm.get_field("fdt__test").grid.grid_rows[0].columns.test_no1.df.read_only = 1;
		}

		cur_frm.refresh_fields("fdt__tests")
	}

});
