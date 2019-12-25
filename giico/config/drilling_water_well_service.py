from __future__ import unicode_literals
from frappe import _

def get_data():
    return  [
          {
			"label": _(""),
			"items": [
		       
                 
                 {
					"type": "doctype",
					"name": "Customer",
					"description": _("Customer Database."),
					"onboard": 1,
				},
				{
					"type": "doctype",
					"name": "Quotation",
					"description": _("Quotes to Leads or Customers."),
					"onboard": 1,
					"dependencies": ["Item", "Customer"],
				},
				{
					"type": "doctype",
					"name": "Sales Order",
					"description": _("Confirmed orders from Customers."),
					"onboard": 1,
					"dependencies": ["Item", "Customer"],
				},
				{
					"type": "doctype",
					"name": "Project",
					"description": _("Project master."),
					"onboard": 1,
				},
                  {
					"type": "doctype",
					"name": "Job Form DW",
                        "label": _("Job Form"),
					"description": _("Job Form DW"),
					"onboard": 1,
				},
                     {
                    "type": "doctype",
                    "name": "Daily Report DW",
                    "icon": "fa fa-star",
                    "label": _("Daily Report"),
                     "description": _("Daily Report DW"),
                     "onboard": 1
                },
                  {
                    "type": "doctype",
                    "name": "Daily Drilling Report",
                    "icon": "fa fa-star",
                    "label": _("Daily Drilling Report"),
                     "description": _("Daily Drilling Report"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Daily Report Earthing Hole",
                    "icon": "fa fa-star",
                    "label": _("Daily Report Earthing Hole"),
                     "description": _("Daily Report Earthing Hole"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Job Report Data",
                    "icon": "fa fa-star",
                    "label": _("Job Report Data"),
                     "description": _("Job Report Data"),
                     "onboard": 1
                },
               ]
        },
		{
			"label": _("Tests"),
			"items": [
		        {
                    "type": "doctype",
                    "name": "DW Earthing Holes",
                    "icon": "fa fa-star",
                    "label": _("DW Earthing Holes"),
                     "description": _("DW Earthing Holes"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Draft Step Test",
                    "icon": "fa fa-star",
                    "label": _("Draft Step Test"),
                     "description": _("Draft Step Test"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Recovery Test Data Sheets",
                    "icon": "fa fa-star",
                    "label": _("Recovery Test Data Sheets"),
                     "description": _("Recovery Test Data Sheets"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Pumping Test Data Sheets",
                    "icon": "fa fa-star",
                    "label": _("Pumping Test Data Sheets"),
                     "description": _("Pumping Test Data Sheets"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Project Follow up CostSheet",
                    "icon": "fa fa-star",
                    "label": _("Project Follow up CostSheet"),
                     "description": _("Project Follow up CostSheet"),
                     "onboard": 1
                }
                
            ]
        }
       
     ]
