<template>
<div class="shares container">
    <Layout>
        <Sider hide-trigger collapsible  width="auto" v-model="submenuCollapsed" style="background: #fff">
                            <Menu :class="menuitemClasses" :collapsed-width="78" active-name="3-2" theme="light" width="auto">
                                <MenuItem name="3-1" @click.native="setSubContent('3-1')">Персональные данные</MenuItem>
                                <MenuItem name="3-2" @click.native="setSubContent('3-2')">Смена Пароля</MenuItem>
                            </Menu>
                        </Sider>
    <!-- Персональные данные< (3-1) -->
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}" v-if="subContent == '3-1'">
        <personalInfoChange />
    </Content>
    <!-- Смена Пароля (3-2) -->
    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}" v-if="subContent == '3-2'">
        <passwordChange />
    </Content>
    
    </Layout>



            </div>
</template>
<script>
var ins;
import {mapState} from 'vuex';
import passwordChange from './profile/passwordChange.vue';
import personalInfoChange from './profile/personalInfoForm.vue';

    export default {
        created () {
            ins = this;
        },
        data () {
            return {
                subContent: '3-2',
            }
        },
        computed: {

        },
        methods: {
            setSubContent (newState) {
                ins.subContent = newState;
            }
        },
        components: {
            passwordChange,
            personalInfoChange
        }
    }
</script>
