// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package onepassword

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type SoftwareLicence struct {
	s *pulumi.ResourceState
}

// NewSoftwareLicence registers a new resource with the given unique name, arguments, and options.
func NewSoftwareLicence(ctx *pulumi.Context,
	name string, args *SoftwareLicenceArgs, opts ...pulumi.ResourceOpt) (*SoftwareLicence, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["main"] = nil
		inputs["name"] = nil
		inputs["notes"] = nil
		inputs["sections"] = nil
		inputs["tags"] = nil
		inputs["vault"] = nil
	} else {
		inputs["main"] = args.Main
		inputs["name"] = args.Name
		inputs["notes"] = args.Notes
		inputs["sections"] = args.Sections
		inputs["tags"] = args.Tags
		inputs["vault"] = args.Vault
	}
	s, err := ctx.RegisterResource("onepassword:index/softwareLicence:SoftwareLicence", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SoftwareLicence{s: s}, nil
}

// GetSoftwareLicence gets an existing SoftwareLicence resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetSoftwareLicence(ctx *pulumi.Context,
	name string, id pulumi.ID, state *SoftwareLicenceState, opts ...pulumi.ResourceOpt) (*SoftwareLicence, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["main"] = state.Main
		inputs["name"] = state.Name
		inputs["notes"] = state.Notes
		inputs["sections"] = state.Sections
		inputs["tags"] = state.Tags
		inputs["vault"] = state.Vault
	}
	s, err := ctx.ReadResource("onepassword:index/softwareLicence:SoftwareLicence", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &SoftwareLicence{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *SoftwareLicence) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *SoftwareLicence) ID() pulumi.IDOutput {
	return r.s.ID()
}

func (r *SoftwareLicence) Main() pulumi.Output {
	return r.s.State["main"]
}

func (r *SoftwareLicence) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

func (r *SoftwareLicence) Notes() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["notes"])
}

func (r *SoftwareLicence) Sections() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["sections"])
}

func (r *SoftwareLicence) Tags() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["tags"])
}

func (r *SoftwareLicence) Vault() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["vault"])
}

// Input properties used for looking up and filtering SoftwareLicence resources.
type SoftwareLicenceState struct {
	Main interface{}
	Name interface{}
	Notes interface{}
	Sections interface{}
	Tags interface{}
	Vault interface{}
}

// The set of arguments for constructing a SoftwareLicence resource.
type SoftwareLicenceArgs struct {
	Main interface{}
	Name interface{}
	Notes interface{}
	Sections interface{}
	Tags interface{}
	Vault interface{}
}
