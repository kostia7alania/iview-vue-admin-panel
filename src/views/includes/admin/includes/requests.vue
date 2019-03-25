<template>
<Div>

    <Card class="reqInfo" v-for="r in requests"  v-if="r.status != 'del'">
        <div v-for="info in r.info">
            <label><strong> {{info.key}}: </strong></label> {{info.value}}
        </div>
        <div class="control-request">
            <Button type="primary" @click="confirmReq(r.id)">Принять</Button>
            <Button type="error" @click="deleteReq(r.id)" ghost>Удалить</Button>
        </div>
    </Card>
</Div>
</template>

<script>
var ins;
Array.prototype.getById = function(id){
  for (var i = 0; i < this.length; i++) {
      if (this[i].id == id) {
          return this[i]
      }
  }
}

export default {
    created() {
        ins = this;
    },
    methods: {
        confirmReq(id) {
            console.log(id)
        },
        deleteReq(id) {
            ins.requests.getById(id).status = 'del'
        }
    },
    data() {
        return {
            requests: [
                {
                    id: 1,
                    info: [{
                        key: 'Фамилия',
                        value: 'Иванов'
                    },
                    {
                        key: 'Имя',
                        value: 'Иванов'
                    },
                    {
                        key: 'Отчество',
                        value: 'Сидорович'
                    },
                    {
                        key: 'Паспорт',
                        value: '40 09 234324'
                    },
                    {
                        key: 'Когда и кем выдан',
                        value: ''
                    },
                    {
                        key: 'Телефон',
                        value: '+7 (999) 999 99 99'
                    },
                    {
                        key: 'Страна',
                        value: 'Россия'
                    },
                    {
                        key: 'Индекс',
                        value: '42000'
                    },
                    {
                        key: 'Область',
                        value: 'Калужская'
                    },
                    {
                        key: 'Город',
                        value: 'Калуга'
                    },
                    {
                        key: 'Адрес',
                        value: 'ул. Ленина'
                    },
                    {
                        key: 'ИНН',
                        value: '182 805 334 807'
                    },
                    {
                        key: 'E-mail',
                        value: 'mymail@ya.ru'
                    }
                    ],
                    status: ''
                },
                {
                    id: 2,
                    info: [{
                        key: 'Фамилия',
                        value: 'Курбангары'
                    },
                    {
                        key: 'Имя',
                        value: 'Аяз'
                    },
                    {
                        key: 'Отчество',
                        value: 'Сидорович'
                    },
                    {
                        key: 'Паспорт',
                        value: '40 09 234324'
                    },
                    {
                        key: 'Когда и кем выдан',
                        value: ''
                    },
                    {
                        key: 'Телефон',
                        value: '+7 (999) 999 99 99'
                    },
                    {
                        key: 'Страна',
                        value: 'Россия'
                    },
                    {
                        key: 'Индекс',
                        value: '42000'
                    },
                    {
                        key: 'Область',
                        value: 'Калужская'
                    },
                    {
                        key: 'Город',
                        value: 'Калуга'
                    },
                    {
                        key: 'Адрес',
                        value: 'ул. Ленина'
                    },
                    {
                        key: 'ИНН',
                        value: '182 805 334 807'
                    },
                    {
                        key: 'E-mail',
                        value: 'mymail@ya.ru'
                    }],
                    status: ''
                }
            ]
        }
    }
}
</script>

<style>
.reqInfo {
    margin: 20px 0;
    padding-left: 20px;
    margin-bottom: 50px;
}

</style>
