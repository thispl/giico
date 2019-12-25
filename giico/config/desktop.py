# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"module_name": "Giico",
			"category": "Places",
			"label": _("GIICO Specific"),
			"color": "#1abc9c",
			"icon": "fa fa-check-square-o",
			"type": "module",
			"disable_after_onboard": 1,
			"description": "Dive into the basics for your organisation's needs.",
			"onboard_present": 1
		},
		{
			"module_name": "Quality Control and Material Testing",
			"category": "Places",
			"label": _("Quality Control & Material Testing"),
			"color": "#f39c12",
			"icon": "fa fa-check-circle",
			"type": "module",
			"description": "Stock transactions, reports, serial numbers and batches."
			# "onboard_present": 1
		},
		{
			"module_name": "Topography and Marine Survey",
			"category": "Places",
			"label": _("Topography and Marine Survey"),
			"color": "#3498db",
			"icon": "fa fa-check-circle",
			"type": "module",
			"description": "Stock transactions, reports, serial numbers and batches."
			# "onboard_present": 1
		},
		{
			"module_name": "Geotechnical Investigation Services",
			"category": "Places",
			"label": _("Geotechnical Investigation Services"),
			"color": "#3498db",
			"icon": "fa fa-check-circle",
			"type": "module",
			"description": "Stock transactions, reports, serial numbers and batches."
			# "onboard_present": 1
		},
		{
			"module_name": "Drilling Water Well Service",
			"category": "Places",
			"label": _("Drilling Water Well Service"),
			"color": "#3498db",
			"icon": "fa fa-check-circle",
			"type": "module",
			"description": "Stock transactions, reports, serial numbers and batches."
			# "onboard_present": 1
		},
		{
			"module_name": "Third Party Industrial Inspection",
			"category": "Places",
			"label": _("Third Party Industrial Inspection"),
			"color": "#3498db",
			"icon": "fa fa-check-circle",
			"type": "module",
			"description": "Stock transactions, reports, serial numbers and batches."
			# "onboard_present": 1
		}
		
		
		
		]
