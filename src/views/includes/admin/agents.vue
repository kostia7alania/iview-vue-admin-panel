<template>
<Layout>
    <!-- МЕНЮ -->
    <Sider hide-trigger collapsible  width="auto" v-model="submenuCollapsed" style="background: #fff">
        <Menu :collapsed-width="78" active-name="2-1" theme="light" width="auto">
            <MenuItem name="2-1" @click.native="setSubContent('2-1')">Агенты</MenuItem>
            <MenuItem name="2-2" @click.native="setSubContent('2-2')">Заявки на регистрацию</MenuItem>
        </Menu>
    </Sider>
    <!-- Агенты -->
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}" v-if="subContent == '2-1'">
        <ButtonGroup>
            <Button type="primary">Cжатый</Button>
            <Button>Полный</Button>
        </ButtonGroup>
        <input type="text" class="ivu-input" placeholder="Введите параметр для поиска">
        <Table border :columns="columns" :data="data"></Table>
    </Content>
    <!-- Заявки на регистрацию -->
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}" v-if="subContent == '2-2'">
        <adminrequests />
    </Content>
</Layout>
</template>
<script>
import adminrequests from './includes/requests.vue';

var ins;
    export default {
        created () {
            ins = this;
        },
        data () {
            return {
                subContent: '2-1',
                search: '',
                columns: [
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
                        title: 'ID',
                        key: 'id',
                        sortable: true
                    },
                    {
                        title: 'Акции',
                        key: 'shares',
                        sortable: true
                    }
                ],
                data: [
                    {
                        lastName: 'Иванов',
                        firstName: 'Петр',
                        fatherName: 'Сидорович',
                        id: 100001,
                        shares: 40000
                    },
                    {
                        lastName: 'Курбангалы',
                        firstName: 'Аяз',
                        fatherName: 'Канович',
                        id: 100002,
                        shares: 45000
                    },
                    {
                        lastName: 'Петров',
                        firstName: 'Петр',
                        fatherName: 'Сидорович',
                        id: 100003,
                        shares: 20000
                    },
                    {
                        lastName: 'Иванов',
                        firstName: 'Иван',
                        fatherName: 'Петрович',
                        id: 100004,
                        shares: 344000
                    },
                    {
                        lastName: 'Иванов',
                        firstName: 'Петр',
                        fatherName: 'Сидорович',
                        id: 100005,
                        shares: 404000
                    },
                    {
                        lastName: 'Иванов',
                        firstName: 'Петр',
                        fatherName: 'Сидорович',
                        id: 100006,
                        shares: 4000
                    },
                    {
                        lastName: 'Иванов',
                        firstName: 'Петр',
                        fatherName: 'Сидорович',
                        id: 100007,
                        shares: 120000
                    },
                ]
            }
        },
        methods: {
            setSubContent (newState) {
                ins.subContent = newState;
            }
        },
        components: {
            adminrequests
        }
    }
</script>
