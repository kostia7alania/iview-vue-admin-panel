<style>
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
<template>
<Div>
     <ButtonGroup>
        <Button type="primary">Показать Всех</Button>
        <Button>Показать только кому должны</Button>
    </ButtonGroup>

    <Table :columns="columns" :data="data"></Table>
</Div>
</template>
<script>
    export default {
        data () {
            return {
                columns: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: 'Фамилия',
                        key: 'lastName'
                    },
                    {
                        title: 'Имя',
                        key: 'firstName'
                    },
                    {
                        title: 'Отчество',
                        key: 'fatherName'
                    },
                    {
                        title: 'Акции',
                        key: 'shares'
                    },
                    {
                        title: 'Начислено',
                        key: 'accrued'
                    },
                    {
                        title: 'Выплачено',
                        key: 'paid'
                    },
                    {
                        title: 'Задолженность',
                        key: 'debt',
                        filters: [
                            {
                                label: "Показать всех",
                                value: 1
                            },
                            {
                                label: "Показать только кому должны",
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value == 2) {
                                return row.debt > 0
                            } else {
                                return 1
                            }
                        },
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            console.log(h, params)
                                        }
                                    }
                                }, 'Оплатить ' + params.row.debt)
                            ]);
                        }
                    }
                ],
                data: [
                    {
                        id: 1,
                        lastName: 'Пупкин',
                        firstName: 'Василий',
                        fatherName: 'Алибабаевич',
                        shares: 5000,
                        accrued: 25000,
                        paid: 10000,
                        debt: 15000
                    },
                    {
                        id: 2,
                        lastName: 'Дрюпкин',
                        firstName: 'Петр',
                        fatherName: 'Иванович',
                        shares: 15000,
                        accrued: 45000,
                        paid: 45000,
                        debt: 0
                    }
                ],
            }
        },
        methods: {
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            }
        }
    }
</script>
