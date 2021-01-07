// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Field Permeability Test', {
	refresh(frm){
		if (frm.doc.chart_image) {
			frm.trigger("generate_graph")
		}
	},
	generate_graph: function (frm) {
		var permeability = []
		var time = []
		var fpt = frm.doc.fp_test;
		for (var i = 0; i < fpt.length; i++) {
			permeability.push(fpt[i].k_cmsec)
			time.push(fpt[i].time_sec)
		}
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			// stroke: {
			// 	curve: 'smooth'
			//   },
			series: [{
				name: '',
				// type:'area',
				data: permeability
			}],
			yaxis: {
				title: {
					text: 'Permeability in X10-4 cm/sec'
				},
			},
			xaxis: {
				title: {
					text: 'Time in Sec'
				},
				categories: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500]
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
