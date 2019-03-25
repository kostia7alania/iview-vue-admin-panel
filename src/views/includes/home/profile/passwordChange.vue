<template>
    <Form style="width: 500px; max-width: 100%" name="passform">
        <FormItem prop="password" label="Старый пароль">
            <Input type="password" v-model="form.password" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password" label="Новый пароль">
            <Input type="password" v-model="form.newPass" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem prop="password" label="Повторите пароль"> 
            <Input type="password" v-model="form.repeatPass" placeholder="Password">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('passform')">Сменить</Button>
        </FormItem>
    </Form>
</template>
<script>
var ins;
    export default {
        created () {
            ins = this;
        },
        data () {
            return {
                form: {
                    password: '',
                    newPass: '',
                    repeatPass: ""
                }
            }
        },
        methods: {
            handleSubmit(name) {
                console.log(ins.form);
            }
        }
    }
</script>
