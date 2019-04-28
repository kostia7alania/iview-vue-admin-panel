<template>
    <Form @submit.prevent="handleSubmit('formInline')" ref="formInline" :model="formInline" :rules="ruleInline" inline>
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
import { mapActions, mapGetters } from 'vuex';
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
            message: "Введите почту",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Введите пароль.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "Пароль должен быть больше 6 символов",
            trigger: "blur"
          }
        ]
      }
    };
  },
  computed: {
    ...mapGetters([
      'login/TOKEN__isOK'
    ])
  },
  created(){
    if(this['login/TOKEN__isOK']) this.goHome()
  },
  methods: {
    ...mapActions([
      'login/login'
    ]),
    goHome() {
      this.$router.push("/home");
    },
    handleSubmit(name) {
      this.$refs[name].validate(async valid => {
        if (valid) {
          this.loading = true;
          const res = await this['login/login'](this.formInline)
            if(res) {
              this.goHome()
              this.$Message.success("Вошли в аккаунт");
            } else {
              this.$Message.error("Сервер ответил ошибкой");
            }
            this.loading = false;
         
        }  
          else this.$Message.error("Ошибка в форме"); 
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
