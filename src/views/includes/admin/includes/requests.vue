<template>
<Div>
    <Card class="reqInfo" v-for="(r, k) in requests_filtered" :key="k">
        <div v-for="(info, k2) in r.info" :key="k2">
            <label><strong> {{info.key}}: </strong></label> {{info.value}}
        </div>
        <div class="control-request">
            <Button type="primary" @click="confirmReq(r.id)">Принять</Button>
            <Button type="error" @click="deleteReq(r.id)" ghost>Удалить</Button>
        </div>
    </Card>
</Div>
</template>

<script>
var ins;
Array.prototype.getById = function(id){
  for (var i = 0; i < this.length; i++) {
      if (this[i].id == id) {
          return this[i]
      }
  }
}

export default {
    name:"requests",
    created() {
        ins = this;
    },
    methods: {
        confirmReq(id) {
            console.log(id)
        },
        deleteReq(id) {
            ins.requests.getById(id).status = 'del'
        }
    },
    data() {
        return {}
    },
    computed: {
        requests_filtered() {
            return this.requests.filter(r => r.status != 'del')
        }
    }
}
</script>

<style>
.reqInfo {
    margin: 20px 0;
    padding-left: 20px;
    margin-bottom: 50px;
}
</style>
