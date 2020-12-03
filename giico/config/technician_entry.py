from __future__ import unicode_literals
from frappe import _

def get_data():
    return  [
          {
			"label": _("Technician Entry"),
			"items": [
                 {
					"type": "doctype",
					"name": "Field Test Entry",
					"description": _("Field Test Entry Info."),
					"onboard": 1,
				},
				
               ]
        },
	
       
     ]
