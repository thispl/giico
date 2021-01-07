// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Falling Head Method', {
	refresh: function (frm) {
		if(frm.doc.chart_image){
			frm.trigger("generate_graph")
		}
	},
	generate_graph: function (frm) {
		var k_cm = []
		var time = []
		var fp = frm.doc.fhm_test;
		for (var i = 0; i < fp.length; i++) {
			k_cm.push(fp[i].k_cmsec)
			time.push(fp[i].timesec)
		}
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			series: [{
				name: 'Field Permeability',
				data: k_cm
			}],
			yaxis: {
				title: {
					text: 'Permeability in X10-4 cm/sec'
				},
			},
			xaxis: {
				title: {
					text: 'Time in sec'
				},
				categories: [0,2000,4000,6000,8000,10000,12000,14000]
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
