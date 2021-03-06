// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package onepassword

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

type Login struct {
	s *pulumi.ResourceState
}

// NewLogin registers a new resource with the given unique name, arguments, and options.
func NewLogin(ctx *pulumi.Context,
	name string, args *LoginArgs, opts ...pulumi.ResourceOpt) (*Login, error) {
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["name"] = nil
		inputs["notes"] = nil
		inputs["password"] = nil
		inputs["sections"] = nil
		inputs["tags"] = nil
		inputs["url"] = nil
		inputs["username"] = nil
		inputs["vault"] = nil
	} else {
		inputs["name"] = args.Name
		inputs["notes"] = args.Notes
		inputs["password"] = args.Password
		inputs["sections"] = args.Sections
		inputs["tags"] = args.Tags
		inputs["url"] = args.Url
		inputs["username"] = args.Username
		inputs["vault"] = args.Vault
	}
	s, err := ctx.RegisterResource("onepassword:index/login:Login", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Login{s: s}, nil
}

// GetLogin gets an existing Login resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetLogin(ctx *pulumi.Context,
	name string, id pulumi.ID, state *LoginState, opts ...pulumi.ResourceOpt) (*Login, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["name"] = state.Name
		inputs["notes"] = state.Notes
		inputs["password"] = state.Password
		inputs["sections"] = state.Sections
		inputs["tags"] = state.Tags
		inputs["url"] = state.Url
		inputs["username"] = state.Username
		inputs["vault"] = state.Vault
	}
	s, err := ctx.ReadResource("onepassword:index/login:Login", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &Login{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *Login) URN() pulumi.URNOutput {
	return r.s.URN()
}

// ID is this resource's unique identifier assigned by its provider.
func (r *Login) ID() pulumi.IDOutput {
	return r.s.ID()
}

func (r *Login) Name() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["name"])
}

func (r *Login) Notes() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["notes"])
}

func (r *Login) Password() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["password"])
}

func (r *Login) Sections() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["sections"])
}

func (r *Login) Tags() pulumi.ArrayOutput {
	return (pulumi.ArrayOutput)(r.s.State["tags"])
}

func (r *Login) Url() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["url"])
}

func (r *Login) Username() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["username"])
}

func (r *Login) Vault() pulumi.StringOutput {
	return (pulumi.StringOutput)(r.s.State["vault"])
}

// Input properties used for looking up and filtering Login resources.
type LoginState struct {
	Name interface{}
	Notes interface{}
	Password interface{}
	Sections interface{}
	Tags interface{}
	Url interface{}
	Username interface{}
	Vault interface{}
}

// The set of arguments for constructing a Login resource.
type LoginArgs struct {
	Name interface{}
	Notes interface{}
	Password interface{}
	Sections interface{}
	Tags interface{}
	Url interface{}
	Username interface{}
	Vault interface{}
}
