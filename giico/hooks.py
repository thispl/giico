# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from . import __version__ as app_version

app_name = "giico"
app_title = "Giico"
app_publisher = "VHRS"
app_description = "Customizations for GIICO"
app_icon = "octicon octicon-settings"
app_color = "blue"
app_email = "abdulla.pi@voltechgroup.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/giico/css/giico.css"
app_include_js = "/assets/giico/js/apexcharts.js"
# include js, css files in header of web template
# web_include_css = "/assets/giico/css/giico.css"
# web_include_js = "/assets/giico/js/giico.js"

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Website user home page (by function)
# get_website_user_home_page = "giico.utils.get_home_page"

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Installation
# ------------

# before_install = "giico.install.before_install"
# after_install = "giico.install.after_install"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "giico.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }
#boot_session = "giico.custom.redirect_technicians"
# Document Events
# ---------------
# Hook on document methods and events

doc_events = {
    "Purchase Receipt": {
        "on_submit": "giico.accounting.create_purchase_receipt_je"
    },
    "Stock Entry": {
        "on_submit" :[
        "giico.accounting.create_material_issue_je",
        "giico.accounting.create_material_receipt_je"]
    }
}


# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"giico.tasks.all"
# 	],
# 	"daily": [
# 		"giico.tasks.daily"
# 	],
# 	"hourly": [
# 		"giico.tasks.hourly"
# 	],
# 	"weekly": [
# 		"giico.tasks.weekly"
# 	]
# 	"monthly": [
# 		"giico.tasks.monthly"
# 	]
# }

# Testing
# -------

# before_tests = "giico.install.before_tests"

# Overriding Whitelisted Methods
# ------------------------------
#
# override_whitelisted_methods = {
# 	"frappe.desk.doctype.event.event.get_events": "giico.event.get_events"
# }

fixtures = [ 'Custom Script', 'Custom Field']

