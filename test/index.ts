import * as onepassword from "@pulumi/onepassword";

new onepassword.Vault("test", { name: "test" }, { provider: undefined });
