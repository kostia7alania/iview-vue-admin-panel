<template>
    <Form :model="formInfo" name="formInfo">
        <FormItem label="ID Пригласившего Агента">
            <input v-model="formInfo.ref">
        </FormItem>
        <FormItem label="Фамилия">
            <input v-model="formInfo.lastName">
        </FormItem>
        <FormItem label="Имя">
            <input v-model="formInfo.firstName">
        </FormItem>
        <FormItem label="Отчество">
            <input v-model="formInfo.fatherName">
        </FormItem>
        <FormItem label="Паспорт">
            <input v-model="formInfo.passport.num">
        </FormItem>
        <FormItem label="Когда и кем выдан">
            <input v-model="formInfo.passport.whenwhere">
        </FormItem>
        <FormItem label="Телефон">
            <input v-model="formInfo.phone">
        </FormItem>
        <FormItem label="Страна">
            <input v-model="formInfo.country">
        </FormItem>
        <FormItem label="Индекс">
            <input v-model="formInfo.zip">
        </FormItem>
        <FormItem label="Область">
            <input v-model="formInfo.area">
        </FormItem>
        <FormItem label="Город">
            <input v-model="formInfo.city">
        </FormItem>
        <FormItem label="Адрес">
            <input v-model="formInfo.address">
        </FormItem>
        <FormItem label="ИНН">
            <input v-model="formInfo.inn">
        </FormItem>
        <FormItem label="E-mail">
            <input v-model="formInfo.email">
        </FormItem>
        <FormItem label="Банковские реквизиты">
            <input v-model="formInfo.bankAccount">
        </FormItem>

        <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>Загрузите скан паспорта если изменился</p>
            </div>
        </Upload>

        <Button type="primary" @click="saveFormInfo">Сохранить</Button>
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
            formInfo: {
                ref: '',
                lastName: '',
                firstName: '',
                fatherName: '',
                passport: {
                    num: '',
                    whenwhere: ''
                },
                phone: '',
                country: '',
                zip: '',
                area: '',
                city: '',
                address: '',
                inn: '',
                email: '',
                bankAccount: ''
            }
        }
    },
    methods: {
        saveFormInfo() {
            console.log(ins.formInfo)
        }
    }
}
</script>