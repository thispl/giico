# -*- coding: utf-8 -*-
# Copyright (c) 2020, VHRS and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
import json
from frappe.model.document import Document

class LabTestAllocationTool(Document):
	pass

@frappe.whitelist()
def lab_test_allocation(sample, test_list, project):
	test_list = json.loads(test_list)
	lta = frappe.new_doc('Lab Test Allocation')
	lta.sample = sample
	lta.project = project
	for test in test_list:
		lta.append('test',{
			'test':test
		})
	lta.insert()	
