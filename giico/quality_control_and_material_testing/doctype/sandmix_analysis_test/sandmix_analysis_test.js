// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sandmix Analysis Test', {
    onload: function (frm) {
        if (frappe.user.has_role("Technician")) {
            hide_field(['customer', 'department'])
        }
    },
    refresh: function (frm) {
        var pass = []
        var sieve = []
        var sandmix = frm.doc.sandmix_analysis;
        for (var i = 0; i < sandmix.length; i++) {
            pass.push(sandmix[i].passing)
            sieve.push(sandmix[i].sieve_size)
        }
        // console.log(pass)
        console.log(sieve)
        var options = {
            chart: {
                type: 'line',
                height: 300
            },
            series: [{
                name: 'Grain Size Distribution Curve',
                data: pass

            },
            {
                data: sieve
            }
            ],
            yaxis: {
                title: {
                    text: 'Passing%'
                },
            },
            xaxis: {
                title: {
                    text: 'Particle size(mm)'
                },
                categories: [1, 0.1, 1, 10, 100]
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
