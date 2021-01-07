from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.utils.data import today
from frappe.utils import formatdate, getdate, cint, add_months, date_diff, add_days, flt, cstr

@frappe.whitelist()
def create_purchase_receipt_je(doc,method):
    debit_ac = frappe.get_value('Warehouse',doc.set_warehouse,'account')
    je = frappe.new_doc('Journal Entry')
    je.entry_type = 'Journal Entry'
    je.posting_date = doc.posting_date
    je.purchase_receipt = doc.name
    je.append("accounts", {
        "account": debit_ac,
        "cost_center": doc.cost_center,
        "project": doc.project,
        "debit_in_account_currency": doc.grand_total
    })
    je.append("accounts", {
        "account": "2010120 - Purchase Clearing Account - GIICO",
        "cost_center": doc.cost_center,
        "project": doc.project,
        "party_type": "Supplier",
        "party" : doc.supplier,
        "credit_in_account_currency": doc.grand_total
    })
    je.save(ignore_permissions=True)
    je.submit()
    frappe.db.commit()

@frappe.whitelist()
def create_material_issue_je(doc,method):
    if doc.stock_entry_type == 'Material Issue':
        debit_ac = doc.expense_account
        credit_ac = frappe.get_value('Warehouse',doc.from_warehouse,'account')
        je = frappe.new_doc('Journal Entry')
        je.entry_type = 'Journal Entry'
        je.posting_date = doc.posting_date
        je.append("accounts", {
            "account": debit_ac,
            "cost_center": doc.cost_center,
            "project": doc.project,
            "debit_in_account_currency": doc.total_outgoing_value
        })
        je.append("accounts", {
            "account": credit_ac,
            "project": doc.project,
            "credit_in_account_currency": doc.total_outgoing_value
        })
        je.save(ignore_permissions=True)
        je.submit()
        frappe.db.commit()