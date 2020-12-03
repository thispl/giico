# -*- coding: utf-8 -*-
# Copyright (c) 2020, VHRS and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class QuotationItems(Document):
	def on_submit(self):
		for i in self.quotation_items:
			doc = frappe.new_doc("Item")
			doc.naming_series = "GT-ITEM-.YYYY.-"
			doc.item_group = "GT - Tools & Equipments"
			doc.item_name = i.item_name
			doc.description = i.description
			doc.stock_uom = i.unit
			doc.qty = i.qty
			doc.rate = i.rate
			doc.amount = i.amount
			doc.standard = i.standard
			doc.department = "Geotechnical Investigation Services - GIICO"
			doc.quotation_items = self.name
			doc.save(ignore_permissions=True)
			frappe.db.commit()