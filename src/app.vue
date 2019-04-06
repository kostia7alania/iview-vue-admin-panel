
<template>
    <router-view></router-view>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        data () {return {}},
        mounted () {},
        beforeDestroy () {},
        computed: {
            ...mapGetters([
                'TOKEN__isOK'
            ])
        },
        created() {
            if( this.TOKEN__isOK) {
                this.$router.push({name: 'home'});
            } else {
                this.logout();
                this.$router.push({name: 'login'});
            }
        },
        methods: {
            ...mapActions([
                'logout'
            ])
        }
    }
</script>
