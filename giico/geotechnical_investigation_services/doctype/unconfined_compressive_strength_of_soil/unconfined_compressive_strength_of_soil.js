// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Unconfined Compressive Strength of Soil', {
	refresh: function (frm) {
		var strain = []
		var stress = []
		var ucs_test = frm.doc.ust_test
		for (var i = 0; i < ucs_test.length; i++) {
			strain.push(ucs_test[i].strain)
			stress.push(ucs_test[i].stress_kg)

		}
		// console.log(strain)
		// console.log(stress)
		var options = {
			chart: {
				type: 'line',
				height: 350
			},
			series: [{
				name: 'UCS Test (Stress-Strain Curve)',
				data: strain
			}],
			yaxis: {
				title: {
					text: 'Stress(kg/cm2)'
				},
			},
			xaxis: {
				title: {
					text: 'Strain(%)'
				},
				categories: [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5]
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
