// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Crack Test Result', {
	refresh: function (frm) {
		var t1 = []
		var t2 = []
		var crack = frm.doc.crack_test;
		// console.log(fhp)
		for (var i = 0; i < crack.length; i++) {
			t1.push(crack[i].distance)
			t2.push(crack[i].transit_time)
			console.log(t1)
		}
		var options = {
			chart: {
				type: 'bar',
				height: 300
			},
			series: [{
				name: '',
				data: t1
			}],
			yaxis: {
				title: {
					text: ''
				},
			},
			xaxis: {
				title: {
					text: ''
				},
				// categories: [1, 2, 3]
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
