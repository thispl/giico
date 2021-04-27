from __future__ import unicode_literals
from frappe import _

def get_data():
    return [
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
					"name": "Cost Estimation",
                    "label": _("Cost Estimation"),
					"description": _("Cost Estimation"),
					"onboard": 1,
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
					"name": "Job Form GT",
                    "label": _("Job Form"),
					"description": _("Job Form GT"),
					"onboard": 1,
				},
                {
					"type": "doctype",
					"name": "Daily Report GT",
                    "label": _("Daily Report"),
					"description": _("Daily Report GT"),
					"onboard": 1,
				}
            ]
        },
        {
            "label": _("Field Test"),
            "items": [
                        {
                            "type": "doctype",
                            "name": "Borehole",
                            "description": _("Borehole Test"),
                            "onboard": 1,
                            "icon": "fa fa-star"
                        },
                        {
                            "type": "doctype",
                            "name": "Dynamic Cone Penetration Test",
                            "icon": "fa fa-star",
                            "label": _("Dynamic Cone Probing"),
                            "description": _("Dynamic Cone Penetration Test"),
                            "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Borehole",
                            "icon": "fa fa-star",
                            "label": _("Borehole Test1"),
                            "description": _("Borehole Test"),
                             "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Plate Loading Test",
                            "icon": "fa fa-star",
                            "label": _("Plate Load Test"),
                            "description": _("Plate Loading Test"),
                             "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Infiltration Test",
                            "icon": "fa fa-star",
                            "label": _("Preculation/Infiltration Tests"),
                            "description": _("Infiltration Test"),
                             "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Falling Head Method",
                            "icon": "fa fa-star",
                            "label": _("Falling Head Permeability Test"),
                            "description": _("Falling Head Method"),
                             "onboard": 1
                         },
                        {
                            "type": "doctype",
                            "name": "Field Permeability Test",
                            "icon": "fa fa-star",
                            "label": _("Constant Head Permeability Test"),
                            "description": _("Field Permeability Test"),
                             "onboard": 1
                         },
                        {
                            "type": "doctype",
                            "name": "Electrical Resistivity Test",
                            "icon": "fa fa-star",
                            "label": _("Electrical Resistivity Tests"),
                            "description": _("Electrical Resistivity Test"),
                            "onboard": 1

                        },
                        {
                            "type": "doctype",
                            "name": "Thermal Resistivity Test",
                            "icon": "fa fa-star",
                            "label": _("Thermal Resistivity Tests"),
                            "description": _("Thermal Resistivity Test"),
                            "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Field CBR",
                            "icon": "fa fa-star",
                            "label": _("Field CBR Tests"),
                            "description": _("Field CBR"),
                            "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Field Density Test",
                            "icon": "fa fa-star",
                            "label": _("Field Density Tests"),
                            "description": _("Field Density Test"),
                            "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Ground Water Level Observations",
                            "icon": "fa fa-star",
                            "label": _("Piezometer"),
                            "description": _("Ground Water Level Observations"),
                            "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Downhole Test",
                            "icon": "fa fa-star",
                            "label": _("Downhole Tests"),
                            "description": _("Downhole Test"),
                            "onboard": 1
                         },
                        {
                            "type": "doctype",
                            "name": "Crosshole Test",
                            "icon": "fa fa-star",
                            "label": _("Crosshole Test"),
                            "description": _("Crosshole Test"),
                            "onboard": 1
                        },
                         {
                            "type": "doctype",
                            "name": "Field Electrical Resistivity Normal",
                            "icon": "fa fa-star",
                            "label": _("Field Electrical Resistivity Normal"),
                            "description": _("Field Electrical Resistivity Normal"),
                            "onboard": 1
                        },
                         {
                            "type": "doctype",
                            "name": "Field Electrical Resistivity",
                            "icon": "fa fa-star",
                            "label": _("Field Electrical Resistivity"),
                            "description": _("Field Electrical Resistivity"),
                            "onboard": 1
                        }

                           ]  
        },

        {
         "label": _("Lab Test"),
                    "items": [
                        {
                            "type": "doctype",
                            "name": "Direct Shear Test Result",
                            "icon": "fa fa-star",
                            "label": _("Direct Shear Tests"),
                            "description": _("Direct Shear Test Result"),
                            "onboard": 1
                         },
                          {
                            "type": "doctype",
                            "name": "Falling Head Permeability Test",
                            "icon": "fa fa-star",
                            "label": _("Falling Head Permeability Test"),
                            "description": _("Falling Head Permeability Test"),
                            "onboard": 1
                        },
                         {
                            "type": "doctype",
                            "name": "Constant Head Permeability Test",
                            "icon": "fa fa-star",
                            "label": _("Constant head permeability Tests"),
                            "description": _("Constant Head Permeability Test"),
                            "onboard": 1
                        },
                       
                         {
                            "type": "doctype",
                            "name": "Collapse Potential Tests",
                            "icon": "fa fa-star",
                            "label": _("Collapse Potential Tests"),
                            "description": _("Collapse Potential Tests"),
                            "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Unconfined Compressive Strength of Soil",
                            "icon": "fa fa-star",
                            "label": _("UCS Tests"),
                            "description": _("Unconfined Compressive Strength of Soil"),
                            "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Lab ERT",
                            "icon": "fa fa-star",
                            "label": _("Lab ERT"),
                            "description": _("Lab ERT"),
                            "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Lab TRT",
                            "icon": "fa fa-star",
                            "label": _("Lab TRT"),
                            "description": _("Lab TRT"),
                            "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Chemical Tests",
                            "icon": "fa fa-star",
                            "label": _("Chemical Tests"),
                            "description": _("Chemical Tests"),
                            "onboard": 1
                        },
                        {
                            "type": "doctype",
                            "name": "Point Load Test",
                            "icon": "fa fa-star",
                            "label": _("Point Load Tests"),
                            "description": _("Point Load Test"),
                            "onboard": 1
                        }
                           ]
        }
        
            ]