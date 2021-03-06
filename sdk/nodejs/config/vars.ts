// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

let __config = new pulumi.Config("onepassword");

/**
 * Set account email address
 */
export let email: string | undefined = __config.get("email") || utilities.getEnv("OP_EMAIL");
/**
 * Set account password
 */
export let password: string | undefined = __config.get("password");
/**
 * Set account secret key
 */
export let secretKey: string | undefined = __config.get("secretKey");
/**
 * Set alternative subdomain for 1password. From [subdomain].1password.com
 */
export let subdomain: string | undefined = __config.get("subdomain") || utilities.getEnv("OP_SUBDOMAIN");
