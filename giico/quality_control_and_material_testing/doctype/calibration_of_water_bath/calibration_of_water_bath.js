// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Calibration Of Water Bath', {
	onload: function (frm) {
		if (frappe.user.has_role("Technician")) {
			hide_field(['customer', 'department'])
		}
	}
});
