// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getCommon(args?: GetCommonArgs, opts?: pulumi.InvokeOptions): Promise<GetCommonResult> & GetCommonResult {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetCommonResult> = pulumi.runtime.invoke("onepassword:index/getCommon:getCommon", {
        "name": args.name,
        "notes": args.notes,
        "sections": args.sections,
        "tags": args.tags,
        "template": args.template,
        "vault": args.vault,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getCommon.
 */
export interface GetCommonArgs {
    readonly name?: string;
    readonly notes?: string;
    readonly sections?: inputs.GetCommonSection[];
    readonly tags?: string[];
    readonly template?: string;
    readonly vault?: string;
}

/**
 * A collection of values returned by getCommon.
 */
export interface GetCommonResult {
    readonly name?: string;
    readonly notes?: string;
    readonly sections?: outputs.GetCommonSection[];
    readonly tags?: string[];
    readonly template?: string;
    readonly vault?: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
