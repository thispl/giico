# -*- coding: utf-8 -*-
# Copyright (c) 2019, VHRS and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.model.document import Document
from erpnext.hr.doctype.holiday_list.holiday_list import is_holiday
from frappe.utils import add_days

class OfficeDailyReport(Document):
	def validate(self):
		if not is_holiday("Holiday List test",self.work_date):
			odr_list = frappe.db.sql("""select name,work_date from `tabOffice Daily Report` where project = %s order by work_date desc""",(self.project),as_dict=1)
			if len(odr_list) != 0:
				prev_date = add_days(self.work_date,-1)
				if is_holiday("Holiday List test",prev_date):
					prev_date = add_days(prev_date,-1)
				frappe.errprint(prev_date)
				if not frappe.db.exists("Office Daily Report",{'work_date':prev_date,'project':self.project}):
					frappe.throw(_("Previous day Report is still pending"))
				else:
					odr = frappe.get_doc("Office Daily Report",odr_list[0].name)
					if not self.manpower:
						for od in odr.manpower:
							self.append("manpower",{
								"manpower" : od.manpower,
								"prev" : od.cum_hours
							})
					if not self.major_equipment:
						for od in odr.major_equipment:
							self.append("major_equipment",{
								"major_equipment" : od.major_equipment,
								"prev" : od.cum_hours
					})
		else:
			frappe.throw(_("Work Date cannot be a Holiday"))


