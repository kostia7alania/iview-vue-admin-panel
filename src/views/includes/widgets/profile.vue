<template>
<div class="profile-menu">
    <Avatar icon="ios-person" />
    <span class="username">{{user.role}}</span>
    <Icon @click="logOut" type="ios-log-out"  size="24"/>
</div>
</template>

<script>
import {mapState} from 'vuex';

var ins;
export default {
    created() {
        ins = this;
    },
    data() {
        return {

        }
    },
    computed: mapState(["user"]),
    methods: {
        logOut: () => {
            console.log('works')
            User.logout();
            ins.$router.push('/');
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
