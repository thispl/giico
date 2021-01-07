// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Field Electrical Resistivity', {
	refresh: function (frm) {
		if (frm.doc.chart_image) {
			frm.trigger("generate_graph")
		}

	},
	generate_graph: function (frm) {
		var ei = []
		var sr = []
		var fer = frm.doc.fer_test;
		for (var i = 0; i < fer.length; i++) {
			ei.push(fer[i].electrode_interval)
			sr.push(fer[i].soil_resistivity)
		}
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			series: [{
				name: 'EAST/WEST',
				data: sr
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
				categories: [0.00, 2.00, 4.00, 6.00, 8.00, 10.00, 12.00]
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
	}
});
