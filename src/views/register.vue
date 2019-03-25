<template>
<div class="register container">
<Breadcrumb>
        <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> Главная
        </BreadcrumbItem>
        <BreadcrumbItem to="/register">
            Регистрация
        </BreadcrumbItem>
    </Breadcrumb>

    <h1>Регистрация</h1>
    <div class="rdescr">Введите и отправьте свои данные для подтверждения регистрации.
        Ответ о регистрации придет на указанную почту.</div>
    <Steps class="margin30" :current="current">
        <Step title="Личные данные" content="这里是该步骤的描述信息"><p>123123</p></Step>
        <Step title="Контакты" content="这里是该步骤的描述信息"><p>123123</p></Step>
        <Step title="Соглашение и договора"><p>123123</p></Step>
        <Step title="Загрузка документа"><p>123123</p></Step>
    </Steps>
    <Form class="margin30" :model="form" label-position="top">
        <div class="step step0" v-if="current == 0">
            <h2>Личные данные</h2>
            <FormItem label="Фамилия">
                <Input class="m300" v-model="form.lastname" placeholder="введите фамилию..."></Input>
            </FormItem>
            <FormItem label="Имя">
                <Input class="m300" v-model="form.name" placeholder="введите имя..."></Input>
            </FormItem>
            <FormItem label="Отчество">
                <Input class="m300" v-model="form.father" placeholder="введите отчество..."></Input>
            </FormItem>
            <FormItem label="ИНН">
                <Input class="m300" v-model="form.inn"></Input>
            </FormItem>
            <div class="inline-inputs">
                <FormItem class="inline_m20" label="Серия и номер паспорта">
                    <Input class="m100" v-model="form.passport.num"></Input>
                </FormItem>
                <FormItem class="inline_m20" label="Когда выдан">
                    <Input class="m100" v-model="form.passport.issueDate"></Input>
                </FormItem>
                <FormItem class="inline_m20" label="Кем выдан">
                    <Input class="m100" v-model="form.passport.whoIssued"></Input>
                </FormItem>
            </div>
        </div>
        <div class="step step1" v-if="current == 1">
            <h2>Контакты</h2>
            <FormItem label="Телефон">
                <Input class="m300" v-model="form.phone"></Input>
            </FormItem>
            <FormItem label="Электронная почта">
                <Input class="m300" v-model="form.email"></Input>
            </FormItem>
            <FormItem label="Домашний адрес">
                <Input class="m300" v-model="form.homeAddress"></Input>
            </FormItem>
            <FormItem label="Индекс">
                <Input class="m300" v-model="form.zip"></Input>
            </FormItem>
            <FormItem label="Город">
                <Input class="m300" v-model="form.city"></Input>
            </FormItem>
            <FormItem label="Область">
                <Input class="m300" v-model="form.area"></Input>
            </FormItem>
            <FormItem label="Страна">
                <Input class="m300" v-model="form.county"></Input>
            </FormItem>
            <h2>Банковские реквизиты</h2>
            <FormItem>
            <Input class="m300" v-model="form.bankAccount" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="ФИО,Счет,БИК..."></Input>
        </FormItem>
        </div>
        <div class="step step2" v-if="current == 2">
            <h2>Ознакомьтесь и примите договора и соглашения</h2>
            <ul class="li-terms">
                <li> <Icon type="md-checkmark" />Агентский договор Маробус</li>
                <li> <Icon type="md-checkmark" />Договор инвестирования Маробус</li>
                <li><Icon type="md-checkmark" />Договор по ведению реестра Маробус</li>
                <li><Icon type="md-checkmark" />Оферта купли продажи акций Маробус</li>
                <li><Icon type="md-checkmark" />Оферта опционный договор Маробус</li>
                <li><Icon type="md-checkmark" />Соглашение о конфиденциальности Маробус</li>
                <li><Icon type="md-checkmark" />Политика персональных данных</li>
            </ul>
            <div class="label-terms"><Checkbox v-model="form.agreedToTerms">Принимаю все соглашения и условия</Checkbox></div>
        </div>
        <div class="step step3" v-if="current == 3">
            <h2>Загрузка документа</h2>
            <Upload
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>Перетащите или выбирете файл</p>
                </div>
            </Upload>
        </div>
    </Form>
    <Button class="rprev-btn big-btn" v-if="current != 0" type="default" @click="prev">Назад</Button>
    <Button class="rnext-btn big-btn" v-if="current != 3" type="primary" @click="next">Далее</Button>
    <Button class="rnext-btn big-btn" v-if="current == 3" type="success" @click="submit">Отправить агенту</Button>
</div>
</template>
<script>
    export default {
        data () {
            return {
                current: 0,
                form: {
                    passport: {}
                }
            }
        },
        methods: {
            next () {
                if ((this.current == 2) && (!this.form.agreedToTerms)) {
                    this.$Message.error('Вы сможете зарегистрироваться только если принимаете наши условия!');
                } else {
                    this.current += 1;
                }
            },
            prev () {
                this.current -= 1;
            },
            submit () {
                this.$router.push('/')
                console.log(this.form);
            }
        }
    }
</script>

<style>
.label-terms {
    font-size: 18px;
    padding: 30px;
}
.li-terms li {
    list-style: none;
    font-size: 14px;
}
h2 {
    margin-bottom: 30px !important;
}
.rdescr {
    font-size: 14px;
}
.big-btn {
    padding: 0 40px;
    max-width: 100%;
    font-size: 16px !important;
}
.rprev-btn {
    float: left;
}
.rnext-btn {
    float: right;
    margin-right: 30px;
}
.register {
    padding: 20px;
    margin-bottom: 20px;
}
.inline_m20 {
    display: inline-block;
    margin-right: 20px;
}
</style>
