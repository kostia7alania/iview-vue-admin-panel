<template>
<Div class="infoTable">
    <h4>Данные по своим Субагентам</h4>
    <Table :columns="columns1" :data="data1"></Table>
</Div>
</template>

<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: 'ФИО',
                        key: 'name'
                    },
                    {
                        title: 'Акций продано',
                        key: 'amount'
                    },
                    {
                        title: 'Сумма',
                        key: 'sum'
                    }
                ],
                data1: [
                    {
                        id: 100102,
                        name: 'Петров Сергей Иванович',
                        amount: 85500,
                        sum: 1000000
                    },
                    {
                        id: 100102,
                        name: 'Петров Сергей Иванович',
                        amount: 85500,
                        sum: 1000000
                    },
                    {
                        id: 100102,
                        name: 'Петров Сергей Иванович',
                        amount: 85500,
                        sum: 1000000
                    }
                ]
            }
        }
    }
</script>
