// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Field CBR', {
	refresh: function (frm) {
		var inch = []
		var psi = []
		var pi = frm.doc.penetration;
		console.log(pi)
		for (var i = 0; i < pi.length; i++) {
			inch.push(pi[i].penetrationinch)
			psi.push(pi[i].psi)
		}
		console.log(inch)
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			series: [{
				name: 'Load - Penetration Curves',
				data: psi
			}],
			yaxis: {
				title: {
					text: 'STRESS (psi)'
				},
			},
			xaxis: {
				title: {
					text: 'PENETRATION(in)'
				},
				categories: [0.00, 0.05, 0.10, 0.15, 0.20, 0.25, 0.30, 0.35, 0.40, 0.45]
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
