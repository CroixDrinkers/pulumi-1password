# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from .. import utilities, tables

__config__ = pulumi.Config('onepassword')

email = __config__.get('email') or utilities.get_env('OP_EMAIL')
"""
Set account email address
"""

password = __config__.get('password')
"""
Set account password
"""

secret_key = __config__.get('secretKey')
"""
Set account secret key
"""

subdomain = __config__.get('subdomain') or utilities.get_env('OP_SUBDOMAIN')
"""
Set alternative subdomain for 1password. From [subdomain].1password.com
"""

