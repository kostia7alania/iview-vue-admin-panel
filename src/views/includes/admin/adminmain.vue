<template>
<div>

<h1> ( admin main ) </h1>
        <Table :columns="table_th" :data="table_td"></Table>
      <Button :disabled="loading" type="primary" @click="getInvite">Получить приглашение</Button>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data(){
        return {
            invites: [],
            loading: false
        }
    },
    computed: {
        table_th() {
            return [{title:'#',key:"#"}, {title:'Приглашение',key:'invite'}]
        },
        table_td() {
            return this.invites.map((e,i)=> {
                    return { '#':++i,'invite':e }
                }
            )
        }
    },
    methods: {
        ...mapActions([
            'register/IssueInvitationLink'
        ]),
        async getInvite() {
            this.loading = true
            const invite = await this['register/IssueInvitationLink']();
            if(invite) {
                this.invites.push(invite);
                this.$Message.success('Приглашение сгенерированно!');
            } else  this.$Message.error('Приглашение не сгенерированно!');
            this.loading = false

        }
    }
}
</script>
