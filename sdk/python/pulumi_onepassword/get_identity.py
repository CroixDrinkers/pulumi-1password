# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import json
import warnings
import pulumi
import pulumi.runtime
from typing import Union
from . import utilities, tables

class GetIdentityResult:
    """
    A collection of values returned by getIdentity.
    """
    def __init__(__self__, address=None, identification=None, internet=None, name=None, notes=None, sections=None, tags=None, vault=None, id=None):
        if address and not isinstance(address, dict):
            raise TypeError("Expected argument 'address' to be a dict")
        __self__.address = address
        if identification and not isinstance(identification, dict):
            raise TypeError("Expected argument 'identification' to be a dict")
        __self__.identification = identification
        if internet and not isinstance(internet, dict):
            raise TypeError("Expected argument 'internet' to be a dict")
        __self__.internet = internet
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
        if vault and not isinstance(vault, str):
            raise TypeError("Expected argument 'vault' to be a str")
        __self__.vault = vault
        if id and not isinstance(id, str):
            raise TypeError("Expected argument 'id' to be a str")
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """
class AwaitableGetIdentityResult(GetIdentityResult):
    # pylint: disable=using-constant-test
    def __await__(self):
        if False:
            yield self
        return GetIdentityResult(
            address=self.address,
            identification=self.identification,
            internet=self.internet,
            name=self.name,
            notes=self.notes,
            sections=self.sections,
            tags=self.tags,
            vault=self.vault,
            id=self.id)

def get_identity(address=None,identification=None,internet=None,name=None,notes=None,sections=None,tags=None,vault=None,opts=None):
    """
    Use this data source to access information about an existing resource.
    
    
    The **address** object supports the following:
    
      * `address` (`dict`)
    
        * `city` (`str`)
        * `country` (`str`)
        * `region` (`str`)
        * `state` (`str`)
        * `street` (`str`)
        * `zip` (`str`)
    
      * `businessPhone` (`str`)
      * `cellPhone` (`str`)
      * `defaultPhone` (`str`)
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
    
      * `homePhone` (`str`)
      * `title` (`str`)
    
    The **identification** object supports the following:
    
      * `birthDate` (`float`)
      * `company` (`str`)
      * `department` (`str`)
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
    
      * `firstname` (`str`)
      * `initial` (`str`)
      * `jobTitle` (`str`)
      * `lastname` (`str`)
      * `occupation` (`str`)
      * `sex` (`str`)
      * `title` (`str`)
    
    The **internet** object supports the following:
    
      * `email` (`str`)
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
    
      * `title` (`str`)
      * `username` (`str`)
    
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

    __args__['address'] = address
    __args__['identification'] = identification
    __args__['internet'] = internet
    __args__['name'] = name
    __args__['notes'] = notes
    __args__['sections'] = sections
    __args__['tags'] = tags
    __args__['vault'] = vault
    if opts is None:
        opts = pulumi.InvokeOptions()
    if opts.version is None:
        opts.version = utilities.get_version()
    __ret__ = pulumi.runtime.invoke('onepassword:index/getIdentity:getIdentity', __args__, opts=opts).value

    return AwaitableGetIdentityResult(
        address=__ret__.get('address'),
        identification=__ret__.get('identification'),
        internet=__ret__.get('internet'),
        name=__ret__.get('name'),
        notes=__ret__.get('notes'),
        sections=__ret__.get('sections'),
        tags=__ret__.get('tags'),
        vault=__ret__.get('vault'),
        id=__ret__.get('id'))
