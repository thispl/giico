// Copyright (c) 2019, VHRS and contributors
// For license information, please see license.txt

frappe.ui.form.on('Rock Core Drilling and Strength Testing', {
	onload: function (frm) {
		if (frappe.user.has_role("Technicianr")) {
			hide_field(['customer', 'department'])
		}
	}
});
