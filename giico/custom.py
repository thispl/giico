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
from frappe.desk.form.load import get_attachments
from frappe.utils.csvutils import read_csv_content

@frappe.whitelist()
def mark_timesheet(employees,date,project,hours):
    emps = json.loads(employees)
    for emp in emps:
        # frappe.errprint(emp)
        if "__checked" in emp:
            # frappe.errprint(emp)
            timesheet = frappe.new_doc('Timesheet')
            timesheet.employee = emp["employee"]
            timesheet.project = project
            timesheet.start_date = date
            timesheet.end_date = date
            timesheet.append('time_logs', {
                'activity_type':"Execution",
                'hours': int(hours)
                })
            timesheet.insert()
            timesheet.save(ignore_permissions=True)
            # timesheet.submit()
            # frappe.db.commit()
    return emp

@frappe.whitelist()
def modify_projects():
    # count = 0
    # test=frappe.db.sql("""select `tabDocType`.name,`tabDocType`.Module Def FROM `tabDocType`
    # LEFT JOIN `tabDocField` ON `tabDocType`.name =`tabDocField`.parent 
    # where `tabDocField`.fieldname='test' && `tabDocField`.fieldtype='check'""",as_dict=True)
    # for t in test:
    #     test_project = frappe.db.sql("""select name,project from `tab%s` where project not in 
    #     ("KUWAIT FLOUR MILLS & BAKERIES CO.",
    #     "Arabian Darb-Inspection of Ductile Iron Pipes & Fittings-RA266",
    #     "MEW 5341",
    #     "Naser Al Baddah-Deep Well Drilling /CP Works-Project No. E31",
    #     "O&G Kuwait",
    #     "Stantek UK Limited",
    #     "China Petroleum-Construction of Earthing Holes",
    #     "ALARGAN NATIONAL GENERAL TRADING & CONTRACTING CO.", 
    #     "US Army Plate Load Test- Camp Arifjan",
    #     "ONG KUWAIT",
    #     "Mitas Energy","Nezar Al-Anjari Consulting Bureau") AND project IS NOT NULL""" %(t.name),as_dict=True)
    #     for test in test_project:
    #         frappe.errprint(test.project)
    #         frappe.set_value(t.name,test.name,'project','')
    project=frappe.db.sql("""select name from `tabProject` where project_name not in 
    ("KUWAIT FLOUR MILLS & BAKERIES CO.",
    "Arabian Darb-Inspection of Ductile Iron Pipes & Fittings-RA266",
    "MEW 5341",
    "Naser Al Baddah-Deep Well Drilling /CP Works-Project No. E31",
    "O&G Kuwait",
    "Stantek UK Limited",
    "China Petroleum-Construction of Earthing Holes",
    "ALARGAN NATIONAL GENERAL TRADING & CONTRACTING CO.", 
    "US Army Plate Load Test- Camp Arifjan",
    "ONG KUWAIT",
    "Mitas Energy","Nezar Al-Anjari Consulting Bureau")""",as_dict=True)
    for d in project:
        project = frappe.get_doc('Project', d.name)
        if project.docstatus == 1:
            project.cancel()
        frappe.delete_doc('Project',d.name,force=True)

@frappe.whitelist()
def redirect_technicians(bootinfo):
    if frappe.get_roles(frappe.session.user) == 'Lab Test User':
        frappe.local.response["type"] = "redirect"
        frappe.local.response["location"] = "/desk#Form/{0}/{1}".format("Field Test Entry", "Field Test Entry")


@frappe.whitelist()
def send_quotation(name,mail_id,subject,message,cc=None):
    qtn = frappe.get_doc("Quotation",name)
    attachments = frappe.attach_print("Quotation", name,
        file_name="Quotation", print_format="Quotation New")
    attachments = [d.name for d in get_attachments("Quotation",name)]
    attachments.append(frappe.attach_print(qtn.doctype, qtn.name, doc=qtn))
    # attachments.append(qtn.attachment)
    # attach = [d.name for d in get_attachments("Quotation",name)]
    # frappe.errprint(attach)
    email_args = {
        "recipients": mail_id,
        "subject": subject,
        "message": message,
        "attachments":attachments,
        "sender":frappe.get_doc('User', frappe.session.user).email,
        "now": True,
        }

    if cc:
        cc = { "cc":cc }
        email_args.update(cc)

    frappe.enqueue(method=frappe.sendmail, queue='short', timeout=300, async=True, **email_args)
    
    
@frappe.whitelist()
def attendance(names,status):
    # frappe.errprint(type(names))
    ids = json.loads(names)
    for id in ids:
        att = frappe.get_doc("Attendance",id) 
        att.submit()
        frappe.db.commit() 
@frappe.whitelist()
def assign():
    assign = frappe.get_all("Project")

@frappe.whitelist()
def test_in_project(project):
    test=frappe.db.sql("""select `tabDocType`.name,`tabDocType`.Module Def FROM `tabDocType`
    LEFT JOIN `tabDocField` ON `tabDocType`.name =`tabDocField`.parent 
    where `tabDocField`.fieldname='test' && `tabDocField`.fieldtype='check' """,as_dict=True)
    list1=[]
    # frappe.errprint(test)
    for i in test:
        a=frappe.db.exists(i["name"],{"project":project})
        if a:
            l = {
                "name":i["name"],
                "id":a
            }
            list1.append(l)
    return list1
    

           
@frappe.whitelist()
def test_hooks(doc,method):
    frappe.errprint(doc)

def bulk_update_from_csv(filename):
    #below is the method to get file from Frappe File manager
    from frappe.utils.file_manager import get_file
    #Method to fetch file using get_doc and stored as _file
    _file = frappe.get_doc("File", {"file_name": filename})
    #Path in the system
    filepath = get_file(filename)
    #CSV Content stored as pps

    pps = read_csv_content(filepath[1])
    count = 0
    for pp in pps:
        print(pp[0])
        # ld = frappe.db.exists("Lead",{'name':pp[0]})
        # if ld:
        #     # items = frappe.get_all("Lead",{'name':pp[0]})
        #     # for item in items:
        #     i = frappe.get_doc('Lead',pp[0])
        #     if not i.contac%t_by:
        #         i.contact_date = pp[1]
        #         print(pp[1])
                # i.append("supplier_items",{
                #     'supplier' : pp[1]
                # })
                # i.save(ignore_permissions=True)
                # frappe.db.commit()

def changes_mandatory():
    test=frappe.db.sql("""select `tabDocType`.name,`tabDocType`.Module Def FROM `tabDocType`
    LEFT JOIN `tabDocField` ON `tabDocType`.name =`tabDocField`.parent 
    where `tabDocField`.fieldname='test' && `tabDocField`.fieldtype='check' """,as_dict=True)
    for t in test:
        get_doc =frappe.get_doc('DocType',t.name)
        get_doc.delete('fields',{
                'label':'Project',
                'fieldtype':'Data',
                'fieldname':'project_client'
            })
        get_doc.save(ignore_permissions=True)
        frappe.db.commit()
        # for i in get_doc.fields:
            # if i.label == 'Project':
            #     i.label = 'Project(GIICO)',
            #     i.reqd = 0
            #     get_doc.save(ignore_permissions=True)
            #     frappe.db.commit()
            # if i.label =='Customer':
            #     i.reqd = 0
            #     get_doc.save(ignore_permissions=True)
            #     frappe.db.commit()
            # if i.label == 'Project Name':
            #     i.label = 'Project Name(GIICO)'
            #     get_doc.save(ignore_permissions=True)
            #     frappe.db.commit()
def delete_test():
    projects = ("KUWAIT FLOUR MILLS & BAKERIES CO.","Hello")
    test=frappe.db.sql("""select name from `tabProject` where project_name not in 
    ("KUWAIT FLOUR MILLS & BAKERIES CO.",
    "Arabian Darb-Inspection of Ductile Iron Pipes & Fittings-RA266",
    "MEW 5341",
     "Naser Al Baddah-Deep Well Drilling /CP Works-Project No. E31",
     "O&G Kuwait",
     "Stantek UK Limited",
     "China Petroleum-Construction of Earthing Holes",
     "ALARGAN NATIONAL GENERAL TRADING & CONTRACTING CO.", 
     "US Army Plate Load Test- Camp Arifjan",
     "ONG KUWAIT",
     "Mitas Energy","Nezar Al-Anjari Consulting Bureau")""")
    # frappe.errprint(len(test))
    for t in test:
        frappe.errprint(t[0])
        a =frappe.get_doc("Project",t[0])
        for g in a.test1:
            te =frappe.get_doc(g.test_name,g.test_id)
            # frappe.errprint(te)      
@frappe.whitelist()
def get_test():
    test=frappe.db.sql("""select `tabDocType`.name,`tabDocType`.Module Def FROM `tabDocType`
    LEFT JOIN `tabDocField` ON `tabDocType`.name =`tabDocField`.parent 
    where `tabDocField`.fieldname='test' && `tabDocField`.fieldtype='check' """,as_dict=True)
    for t in test:
        try:
            project=frappe.db.sql("""select name,project from `tab%s` where project not in 
            ("KUWAIT FLOUR MILLS & BAKERIES CO.",
            "Arabian Darb-Inspection of Ductile Iron Pipes & Fittings-RA266",
            "MEW 5341",
            "Naser Al Baddah-Deep Well Drilling /CP Works-Project No. E31",
            "O&G Kuwait",
            "Stantek UK Limited",
            "China Petroleum-Construction of Earthing Holes",
            "ALARGAN NATIONAL GENERAL TRADING & CONTRACTING CO.", 
            "US Army Plate Load Test- Camp Arifjan",
            "ONG KUWAIT",
            "Mitas Energy","Nezar Al-Anjari Consulting Bureau") AND project IS NOT NULL""" %(t.name),as_dict=True)
            for d in project:
                frappe.errprint(d.project_name)
                # frappe.db.set_value(t.name,project[0][0],"project","")
                # frappe.errprint(project[0][0])
                # frappe.errprint(t.name)
        except:
            pass
          
