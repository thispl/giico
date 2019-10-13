from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.model.document import Document
from frappe.utils.background_jobs import enqueue
@frappe.whitelist()
def send_mail(**args):
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
    

    # message = args.message


    # frappe.sendmail(
    #     recipients=args.mail_id
        
	# 	subject=args.subject,
		
      
    #     )   
    # frappe.errprint(message)