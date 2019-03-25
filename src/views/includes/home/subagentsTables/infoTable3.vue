<template>
<Div class="infoTable">
    <h4>Полученные вознаграждения</h4>
    <Table style="overflow: hidden" :columns="columns1" :data="data1"></Table>
</Div>
</template>

<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Дата',
                        key: 'date'
                    },
                    {
                        title: 'Акций в цепочках продано, шт',
                        key: 'shares'
                    },
                    {
                        title: 'Сумма',
                        key: 'sum'
                    }
                ],
                data1: [
                    {
                        date: '01 сентября 2018',
                        shares: 86600,
                        sum: 50584.27
                    },
                    {
                        date: '01 октября 2018',
                        shares: 18000,
                        sum: 11394.12
                    },
                    {
                        date: '01 ноября 2018',
                        shares: 25000,
                        sum: 15603.59
                    },
                    {
                        date: '',
                        shares: 'Всего:',
                        sum: 175232.59
                    }
                ]
            }
        }
    }
</script>
