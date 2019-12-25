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
					"name": "Job Form Quality Control",
                    "label": _("Job Form"),
					"description": _("Job Form Quality Control"),
					"onboard": 1,
				},
            ]
        },
        {
            "label": _("Calibration Tests"),
            "items": [
              
                {
                    "type": "doctype",
                    "name": "Calibration of Sieves 12",
                     "icon": "fa fa-star",
                    "label": _("Calibration of Sieves 12"),
                     "description": _("Calibration of Sieves 12"),
                      "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Speedy Moisture",
                    "icon": "fa fa-star",
                    "label": _("Speedy"),
                     "description": _("Calibration of Speedy Moisture"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Sandcone",
                  "icon": "fa fa-star",
                    "label": _("Sand Cone "),
                     "description": _("Calibration of Sandcone"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Oven",
                  "icon": "fa fa-star",
                    "label": _("Calibration of Oven"),
                     "description": _("Calibration of Oven"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Calibration of Proctor Mould 6 inch",
                  "icon": "fa fa-star",
                    "label": _("Calibration of Proctor Mould(6)"),
                     "description": _("Calibration of Proctor Mould 6 inch"),
                     "onboard": 1
                },
               {
                    "type": "doctype",
                    "name": "Calibration Of Slump Cone and Tamping Rod",
                  "icon": "fa fa-star",
                    "label": _("Slump Cone & Tamping rod "),
                     "description": _("Calibration Of Slump Cone and Tamping Rod"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of electronic balance",
                  "icon": "fa fa-star",
                    "label": _("Electronic Balance"),
                     "description": _("Calibration of electronic balance"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Balance and Scale",
                    "icon": "fa fa-star",
                    "label": _("Balance Scale"),
                     "description": _("Calibration of Balance and Scale"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration Of Containers",
                    "icon": "fa fa-star",
                    "label": _("Container"),
                     "description": _("Calibration Of Containers"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Cylinders",
                    "icon": "fa fa-star",
                    "label": _("Cylinder"),
                     "description": _("Calibration of Cylinders"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Electronic Balance 8100 g",
                    "icon": "fa fa-star",
                    "label": _("Electronic Balance 8100g"),
                     "description": _("Calibration of Electronic Balance 8100 g"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Electronic Balance 15kg",
                    "icon": "fa fa-star",
                    "label": _("Electronic Balance 15kg"),
                     "description": _("Calibration of Electronic Balance 15kg"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Electronic Balance 86KB",
                    "icon": "fa fa-star",
                    "label": _("Electronic Balance 15000g"),
                     "description": _("Calibration of Electronic Balance 86KB"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Calibration of Electronic Balance 200g",
                    "label": _("Calibration electroic scale 200kg"),
                    "description": _("Calibration of Electronic Balance 200g"),
                    "onboard": 1
                 },
                {
                    "type": "doctype",
                    "name": "Calibration of Electronic Balance 20kg",
                   "icon": "fa fa-star",
                    "label": _("Balance Electronic 20kg"),
                     "description": _("Calibration of Electronic Balance 20kg"),
                    "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Liquid Limit Device",
                    "icon": "fa fa-star",
                    "label": _("Liquid Limit Device"),
                     "description": _("Calibration of Liquid Limit Device"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Site Compaction",
                    "icon": "fa fa-star",
                    "label": _("Marshall Compaction Machine"),
                     "description": _("Calibration of Site Compaction"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Marshall Rammer",
                    "icon": "fa fa-star",
                    "label": _("Marshall Rammer"),
                     "description": _("Calibration of Marshall Rammer"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Mechanical Compactor",
                    "icon": "fa fa-star",
                    "label": _("Mechanical Compactor"),
                     "description": _("Mechanical Compactor"),
                     "onboard": 1
                },
                {
                    "type": "doctype",
                    "name": "Calibration of Proctor Mould 4 inch",
                    "icon": "fa fa-star",
                    "label": _("Calibration of Proctor Mould 4 inch"),
                     "description": _("Calibration of Proctor Mould 4 inch"),
                     "onboard": 1
                },
                                 {
                    "type": "doctype",
                    "name": "Calibration Of Pycnometer Jar",
                    "icon": "fa fa-star",
                    "label": _("Calibration Of Pycnometer Jar"),
                     "description": _("Calibration Of Pycnometer Jar"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Calibration of Sand Equivalent",
                    "icon": "fa fa-star",
                    "label": _("Calibration of Sand Equivalent"),
                     "description": _("Calibration of Sand Equivalent"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Calibration of Sieves",
                    "icon": "fa fa-star",
                    "label": _("Calibration of Sieves 8"),
                     "description": _("Calibration of Sieves"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Calibration of Thermometer",
                    "label": _("Thermometer"),
                    "description": _("Calibration of Thermometer"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Calibration of Balance and Weight",
                    "icon": "fa fa-star",
                    "label": _("Triple Beam Balance"),
                     "description": _("Calibration of Balance and Weight"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "UGCC Vernire Caliper",
                    "icon": "fa fa-star",
                    "label": _("UGCC Vernire Caliper"),
                     "description": _("UGCC Vernire Caliper"),
                     "onboard": 1
                },
                 {
                    "type": "doctype",
                    "name": "Calibration Of Water Bath",
                   "icon": "fa fa-star",
                    "label": _("Water Bath"),
                     "description": _("Calibration Of Water Bath"),
                     "onboard": 1
                }
                 
 ]
        },

            
             {
            "label": _("Lab Tests"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Asphalt Analysis Sample",
                    "label": _("Asphalt Analysis Sample"),
                    "description": _("Asphalt Analysis Sample"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Asphalt Spray Rate",
                    "label": _("Asphalt Spray Rate"),
                    "description": _("Asphalt Spray Rate"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Compressive Strength of Brick Pave Units",
                    "label": _("Brick Pave Units"),
                    "description": _("Compressive Strength of Brick Pave Units"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Physical and Chemical Test",
                    "label": _("Chemical test for micro Silica"),
                    "description": _("Physical and Chemical Test"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Compressive Strength of Concrete Masonary",
                    "label": _("Concrete Block Masonary"),
                    "description": _("Compressive Strength of Concrete Masonary"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Compressive Strength of Concrete Cubes",
                    "label": _("Concrete Cubes"),
                    "description": _("Compressive Strength of Concrete Cubes"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Location Wise Concrete Pour Record",
                    "label": _("Concrete Pour site Record"),
                    "description": _("Location Wise Concrete Pour Record"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Rock Core Drilling and Strength Testing",
                    "label": _("Core Test On Rock 1"),
                    "description": _("Rock Core Drilling and Strength Testing"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Concrete Core Drilling And Strength Test",
                    "label": _("Core Test On Rock 4"),
                    "description": _("Concrete Core Drilling And Strength Test"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Cover Meter Steel Bar",
                    "label": _("Cover Meter"),
                    "description": _("Cover Meter Steel Bar"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Crack Width Measurment on Slab",
                    "label": _("Crack Width Measurment on Slab"),
                    "description": _("Crack Width Measurment on Slab"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Crack Test Result",
                    "label": _("Crack Test Result"),
                    "description": _("Crack Test Result"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Cylindrical Concrete Specimens",
                    "label": _("Cylindrical Concrete Specimen"),
                    "description": _("Cylindrical Concrete Specimens"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Flakiness and Elongation Index Test",
                    "label": _("Flakiness and Elongation Index Test"),
                    "description": _("Flakiness and Elongation Index Test"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Compressive Strength of Grout Cubes",
                    "label": _("Grout Cubes"),
                    "description": _("Compressive Strength of Grout Cubes"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Schmidt Hammer Test",
                    "label": _("Schmidt Hammer Tests"),
                    "description": _("Schmidt Hammer Test"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Compressive Strength Of Hollow Block",
                    "label": _("Hollow Block"),
                    "description": _("Compressive Strength Of Hollow Block"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Abrasion and Impact in Los Angeles Machine",
                    "label": _("Abrasion and Impact in Los Angeles Machine"),
                    "description": _("Abrasion and Impact in Los Angeles Machine"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Organic Matter of Chemical Test on Soil Sample",
                    "label": _("Organic Matter"),
                    "description": _("Organic Matter of Chemical Test on Soil Sample"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Sand Equivalent",
                    "label": _("Sand Equivalent"),
                    "description": _("Sand Equivalent"),
                    "onboard": 1,
                },
                
                 {
                    "type": "doctype",
                    "name": "Soil Chemical Analysis Gypsum Content",
                    "label": _("Gypsum Content"),
                    "description": _("Soil Chemical Analysis Gypsum Content"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Soundness of Aggregates",
                    "label": _("Soundness of Aggregates"),
                    "description": _("Soundness of Aggregates"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Specific Gravity of Asphalt Aashto",
                    "label": _("Specific Gravity"),
                    "description": _("Specific Gravity of Asphalt Aashto"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Chemical Test on Concrete Sample",
                    "label": _("Sulphate Chloride on Concrete"),
                    "description": _("Chemical Test on Concrete Sample"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Chemical Tests On  Soil Sample",
                    "label": _("Sulphate Chloride on Soil"),
                    "description": _("Chemical Tests On  Soil Sample"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Mechanical Test ASTM",
                    "label": _("Tensile Bending Elongation on Steel Test (ASTM)"),
                    "description": _("Mechanical Test ASTM"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Mechanical Test",
                    "label": _("Tensile Bending Elongation on Steel Test (Bs)"),
                    "description": _("Mechanical Test"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Thermal Resistivity Test Result",
                    "label": _("Thermal Resistivity Test Result"),
                    "description": _("Thermal Resistivity Test Result"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Compacted Hot mix Asphalt As per Aashto",
                    "label": _("Thickness and Density"),
                    "description": _("Compacted Hot mix Asphalt As per Aashto"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Concrete Tiles Units",
                    "label": _("Tiles Units"),
                    "description": _("Concrete Tiles Units"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Ultrasonic Test Results",
                    "label": _("Ultrasonic Test "),
                    "description": _("Ultrasonic Test Results"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Moisture and Absorption Of Light Weight",
                    "label": _("Water Absorption of solid White Block"),
                    "description": _("Moisture and Absorption Of Light Weight"),
                    "onboard": 1,
                },
                 {
                    "type": "doctype",
                    "name": "Water Absorption of Hardened Concrete",
                    "label": _("Water Absorption of Hardened Concrete"),
                    "description": _("Water Absorption of Hardened Concrete"),
                    "onboard": 1,
                }
                 ]
             }
             
    ]
