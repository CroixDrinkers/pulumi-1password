#!/bin/bash
PROVIDER=onepassword

make prepare NAME="$PROVIDER" REPOSITORY=github.com/pulumi/pulumi-onepassword
go get github.com/pulumi/scripts/gomod-doccopy
GO111MODULE=on go get github.com/pulumi/pulumi-terraform@master
GO111MODULE=on go get github.com/mazamats/terraform-provider-onepassword
GO111MODULE=on go mod vendor
make ensure
