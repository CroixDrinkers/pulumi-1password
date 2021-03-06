// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getDocument(args?: GetDocumentArgs, opts?: pulumi.InvokeOptions): Promise<GetDocumentResult> & GetDocumentResult {
    args = args || {};
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    const promise: Promise<GetDocumentResult> = pulumi.runtime.invoke("onepassword:index/getDocument:getDocument", {
        "content": args.content,
        "name": args.name,
        "tags": args.tags,
        "vault": args.vault,
    }, opts);

    return pulumi.utils.liftProperties(promise, opts);
}

/**
 * A collection of arguments for invoking getDocument.
 */
export interface GetDocumentArgs {
    readonly content?: string;
    readonly name?: string;
    readonly tags?: string[];
    readonly vault?: string;
}

/**
 * A collection of values returned by getDocument.
 */
export interface GetDocumentResult {
    readonly content: string;
    readonly name?: string;
    readonly tags?: string[];
    readonly vault?: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
