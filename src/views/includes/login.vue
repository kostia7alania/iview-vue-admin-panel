<template>
    <Form @submit="handleSubmit('formInline')" ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem class="w100" prop="email">
            <Input type="email" v-model="formInline.email" placeholder="E-mail">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem class="w100" prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button :disabled="loading" class="w100" type="primary" @click="handleSubmit('formInline')">Вход</Button>
        </FormItem>
    </Form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      formInline: {
        email: null,
        password: null
      },
      ruleInline: {
        email: [
          {
            required: true,
            message: "Please fill in the email",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {

      this.$refs[name].validate(valid => {
        if (valid) {
          this.loading = true;
          User.login(this.formInline)
          .then(res=>{
            if(res) {
              this.$Message.success("Успешно!");
              this.$store.dispatch("setUser", 'admin');
              this.$router.push("/home");
            } else {
              this.$Message.error("Fail!");
            }
            this.loading = false;
          })
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

<style>
.w100 {
  width: 100%;
}
</style>
