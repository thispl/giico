
frappe.ui.form.on('Plate Loading Test', {
	refresh: function (frm) {
		if(frm.doc.chart_image){
			frm.trigger("generate_graph")
		}
		frm.add_custom_button(__("Print"), function () {
			var f_name = frm.doc.name
			var print_format = "Plate Loading Test";
			window.open(frappe.urllib.get_full_url("/api/method/frappe.utils.print_format.download_pdf?"
				+ "doctype=" + encodeURIComponent("Plate Loading Test")
				+ "&name=" + encodeURIComponent(f_name)
				+ "&trigger_print=1"
				+ "&format=" + print_format
				+ "&no_letterhead=0"
			));
		})
		$('*[data-fieldname="gauge_2"]').find('.grid-add-row').hide();
		$('*[data-fieldname="gauge_3"]').find('.grid-add-row').hide();
		$('*[data-fieldname="mean_of_final_settlement"]').find('.grid-add-row').hide();
	

	},
	generate_graph:function(frm){
		var settlement = []
		var pressure = []
		var plt = frm.doc.mean_of_final_settlement;
		for (var i = 0; i < plt.length; i++) {
			settlement.push(plt[i].mean)
			pressure.push(plt[i].pressure)
		}
		var options = {
			chart: {
				type: 'line',
				height: 300
			},
			series: [{
				name: '',
				data: settlement
			}],
			yaxis: {
				title: {
					text: 'Settlement(mm)'
				},
			},
			xaxis: {
				title: {
					text: 'Stress (kN /m2)'
				},
				categories: [100,200,300,400,500,600,700,800,900,1000]
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

	},
	calculate: function (frm) {

		var child = frm.doc
		// console.log(child)
		for (var i = 0; i < child.gauge_1.length; i++) {
			var j = i - 1;
			if (j <= 0) {
				j = 0
			}
			var r = cur_frm.doc.gauge_1[0]["time_9"] - child.gauge_1[i].time_9
			cur_frm.doc.gauge_1[0]["corr_g1"] = 0
			child.gauge_1[i].corr_g1 = (-r)

		}
	
			var child1 = frm.doc.gauge_1
			var len = child1.length

			if (len !== 0) {
				for (var a = 0; a < len; a++) {
					var row = frappe.model.add_child(frm.doc, "Mean of Final Settlement", "mean_of_final_settlement");
					row.proving_ring_div = child1[a].proving_ring_div
					row.load = child1[a].load
					row.pressure = child1[a].pressure
					row.corr1 = child1[a].corr_g1
					// row.corr2 = child1[a].corr_g2
					// row.corr3 = child1[a].corr_g3
					
				}
				frm.refresh_field("mean_of_final_settlement")
			
		}

		var child1 = frm.doc.gauge_1
		var len = child1.length
		if (len !== 0) {
			for (var a = 0; a < len; a++) {
				var row = frappe.model.add_child(frm.doc, "Gauge 2", "gauge_2");
				row.proving_ring_div = child1[a].proving_ring_div
				row.load = child1[a].load
				row.pressure = child1[a].pressure
			}
			frm.refresh_field("gauge_2")
		}
		var child1 = frm.doc.gauge_1
		var len = child1.length
		if (len !== 0) {
			for (var a = 0; a < len; a++) {
				var row = frappe.model.add_child(frm.doc, "Gauge 3", "gauge_3");
				row.proving_ring_div = child1[a].proving_ring_div
				row.load = child1[a].load
				row.pressure_3 = child1[a].pressure
			}
			frm.refresh_field("gauge_3")
		}

	},
	calculate_2: function (frm) {
		var child = frm.doc
		var mean = frm.doc.mean_of_final_settlement
		for (var i = 0; i < child.gauge_2.length; i++) {
			var j = i - 1;
			if (j <= 0) {
				j = 0
			}
			var r = cur_frm.doc.gauge_2[0]["time_9"] - child.gauge_2[i].time_9
			frappe.model.set_value("Mean of Final Settlement", mean[i]['name'], "corr2", child.gauge_2[i].corr_g2)
			cur_frm.doc.gauge_2[0]["corr_g2"] = 0
			child.gauge_2[i].corr_g2 = (-r)
		}
		refresh_field("gauge_2")
		refresh_field("mean_of_final_settlement")
	},
	calculate_3: function (frm) {
		var child = frm.doc
		var mean = frm.doc.mean_of_final_settlement
		for (var i = 0; i < child.gauge_3.length; i++) {
			var j = i - 1;
			if (j <= 0) {
				j = 0
			}
			var r = cur_frm.doc.gauge_3[0]["time_9"] - child.gauge_3[i].time_9
			frappe.model.set_value("Mean of Final Settlement", mean[i]['name'], "corr3", child.gauge_3[i].corr_g3)
			frappe.model.set_value("Mean of Final Settlement", mean[i]['name'], "mean", (child.gauge_1[i].corr_g1+child.gauge_2[i].corr_g2+child.gauge_3[i].corr_g3)/300)
			cur_frm.doc.gauge_3[0]["corr_g3"] = 0
			child.gauge_3[i].corr_g3 = (-r)
		}
		refresh_field("gauge_3")
		refresh_field("mean_of_final_settlement")
	}
})

frappe.ui.form.on('Gauge 1', {
	load: function (frm, cdt, cdn) {
		var child = locals[cdt][cdn]
		var p = child.load * 9.807 / frm.doc.set_of_plates_used / frm.doc.set_of_plates_used / 3.1416 * 4
		frappe.model.set_value(child.doctype, child.name, "pressure", Math.round(p))
	},

})
frappe.ui.form.on('Mean of Final Settlement',{
	corr3:function(frm,cdt,cdn){
		var child = locals[cdt][cdn]
		var mean = (child.corr1+child.corr3+child.corr3)/300
		console.log(mean)


	}

})



