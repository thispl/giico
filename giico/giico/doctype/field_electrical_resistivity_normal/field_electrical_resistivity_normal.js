// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Field Electrical Resistivity Normal', {
	refresh: function(frm) {
		if(frm.doc.chart_image){
			frm.trigger("generate_graph")
		}

	},
	generate_graph: function (frm) {
		var soil_resistivity_ns = []
		var soil_resistivity_ew = []
		var electrode = []
		var ertns = frm.doc.table_7;
		console.log(ertns)
		for (var i = 0; i < ertns.length; i++) {
			if(ertns[i].test_no == "EAST/WEST"){
				soil_resistivity_ns.push(ertns[i].soil_resistivity)

			}
			electrode.push(ertns[i].electrode_interval)
			if (ertns[i].test_no == "NORTH/SOUTH") {
				soil_resistivity_ew.push(ertns[i].soil_resistivity)
			}
		}
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			series: [
				{
					name: 'North/South',
					data: soil_resistivity_ns
				}, {
					name: 'East/West',
					data: soil_resistivity_ew
				}
			],
			yaxis: {
				title: {
					text: 'Resistivity'
				},
			},
			xaxis: {
				title: {
					text: 'Electrode Spacing'
				},
				categories: [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0]
			},
			dataLabels: {
				enabled: true,
				style: {
					colors: ['#333']
				},
				// offsetX: 30
			},
		}
		var chart = new ApexCharts(document.querySelector("#chart"), options);
		chart.render().then(() => {
			window.setTimeout(function () {
				chart.dataURI().then((uri) => {
					frm.set_value("chart_image", uri)
				})
			}, 1000)

		});
	}
});
