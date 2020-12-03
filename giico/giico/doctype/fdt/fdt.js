// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt
frappe.ui.form.on('FDT', {
	refresh: function (frm) {
		cur_frm.page.hide_menu()
		frm.add_custom_button(__("Print"), function () {
			var f_name = frm.doc.name
			var print_format = "FDT";
			window.open(frappe.urllib.get_full_url("/api/method/frappe.utils.print_format.download_pdf?"
				+ "doctype=" + encodeURIComponent("FDT")
				+ "&name=" + encodeURIComponent(f_name)
				+ "&trigger_print=1"
				+ "&format=" + print_format
				+ "&no_letterhead=0"
			));


		})
		var child1 = frm.doc.sand_cone_test_data
		frm.trigger("load_desc")

	},
	onload: function (frm) {
		frm.trigger("load_desc")
	},

	load_desc: function (frm) {
		if (frm.doc.description != 1) {
			frappe.call({
				"method": "frappe.client.get",
				args: {
					"doctype": "FDT Calculations",
					"name": 'Test'
				},
				callback: function (r) {
					if (r.message) {
						var child = r.message.fdt_test
						var len = child.length
						if (len !== 0) {
							for (var i = 0; i < len; i++) {
								var test1 = frappe.model.add_child(frm.doc, "fdt__test");
								var test2 = frappe.model.add_child(frm.doc, "fdt_test_2");
								var test3 = frappe.model.add_child(frm.doc, "fdt_test_3");
								var test4 = frappe.model.add_child(frm.doc, "fdt_test_4");
								test1.description = child[i].description
								test2.description = child[i].description
								test3.description = child[i].description
								test4.description = child[i].description
							}
							refresh_many(["fdt__test", "fdt_test_2", "fdt_test_3", "fdt_test_4"])

						}
					}

				}

			})
			frm.set_value("description", 1)
		}
	},
	// onload_post_render:function(frm){
	// 	cur_frm.get_field("fdt_test_2").grid.grid_rows[2].columns.test_no1.df.read_only = 1	
	// 	cur_frm.get_field("fdt_test_2").grid.grid_rows[2].columns.test_no2.df.read_only = 1	
	// 	cur_frm.get_field("fdt_test_2").grid.grid_rows[2].columns.test_no3.df.read_only = 1	
	// 	cur_frm.get_field("fdt_test_2").grid.grid_rows[2].columns.test_no4.df.read_only = 1	
	// 	cur_frm.get_field("fdt_test_2").grid.grid_rows[2].columns.test_no5.df.read_only = 1	
	// },


	calculate1: function (frm) {
		frm.events.wt_of_sand_in_plate_and_cone(frm, frm.doc.fdt__test)
		frm.events.bulk_density_of_sand(frm, frm.doc.fdt__test)
		frm.events.calculate(frm, frm.doc.fdt__test)
	},
	calculate2: function (frm) {
		frm.events.wt_of_sand_in_plate_and_cone(frm, frm.doc.fdt_test_2)
		frm.events.bulk_density_of_sand(frm, frm.doc.fdt_test_2)
		frm.events.calculate(frm, frm.doc.fdt_test_2)
	},
	calculate3: function (frm) {
		frm.events.wt_of_sand_in_plate_and_cone(frm, frm.doc.fdt_test_3)
		frm.events.bulk_density_of_sand(frm, frm.doc.fdt_test_3)
		frm.events.calculate(frm, frm.doc.fdt_test_3)
	},
	calculate4: function (frm) {
		frm.events.wt_of_sand_in_plate_and_cone(frm, frm.doc.fdt_test_4)
		frm.events.bulk_density_of_sand(frm, frm.doc.fdt_test_4)
		frm.events.calculate(frm, frm.doc.fdt_test_4)
	},

	wt_of_sand_in_plate_and_cone: function (frm, method) {
		var child = method;
		for (var i = 0; i < child.length; i++) {
			child[3].test_no1 = frm.doc.wt_of_sand_in_plate_and_cone
		}
		refresh_many(["fdt__test", "fdt_test_2", "fdt_test_3", "fedt_test4"])
	},
	bulk_density_of_sand: function (frm, method) {
		var child = method;
		for (var i = 0; i < child.length; i++) {
			child[4].test_no1 = frm.doc.bulk_density_of_sand
		}
		refresh_many(["fdt__test", "fdt_test_2", "fdt_test_3", "fedt_test4"])
	},

	calculate: function (frm, method) {
		var child = method
		for (var i = 0; i < child.length; i++) {
			child[2].test_no1.toFixed(3) = child[0].test_no1.toFixed(3) - child[1].test_no1.toFixed(3)// wt_sand_hole_cone_plate = appt_with_sand - appt_remaining_sand
			child[5].test_no1.toFixed(3) = child[2].test_no1.toFixed(3) - child[3].test_no1.toFixed(3) // wt_sand_hole = wt_sand_hole_cone_plate - wt_sand_cone_plate
			child[6].test_no1.toFixed(3) = child[5].test_no1.toFixed(3) / child[4].test_no1.toFixed(3) // volume_test_hole = wt_sand_hole / bulk_density_of_sand
			child[9].test_no1.toFixed(3) = child[7].test_no1.toFixed(3) - child[8].test_no1.toFixed(3) // Wt. of wet soil from hole = Wt. of tare - Wt. of wet soil from hole+tare
			child[10].test_no1.toFixed(3) = child[9].test_no1.toFixed(3) / child[6].test_no1.toFixed(3) // Wet density = Wt. of wet soil from hole / Volume of test hole
			if (child[11].test_no1.toFixed(3)) {
				child[12].test_no1.toFixed(3) = child[10].test_no1 / (1 + (child[11].test_no1 / 100)) //dry-density
			}
			child[16].test_no1.toFixed(3) = (100 * child[12].test_no1 / child[14].test_no1)

			if (child[15].test_no1.toFixed(3)) {
				if (child[16].test_no1 < child[15].test_no1) {
					child[17].test_no1 = 'Fail'
				}
				else {
					child[17].test_no1 = 'Pass'
				}
			}
			child[2].test_no2 = child[0].test_no2 - child[1].test_no2 // wt_sand_hole_cone_plate = appt_with_sand - appt_remaining_sand
			if (child[2].test_no2) {
				child[3].test_no2 = frm.doc.wt_of_sand_in_plate_and_cone
				child[4].test_no2 = frm.doc.bulk_density_of_sand
			}
			child[5].test_no2 = child[2].test_no2 - child[3].test_no2 // wt_sand_hole = wt_sand_hole_cone_plate - wt_sand_cone_plate
			child[6].test_no2 = child[5].test_no2 / child[4].test_no2 // volume_test_hole = wt_sand_hole / bulk_density_of_sand
			child[9].test_no2 = child[7].test_no2 - child[8].test_no2 // Wt. of wet soil from hole = Wt. of tare - Wt. of wet soil from hole+tare
			child[10].test_no2 = child[9].test_no2 / child[6].test_no2 // Wet density = Wt. of wet soil from hole / Volume of test hole
			if (child[11].test_no2) {
				child[12].test_no2 = child[10].test_no2 / (1 + (child[11].test_no2 / 100)) //dry-density
			}
			child[16].test_no2 = (100 * child[12].test_no2 / child[14].test_no2)
			if (child[15].test_no2) {
				if (child[16].test_no2 < child[15].test_no2) {
					child[17].test_no2 = 'Fail'
				}
				else {
					child[17].test_no2 = 'Pass'
				}
			}
			// child[2].test_no2 = child[0].test_no2 - child[1].test_no2
			// if(child[2].test_no2){
			// 	child[3].test_no2 = frm.doc.wt_of_sand_in_plate_and_cone
			// 	child[4].test_no2 = frm.doc.bulk_density_of_sand
			// }
			child[2].test_no3 = child[0].test_no3 - child[1].test_no3 // wt_sand_hole_cone_plate = appt_with_sand - appt_remaining_sand
			if (child[2].test_no3) {
				child[3].test_no3 = frm.doc.wt_of_sand_in_plate_and_cone
				child[4].test_no3 = frm.doc.bulk_density_of_sand
			}
			child[5].test_no3 = child[2].test_no3 - child[3].test_no3 // wt_sand_hole = wt_sand_hole_cone_plate - wt_sand_cone_plate
			child[6].test_no3 = child[5].test_no3 / child[4].test_no3 // volume_test_hole = wt_sand_hole / bulk_density_of_sand
			child[9].test_no3 = child[7].test_no3 - child[8].test_no3 // Wt. of wet soil from hole = Wt. of tare - Wt. of wet soil from hole+tare
			child[10].test_no3 = child[9].test_no3 / child[6].test_no3 // Wet density = Wt. of wet soil from hole / Volume of test hole
			if (child[11].test_no3) {
				child[12].test_no3 = child[10].test_no3 / (1 + (child[11].test_no3 / 100)) //dry-density
			}
			child[16].test_no3 = (100 * child[12].test_no3 / child[14].test_no3)

			if (child[15].test_no3) {
				if (child[16].test_no3 < child[15].test_no3) {
					child[17].test_no3 = 'Fail'
				}
				else {
					child[17].test_no3 = 'Pass'
				}
			}
			child[2].test_no4 = child[0].test_no4 - child[1].test_no4 // wt_sand_hole_cone_plate = appt_with_sand - appt_remaining_sand
			if (child[2].test_no4) {
				child[3].test_no4 = frm.doc.wt_of_sand_in_plate_and_cone
				child[4].test_no4 = frm.doc.bulk_density_of_sand
			}
			child[5].test_no4 = child[2].test_no4 - child[3].test_no4 // wt_sand_hole = wt_sand_hole_cone_plate - wt_sand_cone_plate
			child[6].test_no4 = child[5].test_no4 / child[4].test_no4 // volume_test_hole = wt_sand_hole / bulk_density_of_sand
			child[9].test_no4 = child[7].test_no4 - child[8].test_no4 // Wt. of wet soil from hole = Wt. of tare - Wt. of wet soil from hole+tare
			child[10].test_no4 = child[9].test_no4 / child[6].test_no4 // Wet density = Wt. of wet soil from hole / Volume of test hole
			if (child[11].test_no4) {
				child[12].test_no4 = child[10].test_no4 / (1 + (child[11].test_no4 / 100)) //dry-density
			}
			child[16].test_no4 = (100 * child[12].test_no4 / child[14].test_no4)

			if (child[15].test_no4) {
				if (child[16].test_no4 < child[15].test_no4) {
					child[17].test_no4 = 'Fail'
				}
				else {
					child[17].test_no4 = 'Pass'
				}
			}

			child[2].test_no5 = child[0].test_no5 - child[1].test_no5 // wt_sand_hole_cone_plate = appt_with_sand - appt_remaining_sand
			if (child[2].test_no5) {
				child[3].test_no5 = frm.doc.wt_of_sand_in_plate_and_cone
				child[4].test_no5 = frm.doc.bulk_density_of_sand
			}
			child[5].test_no5 = child[2].test_no5 - child[3].test_no5 // wt_sand_hole = wt_sand_hole_cone_plate - wt_sand_cone_plate
			child[6].test_no5 = child[5].test_no5 / child[4].test_no5 // volume_test_hole = wt_sand_hole / bulk_density_of_sand
			child[9].test_no5 = child[7].test_no5 - child[8].test_no5 // Wt. of wet soil from hole = Wt. of tare - Wt. of wet soil from hole+tare
			child[10].test_no5 = child[9].test_no5 / child[6].test_no5 // Wet density = Wt. of wet soil from hole / Volume of test hole
			if (child[11].test_no5) {
				child[12].test_no5 = child[10].test_no5 / (1 + (child[11].test_no5 / 100)) //dry-density
			}
			child[16].test_no5 = (100 * child[12].test_no5 / child[14].test_no5)

			if (child[15].test_no5) {
				if (child[16].test_no5 < child[15].test_no5) {
					child[17].test_no5 = 'Fail'
				}
				else {
					child[17].test_no5 = 'Pass'
				}
			}
		}
		refresh_many(["fdt__test", "fdt_test_2", "fdt_test_3", "fedt_test4"])
	}
})

frappe.ui.form.on('FDT Test 1', {
	refresh(frm) {
		// your code here
	},


})