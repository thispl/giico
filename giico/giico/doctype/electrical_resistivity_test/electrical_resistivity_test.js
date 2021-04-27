// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Electrical Resistivity Test', {
	refresh: function (frm) {
		$.getScript('https://cdn.jsdelivr.net/npm/frappe-charts@1.1.0/dist/frappe-charts.min.iife.js',
			function () {
				let chart = new frappe.Chart("#graph_view", {
					data: {
						labels: ["12am-3am", "3am-6pm", "6am-9am", "9am-12am",
							"12pm-3pm", "3pm-6pm", "6pm-9pm", "9am-12am"
						],
						datasets: [
							{
								name: "Some Data", type: "bar",
								values: [25, 40, 30, 35, 8, 52, 17, -4]
							},
							{
								name: "Another Set", type: "line",
								values: [25, 50, -10, 15, 18, 32, 27, 14]
							}
						]
					},
					title: "Chart",
					type: 'axis-mixed',
					height: 300,
					colors: ['purple', '#ffa3ef', 'light-blue'],

					tooltipOptions: {
						formatTooltipX: d => (d + '').toUpperCase(),
						formatTooltipY: d => d + ' pts',
					}
				});

			});
	}

});
