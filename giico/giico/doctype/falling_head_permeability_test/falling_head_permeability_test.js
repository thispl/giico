// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Falling Head Permeability Test', {
	refresh: function (frm) {
		if (frm.doc.chart_image) {
			frm.trigger("generate_graph")
		}
		var k = []
		var test_no = []
		var fhp = frm.doc.table_18;
		// console.log(fhp)
		for (var i = 0; i < fhp.length; i++) {
			test_no.push(fhp[i].test_no)
			k.push(fhp[i].k_cm)

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

		console.log(test_no)


	}
});
// var rate = []
// 			var time_interval = []
// 			var iftests = frm.doc.if_test;
// 			for (var i = 0; i < iftests.length; i++) {
// 				time_interval.push(iftests[i].cumul_time)
// 				rate.push(iftests[i].increm_inf)
// 			  }
// 			var options = {
// 				chart: {
// 					type: 'line',
// 					height: 300
// 				},
// 				series: [{
// 					name: 'Infiltration Rate',
// 					data: rate
// 				}],
// 				yaxis: {
// 					title: {
// 						text: 'Incremental Infiltration Rate(cm/hr)'
// 					},
// 				  },
// 				xaxis: {
// 					lines: {
// 						show: true
// 					  },
// 					title: {
// 						text: 'Elapsed Time(mins)'
// 					},
// 					categories: [0,5,10,15,20,25,30,35,40,45]
// 				},

// 			}

// 			var chart = new ApexCharts(document.querySelector("#chart"), options);


// 			chart.render().then(() => {
// 				window.setTimeout(function() {
// 					chart.dataURI().then((uri) => {
// 						frm.set_value("chart_image",uri)
// 					})
// 				}, 1000) 

// 			});
// 		// });
// 	}

