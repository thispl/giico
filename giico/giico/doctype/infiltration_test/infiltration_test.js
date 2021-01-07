// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Infiltration Test', {
	refresh: function (frm) {
		// let cryptojs = [
		// 	// "/assets/frappe/node_modules/js-sha256/build/sha256.min.js",
		// 	"/assets/frappe/node_modules/crypto-js/sha256.js"
		// ];
		// frappe.require(cryptojs,() => {
		// 	console.log(cryptojs);
		// });
		// $.getScript("https://cdn.jsdelivr.net/npm/apexcharts").done(function () {
		var rate = []
		var time_interval = []
		var iftests = frm.doc.if_test;
		for (var i = 0; i < iftests.length; i++) {
			time_interval.push(iftests[i].cumul_time)
			rate.push(iftests[i].increm_inf)
		}
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			series: [{
				name: 'Infiltration Rate',
				data: rate
			}],
			yaxis: {
				title: {
					text: 'Incremental Infiltration Rate(cm/hr)'
				},
			},
			xaxis: {
				lines: {
					show: true
				},
				title: {
					text: 'Elapsed Time(mins)'
				},
				categories: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45]
			},

		}

		var chart = new ApexCharts(document.querySelector("#chart"), options);


		chart.render().then(() => {
			window.setTimeout(function () {
				chart.dataURI().then((uri) => {
					frm.set_value("chart_image", uri)
				})
			}, 1000)

		});
		// });
	}

});
