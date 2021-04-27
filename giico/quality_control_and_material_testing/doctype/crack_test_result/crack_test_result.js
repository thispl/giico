// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Crack Test Result', {
	onload: function (frm) {
		if (frappe.user.has_role("Technician")) {
			hide_field(['customer', 'department'])
		}
	},
	refresh: function (frm) {
		if (frm.doc.chart_image) {
			frm.trigger("generate_graph")
		}
	},
	generate_graph: function (frm) {
		var t1 = []
		var t2 = []
		var crack = frm.doc.crack_test;
		// console.log(fhp)
		for (var i = 0; i < crack.length; i++) {
			t1.push(crack[i].distance)
			t2.push(crack[i].transit_time)
			console.log(t2)
		}
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			series: [{
				name: '',
				data: t2
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
				categories: [0, 200, 400, 600, 800, 1000]
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
