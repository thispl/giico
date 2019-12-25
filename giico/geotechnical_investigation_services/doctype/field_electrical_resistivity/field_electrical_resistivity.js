frappe.ui.form.on('Field Electrical Resistivity', {
	refresh(frm) {
		 cur_frm.page.hide_menu()
            frm.add_custom_button(__("Print"), function () {
                var f_name = frm.doc.name
                var print_format = "Field Electrical Resistivity";
                 window.open(frappe.urllib.get_full_url("/api/method/frappe.utils.print_format.download_pdf?"
                    + "doctype=" + encodeURIComponent("Field Electrical Resistivity")
                    + "&name=" + encodeURIComponent(f_name)
                    + "&trigger_print=1"
                    + "&format=" + print_format
                    + "&no_letterhead=0"
                   ));
            

			})
			if(frm.doc.chart_image){
				frm.trigger("generate_graph")
			}
	},
	generate_graph: function (frm) {
		var resistivity = []
		var probe_spacing = []
		var fe = frm.doc.fer_test;
		for (var i = 0; i < fe.length; i++) {
			resistivity.push(fe[i].soil_resistivity)
			probe_spacing.push(fe[i].electrode_interval)
		}
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			series: [{
				name: 'EAST/WEST',
				data: resistivity
			}],
			yaxis: {
				title: {
					text: 'Resistivity (Ohm-m)'
				},
			},
			xaxis: {
				title: {
					text: 'Probe Spacing(m)'
				},
				categories: [0.0, 2.00,4.00,6.00,8.00,10.00,12.00]
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
	
})

frappe.ui.form.on('FER Test', {
resistance:function(frm,cdt,cdn) {
	    	 var child = locals[cdt][cdn]
	         var soil_resistivity =2*3.1416*child.electrode_interval*child.resistance
	    	 frappe.model.set_value(child.doctype, child.name, "soil_resistivity", soil_resistivity.toFixed(3));
            frm.refresh_field(fer_test)
	},
})