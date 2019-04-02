<template>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem class="w100" prop="user">
            <Input type="text" v-model="formInline.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem class="w100" prop="password">
            <Input type="password" v-model="formInline.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button class="w100" type="primary" @click="handleSubmit('formInline')">Вход</Button>
        </FormItem>
    </Form>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
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
          this.$Message.success("Успешно!");
          this.$store.dispatch("setUser", this.formInline.user);
          this.$router.push("/home");
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
