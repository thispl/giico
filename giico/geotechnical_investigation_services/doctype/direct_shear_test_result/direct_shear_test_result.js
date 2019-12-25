frappe.ui.form.on('Direct Shear Test Result', {
	refresh(frm) {
		cur_frm.page.hide_menu()
		frm.add_custom_button(__("Print"), function () {
			var f_name = frm.doc.name
			var print_format = "Direct shear Test Result";
			window.open(frappe.urllib.get_full_url("/api/method/frappe.utils.print_format.download_pdf?"
				+ "doctype=" + encodeURIComponent("Direct Shear Test Result")
				+ "&name=" + encodeURIComponent(f_name)
				+ "&trigger_print=1"
				+ "&format=" + print_format
				+ "&no_letterhead=0"
			));
		})
		if (frm.doc.desc != 1) {
			frappe.call({
				"method": "frappe.client.get",
				args: {
					"doctype": "Shear Test",
					"name": 'SAM0001'
				},
				callback: function (r) {
					if (r.message) {
						var child = r.message.sample_data
						var len = child.length
						if (len !== 0) {
							for (var i = 0; i < len; i++) {
								var row = frappe.model.add_child(frm.doc, "Sample", "sample");
								row.sample = child[i].name1

							}
							frm.refresh_field("sample")
						}
						frm.set_value("desc", 1)
					}

				}

			})
		}

		$('*[data-fieldname="sample"]').find('.grid-add-row').hide();
		if (frm.doc.chart_image) {
			frm.trigger("generate_graph")
		}

	},
	generate_graph: function (frm) {
		var normal_stress = []
		var shear_stress = []
		var ds = frm.doc.shear_test_results;
		for (var i = 0; i < ds.length; i++) {
			normal_stress.push(ds[i].normal_stress)
			shear_stress.push(ds[i].shear_stress)
		}
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			series: [{
				name: 'NORMAL VS SHEAR STRESS AT FAILURE',
				data: shear_stress
			}],
			yaxis: {
				title: {
					text: 'Shear Stress at Failure(kN/m2)'
				},
			},
			xaxis: {
				title: {
					text: 'Normal Stress (kN/m2)'
				},
				categories: [0.0, 25.0, 50.0, 75.0, 100.0, 125.0, 150.0, 175.0]
			}

		}
		var chart = new ApexCharts(document.querySelector("#chart"), options);
		chart.render().then(() => {
			window.setTimeout(function () {
				chart.dataURI().then((uri) => {
					frm.set_value("chart_image", uri)
				})
			}, 1000)

		});




	},
	calculate: function (frm) {
		if (frm.doc.description != 1) {
			var child = frm.doc.sample
			var len = child.length

			if (len !== 0) {
				for (var a = 0; a < len; a++) {
					var row = frappe.model.add_child(frm.doc, "Shear Test Results", "shear_test_results");
					row.sample = child[a].sample
					row.shear_stress = child[a].ct * child[a].div
					row.horizontal_displacement = child[a].disprate * child[a].time
					row.dry_density = child[a].dry_density
					row.void_ratio = (child[a].gs / child[a].dry_density) - 1
					row.moisture_content = child[a].wc_1
					console.log(child[a].ct * child[a].div)

				}
				frm.refresh_field("shear_test_results")
			}
			frm.set_value("description", 1)
		}





	}
})
frappe.ui.form.on('Sample', {

	dia: function (frm, cdt, cdn) {
		var child = locals[cdt][cdn]
		var area = Math.pow(child.dia, 2)
		frappe.model.set_value(child.doctype, child.name, "area", area)

	},
	area: function (frm, cdt, cdn) {
		var child = locals[cdt][cdn]
		var ct = (child.cr / child.area) * 1000
		frappe.model.set_value(child.doctype, child.name, "ct", ct)


	},
	height: function (frm, cdt, cdn) {
		var child = locals[cdt][cdn]
		var density = (child.mass / child.height / child.area) * 1000
		frappe.model.set_value(child.doctype, child.name, "density", density)


	},
	density: function (frm, cdt, cdn) {
		var child = locals[cdt][cdn]
		var dry_den = child.density / (1 + child.wc_1 / 100)
		frappe.model.set_value(child.doctype, child.name, "dry_density", dry_den)
	},
	ct: function (frm, cdt, cdn) {
		$.each(frm.doc.sample || [], function (i, v) {
			var s = v.div * v.ct

		});
	},

}),

	frappe.ui.form.on('Shear Test Results', {
		refresh(frm) {
			// your code here
		},
		// 	normal_stress:function(frm,cdt,cdn){

		// 	    var child = locals[cdt][cdn]
		// 	    var d = frm.doc.sample;
		// 	    var shear = frm.doc.shear_test_results
		// 	    console.log(shear)
		// 	     $.each(frm.doc.sample,function(i,d){
		// 	         $.each(shear,function(i,d1){
		// 	             var ns = d.ct*d.div
		// 	             console.log(ns)
		// 	                d1.shear_stress = ns
		// 	         })
		// 	           //  var ns = d.ct*d.div
		// 	           //  console.log(ns)
		// 	           //  var hd = d.disprate*d.time
		// 	           //  var dd = d.dry_density
		// 	           //  var vr = (d.gs/d.dry_density)-1
		// 	           //  var mc =  d.wc_1
		// 	           //  child.shear_stress = ns
		// 	           //  child.horizontal_displacement = d.disprate*d.time
		// 	           //  child.dry_density = d.dry_density
		// 	           //  child.void_ratio = (d.gs/d.dry_density)-1
		// 	           //  child.moisture_content = d.wc_1
		//         });
		//         refresh_field("shear_test_results")

		// 	}


	});