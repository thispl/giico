// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Collapse Potential Tests', {
	refresh: function (frm) {
		if(frm.doc.chart_image){
			frm.trigger("generate_graph")
		}
	},
	generate_graph: function (frm) {
		var kpa = []
		var test_no = []
		var cp = frm.doc.collapse_potential;
		console.log(cp)
		for (var i = 0; i < cp.length; i++) {
			test_no.push(cp[i].stress_kpa)
			kpa.push(cp[i].strain)
		}
		console.log(test_no)
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			series: [{
				name: 'Compression curve of Collapse potential test',
				data: kpa
			}],
			yaxis: {
				title: {
					text: 'Strain(%)'
				},
			},
			xaxis: {
				title: {
					text: 'Applied Vertical Stress (kPa)'
				},
				categories: [1, 10, 100, 1000, 10000]
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
