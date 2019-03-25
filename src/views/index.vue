<style scoped lang="less">
    .index{
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        h1{
            height: 150px;
            img{
                height: 100%;
            }
        }
        h2{
            color: #666;
            margin-bottom: 200px;
            p{
                margin: 0 0 50px;
            }
        }
        .ivu-row-flex{
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="../images/logo.png">
                </h1>
                <h2>
                    <login style="width: 300px; max-width: 100%; margin: auto;" />
                    <Button @click="askInvite">Регистрация</Button>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
import Login from './includes/login.vue'
    export default {
        methods: {
            askInvite () {
                this.$Modal.confirm({
                    title: 'Регистрация по ссылке - приглашению',
                    okText: 'Регистрация',
                    cancelText: 'Отмена',
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Код приглашения...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                },
                            },
                            
                        })
                    },
                    onOk: () => {
                        this.goRegister();
                    }
                })
            },
            goRegister () {
                this.$router.push('/register');
            }
        },
        components: {
            'login': Login
        }
    }
</script>
