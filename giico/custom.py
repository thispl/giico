from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.model.document import Document
from frappe.utils.background_jobs import enqueue
import json
from frappe.utils.data import today
from frappe.utils import formatdate, getdate, cint, add_months, date_diff, add_days, flt, cstr
from frappe.utils.xlsxutils import make_xlsx
import requests
@frappe.whitelist()
def send_quotation(**args):
    args = frappe._dict(args)
    message = args.message
    frappe.msgprint(message)
    email_args = {
        "recipients": args.mail_id,
        "subject": args.subject,
        "message": message,
        "now": True,
        }

    if args.cc:
        cc = { "cc":args.cc }
        email_args.update(cc)
    enqueue(method=frappe.sendmail, queue='short', timeout=300, async=True, **email_args)
    
    
@frappe.whitelist()
def attendance(names,status):
    frappe.errprint(type(names))
    ids = json.loads(names)
    for id in ids:
        att = frappe.get_doc("Attendance",id) 
        att.submit()
        frappe.db.commit()
           
