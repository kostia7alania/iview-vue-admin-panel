<template>
<div class="profile-menu">
    <Avatar icon="ios-person" />
    <span class="username">{{username}}</span>
    <Icon @click="logOut" type="ios-log-out"  size="24"/>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
 
export default {  
    computed: {
        ...mapGetters(["login/username"]),
        username() {
            this['login/username']
        },
    },
    methods: {
        ...mapActions(['login/logout']),
        logOut() { 
            this['login/logout']();
            this.$router.push('/');
            this.$Message.success("Вышли из аккаунта");
        }
    },
}
</script>

<style>
.username {
    font-weight: bold;
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
}
.profile-menu {
    margin-right: 30px;
}
</style>
