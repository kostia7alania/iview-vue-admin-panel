<template>
    <Form :model="formInfo" name="formInfo">
        <FormItem label="ID Пригласившего Агента">
            <Input v-model="formInfo.ref"></Input>
        </FormItem>
        <FormItem label="Фамилия">
            <Input v-model="formInfo.lastName"></Input>
        </FormItem>
        <FormItem label="Имя">
            <Input v-model="formInfo.firstName"></Input>
        </FormItem>
        <FormItem label="Отчество">
            <Input v-model="formInfo.fatherName"></Input>
        </FormItem>
        <FormItem label="Паспорт">
            <Input v-model="formInfo.passport.num"></Input>
        </FormItem>
        <FormItem label="Когда и кем выдан">
            <Input v-model="formInfo.passport.whenwhere"></Input>
        </FormItem>
        <FormItem label="Телефон">
            <Input v-model="formInfo.phone"></Input>
        </FormItem>
        <FormItem label="Страна">
            <Input v-model="formInfo.country"></Input>
        </FormItem>
        <FormItem label="Индекс">
            <Input v-model="formInfo.zip"></Input>
        </FormItem>
        <FormItem label="Область">
            <Input v-model="formInfo.area"></Input>
        </FormItem>
        <FormItem label="Город">
            <Input v-model="formInfo.city"></Input>
        </FormItem>
        <FormItem label="Адрес">
            <Input v-model="formInfo.address"></Input>
        </FormItem>
        <FormItem label="ИНН">
            <Input v-model="formInfo.inn"></Input>
        </FormItem>
        <FormItem label="E-mail">
            <Input v-model="formInfo.email"></Input>
        </FormItem>
        <FormItem label="Банковские реквизиты">
            <Input v-model="formInfo.bankAccount"></Input>
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