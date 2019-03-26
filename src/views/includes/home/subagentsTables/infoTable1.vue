<template>
<Div class="infoTable">
    <h4>Информация о задолженности Маробуса по вознаграждению к следующей выплате <br>
    (накопительная, зависит от кол-ва проданных акций по цепочке субагентов)</h4>
    <Table :columns="columns1" :data="data1"></Table>
</Div>
</template>

<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Дата выплаты',
                        key: 'paydate'
                    },
                    {
                        title: 'Сумма',
                        key: 'sum'
                    }
                ],
                data1: [
                    {
                        paydate: '01 февраля 2019',
                        sum: 56700
                    }
                ]
            }
        }
    }
</script> 