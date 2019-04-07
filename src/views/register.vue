<template>
<div class="register container">
<Breadcrumb>
        <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> 
            Главная
        </BreadcrumbItem>
        <BreadcrumbItem >
            Регистрация
        </BreadcrumbItem>
    </Breadcrumb>

    <h1>Регистрация</h1>
    <div class="rdescr">Введите и отправьте свои данные для подтверждения регистрации.
        Ответ о регистрации придет на указанную почту.</div>
    <Steps class="margin30" :current="current" :status="status">
        <Step title="Личные данные" ></Step>
        <Step title="Контакты" ></Step>
        <Step title="Соглашение и договора"></Step>
        <Step title="Загрузка документа"></Step>
    </Steps>
    <Form ref="formInline" :rules="form_rules" class="margin30" :model="form" label-position="top">
        <div class="step step0" v-if="current == 0">
            <h2>Личные данные</h2>
            <FormItem label="Пароль" :class="!clearPwd_valid ? 'error':''">
                <Input class="m300" v-model.trim="clearPwd" placeholder="введите пароль..."></Input>
            </FormItem>
            <FormItem label="Фамилия">
                <Input class="m300" v-model.trim="form.lastname" placeholder="введите фамилию..."></Input>
            </FormItem>
            <FormItem label="Имя">
                <Input class="m300" v-model.trim="form.name" placeholder="введите имя..."></Input>
            </FormItem>
            <FormItem label="Отчество">
                <Input class="m300" v-model.trim="form.father" placeholder="введите отчество..."></Input>
            </FormItem>
            <FormItem label="ИНН">
                <Input class="m300" v-model.trim="form.inn"></Input>
            </FormItem>
            <div class="inline-inputs">
                <FormItem class="inline_m20" label="Серия и номер паспорта">
                    <Input class="m100" v-model.trim="form.passport.num"></Input>
                </FormItem>
                <FormItem class="inline_m20" label="Когда выдан">
                    <Input class="m100" v-model.trim="form.passport.issueDate"></Input>
                </FormItem>
                <FormItem class="inline_m20" label="Кем выдан">
                    <Input class="m100" v-model.trim="form.passport.whoIssued"></Input>
                </FormItem>
            </div>
        </div>
        <div class="step step1" v-if="current == 1">
            <h2>Контакты</h2>
            <FormItem label="Телефон">
                <Input class="m300" v-model.trim="form.phone"></Input>
            </FormItem>
            <FormItem prop="email" :class="email_isOK == false ? 'error':''" label="Электронная почта">
                <Input class="m300" v-model.trim="form.email"></Input>
            </FormItem>
            <FormItem label="Домашний адрес">
                <Input class="m300" v-model.trim="form.homeAddress"></Input>
            </FormItem>
            <FormItem label="Индекс">
                <Input class="m300" v-model.trim="form.zip"></Input>
            </FormItem>
            <FormItem label="Город">
                <Input class="m300" v-model.trim="form.city"></Input>
            </FormItem>
            <FormItem label="Область">
                <Input class="m300" v-model.trim="form.area"></Input>
            </FormItem>
            <FormItem label="Страна">
                <Input class="m300" v-model.trim="form.county"></Input>
            </FormItem>
            <h2>Банковские реквизиты</h2>
            <FormItem>
            <Input class="m300" v-model.trim="form.bankAccount" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="ФИО,Счет,БИК..."></Input>
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
            <div class="label-terms"><Checkbox v-model.trim="form.agreedToTerms">Принимаю все соглашения и условия</Checkbox></div>
        </div>
        <div class="step step3" v-if="current == 3">
            <h2>Загрузка документа</h2>
            <Upload v-show="!form.IFormFile" 
                type="drag"
                accept="image/*"
                :before-upload="fileHandler"
                action="https://web-controllers20190214025405.azurewebsites.net/api/AnonAccessUser/UploadImage">
                <div style="padding: 20px 0">
                    <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                    <p>Перетащите или выбирете файл</p>
                </div>
            </Upload>
            <div v-if="form.IFormFile" >Выбран файл: {{ form.IFormFile.name }}  <Button type="text" @click="form.IFormFile=null">x</Button></div>
        </div>
    </Form>
    <Button class="rprev-btn big-btn" v-if="current != 0" type="default" @click="prev">Назад</Button>
    <Button class="rnext-btn big-btn" v-if="current != 3" type="primary" @click="next" :disabled="next_disabled">Далее</Button>
    <Button class="rnext-btn big-btn" v-if="current == 3" type="success" @click="submit">Отправить агенту</Button>
</div>
</template>
<script>

import {mapActions} from 'vuex'

    export default {
        name: 'register',
        data () {
            return {
                current: 0,
                clearPwd: '',
                form: {
                    email:'s@s.s',
                    passport: {},
                    IFormFile:null // image
                },
                isEmailAvailable:false,
                form_rules: {
                    email: [
                        { required: true, message: 'Почта обязательна.', trigger: 'blur' },
                        { type: 'email',  message: 'Введите существующую почту', trigger: 'blur' }
                    ]
                }
            }
        },
        watch: {
            'form.email'(neww,old) {
                if(this.validateEmail) this.email_check(neww);
                this.handle_email();
            },
        },
        computed: {
            status() {
                
                if(this.current == 0 ) return !this.clearPwd_valid ? 'error': null
                if(this.current == 1 ) return !this.email_isOK ? 'error': null
                return null
            },
            next_disabled() {
                if(this.current == 0)  return !this.clearPwd_valid;
                if(this.current == 1 ) return !this.email_isOK
                return false;
            },
            validateEmail() {
                const re = /\S+@\S+\.\S+/;
                return re.test(this.form.email)
            },
            email_isOK () {
                return this.isEmailAvailable && this.validateEmail 
            },
            clearPwd_valid() {
                return this.clearPwd.length>6&&this.clearPwd.length<16
            }
        },
        methods: {
            ...mapActions([
                'emailAvailable',
                'uploadImage',
                'register',
            ]),
            fileHandler(e){
                this.form.IFormFile = e
                return false
            },
            handle_email() {
                this.$refs.formInline.validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            async email_check(neww) {
                this.isEmailAvailable = null;
                const res = await this.emailAvailable(this.form.email)
                if(res) {
                     if(neww==this.form.email) { //в процессе запроса может измениться само значение почты, а реквесты на тест почты могут завершиться с разной скорость - поетому и проверка)
                        this.isEmailAvailable = true
                        this.$Message.success('Почта доступна к регистрации!');
                    } 
                } else if( res == false ) {
                    this.isEmailAvailable = false
                    if(neww==this.form.email) {
                        this.$Message.success('Почта уже зарегистрирована в системе!');
                    }
                } else this.isEmailAvailable = false
                this.handle_email()
            },
            next () {
                if ((this.current == 2) && (!this.form.agreedToTerms)) {
                    this.$Message.error('Вы сможете зарегистрироваться только если принимаете наши условия!');
                } else { this.current += 1;  }
            },
            prev () { this.current -= 1; },

            async submit () {
                const upl = await this.uploadImage(this.form.IFormFile)
                if(!upl) {
                    this.$Message.error('Ошибка при загрузке файла!');
                    return;
                }
                this.$Message.success('Файл успешно загружен на сервер!');
                const clearPwd = this.clearPwd
                const body = this.form
                const res = await this.register({clearPwd,body}); 
                if(res) {
                    this.$Message.success('Вы успешно зарегистрировались');
                    this.$router.push('/')
                } else this.$Message.error('Ошибка при регистрации!');
                console.warn('SUBMIT->',res,'component data->', this._data) 
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
.error>label {
    color:red !important;
}
</style>
