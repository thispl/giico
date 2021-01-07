// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Constant Head Permeability Test', {
	refresh: function (frm) {
		var k = []
		var test_no = []
		var ptp = frm.doc.ptp;
		// console.log(fhp)
		for (var i = 0; i < ptp.length; i++) {
			test_no.push(ptp[i].test_no)
			k.push(ptp[i].k_cm)
		}
		var options = {
			chart: {
				type: 'bar',
				height: 300
			},
			series: [{
				name: 'Permeability Coefficient(K)',
				data: k
			}],
			yaxis: {
				title: {
					text: 'Kx10-4(cm/sec)'
				},
			},
			xaxis: {
				title: {
					text: 'Test No'
				},
				categories: [1, 2, 3]
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