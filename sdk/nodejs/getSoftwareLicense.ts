// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSoftwareLicense(args?: GetSoftwareLicenseArgs, opts?: pulumi.InvokeOptions): Promise<GetSoftwareLicenseResult> & GetSoftwareLicenseResult {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetSoftwareLicenseResult> = pulumi.runtime.invoke("onepassword:index/getSoftwareLicense:getSoftwareLicense", {
        "main": args.main,
        "name": args.name,
        "notes": args.notes,
        "sections": args.sections,
        "tags": args.tags,
        "vault": args.vault,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getSoftwareLicense.
 */
export interface GetSoftwareLicenseArgs {
    readonly main?: inputs.GetSoftwareLicenseMain;
    readonly name?: string;
    readonly notes?: string;
    readonly sections?: inputs.GetSoftwareLicenseSection[];
    readonly tags?: string[];
    readonly vault?: string;
}

/**
 * A collection of values returned by getSoftwareLicense.
 */
export interface GetSoftwareLicenseResult {
    readonly main?: outputs.GetSoftwareLicenseMain;
    readonly name?: string;
    readonly notes?: string;
    readonly sections?: outputs.GetSoftwareLicenseSection[];
    readonly tags?: string[];
    readonly vault?: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
