frappe.ui.form.on('Data for Source S1 and Receiver R1', {
    unit: function (frm, cdt, cdn) {
        var child = locals[cdt][cdn]
        var unit = child.unit / 9.81
        frappe.model.set_value(child.doctype, child.name, "mass_density", unit.toFixed(3))
    },
    x1: function (frm, cdt, cdn) {
        var child = locals[cdt][cdn]
        var x = child.x1 / 1000000
        // console.log(x)
        frappe.model.set_value(child.doctype, child.name, "tp1", x)
        var r1 = Math.sqrt(Math.pow(child.r1_test, 2) + Math.pow(frm.doc.h, 2))
        console.log(r1)
        frappe.model.set_value(child.doctype, child.name, "sr1", r1.toFixed(2))
        var tp1 = child.sr1 / child.tp1 - child.ttrig_p
        frappe.model.set_value(child.doctype, child.name, "vp1", Math.round(tp1))
        var m1 = child.mass_density * child.vp1 * child.vp1 / 1000
        frappe.model.set_value(child.doctype, child.name, "m1", Math.round(m1))
    },
    y1: function (frm, cdt, cdn) {
        var child = locals[cdt][cdn]
        var y = child.y1 / 1000000
        frappe.model.set_value(child.doctype, child.name, "ts1", y)

        var w = child.sr1 / (child.ts1 - child.ttrig_s)
        frappe.model.set_value(child.doctype, child.name, "vs1", Math.round(w))

        var d = (0.5 * ((Math.pow(w, 2) - 1)) / (Math.pow(w, 2) - 1))
        var r = 0.5 * Math.pow(child.vp1 / child.vs1, 2) - 1

        var mass = child.mass_density * child.vs1 * child.vs1 / 1000
        frappe.model.set_value(child.doctype, child.name, "g1", Math.round(mass))
        var w1 = (child.vs1 / child.vp1)
        var w2 = 0.5 * ((1 - 2 * w1 * w1) / (1 - w1 * w1))
        frappe.model.set_value(child.doctype, child.name, "m2", w2.toFixed(2))
        var m = parseFloat(1)
        var m1 = parseFloat(child.m2)
        var c = m + m1
        var e = 2 * child.g1 * c
        frappe.model.set_value(child.doctype, child.name, "e", Math.round(e))
    }

})
frappe.ui.form.on('Downhole Test', {
    refresh(frm) {
        // your code here
        cur_frm.page.hide_menu()
        frm.add_custom_button(__("Print"), function () {
            var f_name = frm.doc.name
            var print_format = "Downhole Test";
            window.open(frappe.urllib.get_full_url("/api/method/frappe.utils.print_format.download_pdf?"
                + "doctype=" + encodeURIComponent("Downhole Test")
                + "&name=" + encodeURIComponent(f_name)
                + "&trigger_print=1"
                + "&format=" + print_format
                + "&no_letterhead=0"
            ));

        })
        $('*[data-fieldname="s2_r2"]').find('.grid-add-row').hide();
        $('*[data-fieldname="soil_parameters"]').find('.grid-add-row').hide();
        if(frm.doc.chart_image){
            frm.trigger("generate_graph")
        }
    },
    generate_graph: function (frm) {
        var depth = []
        var e = []
        var g = []
        var soil = frm.doc.soil_parameters;
        for (var i = 0; i < soil.length; i++) {
            depth.push(soil[i].depth)
            if (soil[i].e1) {
                e.push(soil[i].e1)

            }
            if (soil[i].g) {
                g.push(soil[i].g)
            }

            // console.log(g)

        }
        var options = {
            chart: {
                type: 'line',
                height: 400
            },
            stroke: {
                curve: 'smooth'
            },
            series: [{
                name: '',
                data: e
            },
            {
                name: '',
                data: g
            }
            ],
            yaxis: {
                title: {
                    text: ''
                },
            },

            xaxis: {
                title: {
                    text: ''
                },
                categories: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000]
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
        if (frm.doc.desc != 1) {
            var child1 = frm.doc.table_2
            var len = child1.length
            if (len !== 0) {
                for (var b = 0; b < len; b++) {
                    var r = frm.doc.soil_parameters
                    var row = frappe.model.add_child(frm.doc, "Soil Parameters", "soil_parameters");
                    row.depth = child1[b].r1_test
                    row.g = child1[b].g1
                    row.m1 = child1[b].m1
                    row.m = child1[b].m2
                    row.e1 = child1[b].e
                }
                frm.refresh_field("soil_parameters")
            }
            frm.set_value("desc", 1)


            var child2 = frm.doc.table_2
            var len = child2.length
            if (len !== 0) {
                for (var b = 0; b < len; b++) {
                    var row = frappe.model.add_child(frm.doc, "Data for Source S2 and Receiver R2", "s2_r2");
                    row.test = child2[b].test
                    var r1 = child2[b].r1_test + frm.doc.r1_r2
                    row.r2_test = r1
                }
                frm.refresh_field("s2_r2")
            }
            frm.set_value("desc", 1)
            var child3 = frm.doc.table_2
            var len = child3.length
            if (len != 0) {
                for (var b = 0; b < len; b++) {
                    var row = frappe.model.add_child(frm.doc, "Velocity", "velocity");
                    row.depth = child3[b].r1_test
                    row.vs = child3[b].vs1
                    row.vp = child3[b].vp1

                }
                frm.refresh_field("velocity")
            }
            var child4 = frm.doc.table_2
            var len = child4.length
            if (len != 0) {
                for (var b = 0; b < len; b++) {
                    var row = frappe.model.add_child(frm.doc, "Time", "time");
                    row.depth = child4[b].r1_test
                    row.ts = child4[b].ts1
                    row.tp = child4[b].tp1
                }
                frm.refresh_field("time")
            }

        }

    },
    calculate1: function (frm) {
        var child = frm.doc.s2_r2
        var len = child.length
        if (len != 0) {
            for (var b = 0; b < len; b++) {
                var row = frappe.model.add_child(frm.doc, "Soil Parameters", "soil_parameters")
                row.depth = child[b].r2_test
                row.g = child[b].g2
                row.m1 = child[b].m2
                row.m = child[b].m2r
                row.e1 = child[b].e1
            }
            frm.refresh_field("soil_parameters")
        }
        var child = frm.doc.s2_r2
        var len = child.length
        if (len != 0) {
            for (var b = 0; b < len; b++) {
                var velocity = frm.doc.velocity

                var row = frappe.model.add_child(frm.doc, "Velocity", "velocity")
                row.depth = child[b].r2_test
                row.vs = child[b].vs2
                row.vp = Math.round(child[b].vp2)
            }
            frm.refresh_field("velocity")
        }
        var child = frm.doc.s2_r2
        var len = child.length
        if (len != 0) {
            for (var b = 0; b < len; b++) {
                var row = frappe.model.add_child(frm.doc, "Time", "time")
                row.depth = child[b].r2_test
                row.ts = child[b].ts2
                row.tp = child[b].tp2

            }
            frm.refresh_field("time")
        }

    }

})

frappe.ui.form.on('Data for Source S2 and Receiver R2', {
    refresh(frm) {
        // your code here
    },
    unit: function (frm, cdt, cdn) {
        var child = locals[cdt][cdn]
        var unit = child.unit / 9.81
        frappe.model.set_value(child.doctype, child.name, "mass_density", unit)
    },
    x1: function (frm, cdt, cdn) {
        var child = locals[cdt][cdn]
        var x = child.x1 / 1000000
        frappe.model.set_value(child.doctype, child.name, "tp2", x)
        var r1 = Math.sqrt((Math.pow(child.r2_test, 2) + Math.pow(frm.doc.h, 2)))
        frappe.model.set_value(child.doctype, child.name, "sr2", r1)
        var tp1 = child.sr2 / child.tp2 - child.ttrig_p
        frappe.model.set_value(child.doctype, child.name, "vp2", tp1)
        var m1 = child.mass_density * child.vp2 * child.vp2 / 1000
        frappe.model.set_value(child.doctype, child.name, "m2", Math.round(m1))

    },
    y1: function (frm, cdt, cdn) {
        var child = locals[cdt][cdn]
        var y = child.y1 / 1000000
        frappe.model.set_value(child.doctype, child.name, "ts2", y)
        var w = child.sr2 / (child.ts2 - child.ttrig_s)
        frappe.model.set_value(child.doctype, child.name, "vs2", Math.round(w))
        var mass = child.mass_density * child.vs2 * child.vs2 / 1000

        frappe.model.set_value(child.doctype, child.name, "g2", Math.round(mass))
        var s1 = (child.vs2 / child.vp2)
        var s2 = 0.5 * ((1 - 2 * s1 * s1) / (1 - s1 * s1))
        frappe.model.set_value(child.doctype, child.name, "m2r", s2)
        var e1 = 2 * child.g2 * (1 + child.m2r)
        frappe.model.set_value(child.doctype, child.name, "e1", Math.round(e1))
        // 		console.log(e)

    },
})
