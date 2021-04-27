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
					"name": "Job Form Inspection",
                    "label": _("Job Form"),
					"description": _("Job Form Inspection"),
					"onboard": 1,
				},
              {
                    "type": "doctype",
                    "name": "Inspection Release Note",
                    "icon": "fa fa-star",
                    "label": _("Inspection Release Note"),
                     "description": _("Inspection Release Note"),
                     "onboard": 1
                },
            ]
        }
    ]