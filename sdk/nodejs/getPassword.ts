// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getPassword(args?: GetPasswordArgs, opts?: pulumi.InvokeOptions): Promise<GetPasswordResult> & GetPasswordResult {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetPasswordResult> = pulumi.runtime.invoke("onepassword:index/getPassword:getPassword", {
        "name": args.name,
        "notes": args.notes,
        "password": args.password,
        "sections": args.sections,
        "tags": args.tags,
        "url": args.url,
        "vault": args.vault,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getPassword.
 */
export interface GetPasswordArgs {
    readonly name?: string;
    readonly notes?: string;
    readonly password?: string;
    readonly sections?: inputs.GetPasswordSection[];
    readonly tags?: string[];
    readonly url?: string;
    readonly vault?: string;
}

/**
 * A collection of values returned by getPassword.
 */
export interface GetPasswordResult {
    readonly name?: string;
    readonly notes?: string;
    readonly password?: string;
    readonly sections?: outputs.GetPasswordSection[];
    readonly tags?: string[];
    readonly url?: string;
    readonly vault?: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
