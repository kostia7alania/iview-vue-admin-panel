<template>
  <div class="shares container">
    <Layout>
      <Sider
        hide-trigger
        collapsible
        width="auto"
        v-model="submenuCollapsed"
        style="background: #fff"
      >
        <Menu
          :class="menuitemClasses"
          :collapsed-width="78"
          active-name="1-2"
          theme="light"
          width="auto"
        >
          <MenuItem name="1-1" @click.native="setSubContent('1-1')">История покупок</MenuItem>
          <MenuItem name="1-2" @click.native="setSubContent('1-2')">Покупка акций</MenuItem>
          <MenuItem name="1-3" @click.native="setSubContent('1-3')">Полученные вознаграждения</MenuItem>
          <MenuItem name="1-4" @click.native="setSubContent('1-4')">Задолженность от Маробуса</MenuItem>
        </Menu>
      </Sider>
      <!-- Покупка акций (1-2) -->
      <Content
        :style="{padding: '24px', minHeight: '280px', background: '#fff'}"
        v-if="subContent == '1-2'"
      >
        <div class="shares-info">
          <h2>Покупка акций</h2>
          <Row style="height: 100%;" type="flex">
            <Col class="shares-col" :xs="24" :sm="12">
              <Card :bordered="false" order="1">
                <p slot="title">Цена акций</p>
                <p>Стоимость акции зависит от покупаемого объема...-</p>
                <Table :columns="columns1" :data="data1"></Table>
              </Card>
            </Col>
            <Col class="shares-col" :xs="24" :sm="12" order="2">
              <Card style="height: 100%;" :bordered="false">
                <p slot="title">Акций в собственности</p>
                <Alert style="text-align: center">
                  <span class="share-balance">32 500</span>
                </Alert>
                <Button class="w100" type="primary" @click="setSubContent('1-1')">История покупок</Button>
              </Card>
            </Col>
          </Row>
          <Row>
            <Form label-position="top" inline>
              <FormItem label="Количество, шт.">
                <Input min="600" v-model="buyForm.amount" @keyup.native="updateBuyForm"></Input>
              </FormItem>
              <FormItem label="Цена, руб">
                <Input v-model="buyForm.price" disabled></Input>
              </FormItem>
              <FormItem label="Сумма к оплате, руб">
                <Input v-model="buyForm.total" disabled></Input>
              </FormItem>
            </Form>
            <Checkbox v-model="buyForm.agreed">Я согласен(на) с условиями</Checkbox>
            <Button type="primary" @click="submitOrder">Оплатить</Button>
          </Row>
        </div>
      </Content>
      <!-- История покупок (1-1) -->
      <Content
        :style="{padding: '24px', minHeight: '280px', background: '#fff'}"
        v-if="subContent == '1-1'"
      >
        <h2>История покупок</h2>
      </Content>
    </Layout>
  </div>
</template>
<script>
var ins;
import { mapState, mapMutations } from "vuex";

export default {
  created() {
    ins = this;
  },
  data() {
    return {
      buyForm: {
        amount: 600,
        price: 14.5937226,
        total: 8756.23,
        agreed: false
      },
      subContent: "1-2",
      isCollapsed: false,
      columns1: [
        {
          title: "Кол-во, шт",
          key: "quantity"
        },
        {
          title: "Цена за 1 акцию, руб",
          key: "price"
        },
        {
          title: "Сумма",
          key: "sum"
        }
      ],
      data1: [
        {
          quantity: 600,
          price: 14.5937226,
          sum: 8756.23
        },
        {
          quantity: 1000,
          price: 14.2197143,
          sum: 14219.71
        },
        {
          quantity: 1500,
          price: 14.0009335,
          sum: 21001.4
        },
        {
          quantity: 5000,
          price: 13.35,
          sum: 66757.46
        },
        {
          quantity: 1000000,
          price: 10.35,
          sum: 10350000
        },
        {
          quantity: 10000000,
          price: 9.25,
          sum: 92500000.0
        }
      ]
    };
  },
  computed: {
    ...mapState(["general/submenuCollapsed"]),
    submenuCollapsed: {
      get() {
        return this["general/submenuCollapsed"];
      },
      set(e) {
        this["general/TOGGLE_submenuCollapsed"]();
      }
    },
    rotateIcon() {
      return 1; //["menu-icon", this.submenuCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return 1; //["menu-item", this.submenuCollapsed ? "collapsed-menu" : ""];
    }
  },
  methods: {
    ...mapMutations(["general/TOGGLE_submenuCollapsed"]),
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    },
    setSubContent(newState) {
      console.log("wtf");
      console.log(newState);
      ins.subContent = newState;
    },
    updateBuyForm() {
      console.log("lol");
      var price = 0;
      for (var i = ins.data1.length - 1; i >= 0; i--) {
        if (ins.buyForm.amount >= ins.data1[i].quantity) {
          price = ins.data1[i].price;
          console.log("Price: ", price);
          break;
        }
      }
      ins.buyForm.price = price;
      ins.buyForm.total = price * ins.buyForm.amount;
    },
    submitOrder() {
      console.log(ins.buyForm);
    }
  }
};
</script>

<style>
.share-balance {
  font-size: 18px;
}
.shares-table {
  width: 500px;
  max-width: 100%;
  margin: auto;
}
.ivu-table td {
  height: auto !important;
}
</style>

<style scoped>
</style>
