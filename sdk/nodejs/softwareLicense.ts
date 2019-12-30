// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SoftwareLicense extends pulumi.CustomResource {
    /**
     * Get an existing SoftwareLicense resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SoftwareLicenseState, opts?: pulumi.CustomResourceOptions): SoftwareLicense {
        return new SoftwareLicense(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'onepassword:index/softwareLicense:SoftwareLicense';

    /**
     * Returns true if the given object is an instance of SoftwareLicense.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SoftwareLicense {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SoftwareLicense.__pulumiType;
    }

    public readonly main!: pulumi.Output<outputs.SoftwareLicenseMain | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly notes!: pulumi.Output<string | undefined>;
    public readonly sections!: pulumi.Output<outputs.SoftwareLicenseSection[] | undefined>;
    public readonly tags!: pulumi.Output<string[] | undefined>;
    public readonly vault!: pulumi.Output<string | undefined>;

    /**
     * Create a SoftwareLicense resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SoftwareLicenseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SoftwareLicenseArgs | SoftwareLicenseState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as SoftwareLicenseState | undefined;
            inputs["main"] = state ? state.main : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["notes"] = state ? state.notes : undefined;
            inputs["sections"] = state ? state.sections : undefined;
            inputs["tags"] = state ? state.tags : undefined;
            inputs["vault"] = state ? state.vault : undefined;
        } else {
            const args = argsOrState as SoftwareLicenseArgs | undefined;
            inputs["main"] = args ? args.main : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["notes"] = args ? args.notes : undefined;
            inputs["sections"] = args ? args.sections : undefined;
            inputs["tags"] = args ? args.tags : undefined;
            inputs["vault"] = args ? args.vault : undefined;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(SoftwareLicense.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering SoftwareLicense resources.
 */
export interface SoftwareLicenseState {
    readonly main?: pulumi.Input<inputs.SoftwareLicenseMain>;
    readonly name?: pulumi.Input<string>;
    readonly notes?: pulumi.Input<string>;
    readonly sections?: pulumi.Input<pulumi.Input<inputs.SoftwareLicenseSection>[]>;
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    readonly vault?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SoftwareLicense resource.
 */
export interface SoftwareLicenseArgs {
    readonly main?: pulumi.Input<inputs.SoftwareLicenseMain>;
    readonly name?: pulumi.Input<string>;
    readonly notes?: pulumi.Input<string>;
    readonly sections?: pulumi.Input<pulumi.Input<inputs.SoftwareLicenseSection>[]>;
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
    readonly vault?: pulumi.Input<string>;
}
