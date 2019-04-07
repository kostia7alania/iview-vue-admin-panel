<template>
    <div class="index">
        <row type="flex" justify="center" align="middle">
            <col span="24">
                <h1> <img src="../images/logo.png"> </h1>
                <h2>
                    <login style="width: 300px; max-width: 100%; margin: auto;" />
                    <Button @click="askInvite">Регистрация</Button>
                </h2>
            </col>
        </row>
    </div>
</template>

<script>
import login from "./includes/login.vue";
import {mapActions} from 'vuex'
export default {
  name: "start-page",
  components: { login },
  data() {
    return {
      value: 'CfDJ8L57RTuEqqRNthB8AJJgJ_dzHir0N-o-krrWnjhCHlWMow9SbJGz8pzi7QsT0OF4wpetYAwMEJ8dcWWcOFkpHZ6l84hO4GR-2oOADRNZk05aivzWNwALKTQps4vG11LZMD5OsNWs3CCKdHbjL3cB4fU'
    }
  },
  created(){
  },
  methods: {
    ...mapActions([
      'checkInvite'
    ]),
    askInvite() {
      this.$Modal.confirm({
        title: "Регистрация по ссылке - приглашению",
        okText: "Регистрация",
        cancelText: "Отмена",
        loading: true,
        closable:true,
        render: h => {
          return h("Input", {
            props: {
              value: this.value,
              autofocus: true,
              placeholder: "Код приглашения..."
            },
            on: {
              input: val => (this.value = val)
            }
          });
        },
        onOk: async () => { 
          const res = await this.checkInvite(this.value)
          if(res || res == 0) { 
            this.goRegister();
            this.$Message.success('Приглашение принято!');
          }
          else {
            this.$Message.error('Приглашение не принято!');
          }
          this.$Modal.remove();
        }
      });
    },

    goRegister() {
      this.$router.push("/register");
    }
  }
};
</script>


<style scoped lang="scss">
.index {
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  h1 {
    height: 150px;
    img {
      height: 100%;
    }
  }
  h2 {
    color: #666;
    margin-bottom: 200px;
    p {
      margin: 0 0 50px;
    }
  }
  .ivu-row-flex {
    height: 100%;
  }
}
</style>