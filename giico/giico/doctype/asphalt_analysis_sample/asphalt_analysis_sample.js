// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Asphalt Analysis Sample', {
	refresh: function(frm) {
		var sieve = []
		var pass = []
		var asp = frm.doc.gradation
		for (var i = 0; i < asp.length; i++) {
			sieve.push(asp[i].sieve_size)
			pass.push(asp[i].passing)
		}
		console.log(sieve)
		console.log(pass)
		var options = {
			chart: {
				type: 'line',
				height: 400
			},
			series: [{
				name: 'GRAIN SIZE DISTRIBUION CURVE',
				data: pass
			}],
			yaxis: {
				title: {
					text: 'Passing(%)'
				},
			},
			xaxis: {
				title: {
					text: 'Particle Size'
				},
				categories: [0.01, 0.1, 1, 10, 100]
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
