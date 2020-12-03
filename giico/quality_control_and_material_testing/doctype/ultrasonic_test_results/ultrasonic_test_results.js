// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Ultrasonic Test Results', {
	onload: function (frm) {
		if (frappe.user.has_role("Technician")) {
			hide_field(['customer', 'department'])
		}
	}
});
