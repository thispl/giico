// Copyright (c) 2020, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Field Test Entry', {
	refresh: function (frm) {

		// frm.set_query("project_id", function () {
		// 	return {
		// 		"filters": [
		// 			["Project", "department", "in", ["Geotechnical Investigation Services - GIICO", "Quality Control & Material Testing - GIICO"],]
		// 			// "department": ("in",["Geotechnical Investigation Services - GIICO","Quality Control & Material Testing - GIICO"])
		// 		]
		// 	}
		// });

		// frm.set_query("project_id", function () {
		// 	if (frappe.session.user) {
		// 		return {
		// 			"filters": [
		// 				// ["Project", "department", "=", "Geotechnical Investigation Services - GIICO"],
		// 				["Project", "_assign", "in", frappe.session.user],

		// 			]
		// 		}

		// 	}

		// });
	},
	project_id: function (frm) {
		frappe.call({
			"method": "frappe.client.get",
			args: {
				"doctype": "Project",
				"name": frm.doc.project_id,
				"assign": frappe.session.user

			},
			callback: function (r) {
				if (r.message) {
					var child = r.message.select_test
					var len = child.length
					if (len !== 0) {
						for (var i = 0; i < len; i++) {
							var test1 = frappe.model.add_child(frm.doc, "project_tests");
							test1.select_test = child[i].select_test
						}
						refresh_field("project_tests")
					}
					console.log(r)
				}

			}

		})
		// frappe.call({
		// 	"method": "giico.custom.assign",
		// 	args: {
		// 		"doctype": "Project",
		// 		"name": frm.doc.project_id
		// 	},
		// 	callback: function (r) {

		// 	}

		// })




	}
});

frappe.ui.form.on("Project Test", {

	open: function (frm, cdt, cdn) {
		var child = locals[cdt][cdn]
		var test = child.select_test
		frappe.route_options = {
			"project": frm.doc.project_id
		}
		frappe.set_route('List', test);

	}
})
