module github.com/pulumi/pulumi-onepassword

go 1.12

replace (
	github.com/Nvveen/Gotty => github.com/ijc25/Gotty v0.0.0-20170406111628-a8b993ba6abd
	github.com/golang/glog => github.com/pulumi/glog v0.0.0-20180820174630-7eaa6ffb71e4
	github.com/terraform-providers/terraform-provider-onepassword => github.com/mazamats/terraform-provider-onepassword v0.0.0-20191230190323-3df5748d722b
)

require (
	github.com/gogo/protobuf v1.3.1 // indirect
	github.com/google/go-cmp v0.3.1 // indirect
	github.com/hashicorp/golang-lru v0.5.3 // indirect
	github.com/hashicorp/terraform v0.12.7
	github.com/pulumi/pulumi v1.6.0
	github.com/pulumi/pulumi-terraform v0.18.4-0.20191202134852-87cfb4dc8ae1
	github.com/sirupsen/logrus v1.4.2 // indirect
	github.com/stretchr/testify v1.4.0
	github.com/terraform-providers/terraform-provider-onepassword v0.0.0-20190904131047-94dc6aae7d12
	golang.org/x/sys v0.0.0-20190813064441-fde4db37ae7a // indirect
)
