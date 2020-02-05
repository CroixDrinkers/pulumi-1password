# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetCommonResult:
    """
    A collection of values returned by getCommon.
    """
    def __init__(__self__, name=None, notes=None, sections=None, tags=None, template=None, vault=None, id=None):
        if name and not isinstance(name, str):
            raise TypeError("Expected argument 'name' to be a str")
        __self__.name = name
        if notes and not isinstance(notes, str):
            raise TypeError("Expected argument 'notes' to be a str")
        __self__.notes = notes
        if sections and not isinstance(sections, list):
            raise TypeError("Expected argument 'sections' to be a list")
        __self__.sections = sections
        if tags and not isinstance(tags, list):
            raise TypeError("Expected argument 'tags' to be a list")
        __self__.tags = tags
        if template and not isinstance(template, str):
            raise TypeError("Expected argument 'template' to be a str")
        __self__.template = template
        if vault and not isinstance(vault, str):
            raise TypeError("Expected argument 'vault' to be a str")
        __self__.vault = vault
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetCommonResult(GetCommonResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetCommonResult(
            name=self.name,
            notes=self.notes,
            sections=self.sections,
            tags=self.tags,
            template=self.template,
            vault=self.vault,
            id=self.id)

def get_common(name=None,notes=None,sections=None,tags=None,template=None,vault=None,opts=None):
    """
    Use this data source to access information about an existing resource.
    
    
    The **sections** object supports the following:
    
      * `fields` (`list`)
    
        * `address` (`dict`)
    
          * `city` (`str`)
          * `country` (`str`)
          * `region` (`str`)
          * `state` (`str`)
          * `street` (`str`)
          * `zip` (`str`)
    
        * `cardType` (`str`)
        * `concealed` (`str`)
        * `date` (`float`)
        * `email` (`str`)
        * `monthYear` (`float`)
        * `name` (`str`)
        * `phone` (`str`)
        * `reference` (`str`)
        * `sex` (`str`)
        * `string` (`str`)
        * `totp` (`str`)
        * `url` (`str`)
    
      * `name` (`str`)
    """
    __args__ = dict()

    __args__['name'] = name
    __args__['notes'] = notes
    __args__['sections'] = sections
    __args__['tags'] = tags
    __args__['template'] = template
    __args__['vault'] = vault
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('onepassword:index/getCommon:getCommon', __args__, opts=opts).value

    return AwaitableGetCommonResult(
        name=__ret__.get('name'),
        notes=__ret__.get('notes'),
        sections=__ret__.get('sections'),
        tags=__ret__.get('tags'),
        template=__ret__.get('template'),
        vault=__ret__.get('vault'),
        id=__ret__.get('id'))