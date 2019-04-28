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
        <Menu :collapsed-width="78" active-name="2-1" theme="light" width="auto">
          <MenuItem name="2-1" @click.native="setSubContent('2-1')">Данные по субагентам</MenuItem>
          <MenuItem name="2-2" @click.native="setSubContent('2-2')">Регистрации субагентов</MenuItem>
        </Menu>
      </Sider>
      <!-- Данные по субагентам (2-1) -->
      <Content
        :style="{padding: '24px', minHeight: '280px', background: '#fff'}"
        v-if="subContent == '2-1'"
      >
        <h2>Субагенты</h2>
        <div class="subagent-main-infocard">
          <Row>
            <Col span="7" offset="1">
              <Card>
                <p slot="title">Количество Субагентов</p>
                <p>3</p>
              </Card>
            </Col>
            <Col span="7" offset="1">
              <Card dis-hover>
                <p slot="title">Количество продаж</p>
                <p>17</p>
              </Card>
            </Col>
            <Col span="7" offset="1">
              <Card dis-hover>
                <p slot="title">Проданных акций</p>
                <p>138 000</p>
              </Card>
            </Col>
          </Row>
        </div>
        <div class="subagent-infotable subagent-infotable-1">
          <infoTable1/>
        </div>
        <div class="subagent-infotable subagent-infotable-2">
          <infoTable2/>
        </div>
        <div class="subagent-infotable subagent-infotable-3">
          <infoTable3/>
        </div>
        <div class="refer-a-subagent">
          <h2>Пригласить субагента</h2>Вы можете пригласить субагента отослав ему эту ссылку
          <Alert>
            https://google.com
            <Icon style="float: right; margin-top: -3px;" type="ios-copy" size="24"/>
          </Alert>
        </div>
      </Content>
      <!-- Регистрации субагентов (2-2) -->

      <Content
        :style="{padding: '24px', minHeight: '280px', background: '#fff'}"
        v-if="subContent == '2-2'"
      >
        <h2>Субагенты</h2>
        <h4>Проcмотр заявок на регистрацию от Субагентов...</h4>

        <subAgentRequests/>
      </Content>
    </Layout>
  </div>
</template>
<script>
var ins;
import infoTable1 from "./subagentsTables/infoTable1.vue";
import infoTable2 from "./subagentsTables/infoTable2.vue";
import infoTable3 from "./subagentsTables/infoTable3.vue";
import subAgentRequests from "./subagentsTables/subAgentRequests.vue";
import { mapState, mapMutations } from "vuex";

export default {
  created() {
    ins = this;
  },
  data() {
    return {
      subContent: "2-1",
      isCollapsed: false
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
    }
  },
  methods: {
    ...mapMutations(["general/TOGGLE_submenuCollapsed"]),
    setSubContent(newState) {
      ins.subContent = newState;
    }
  },
  components: {
    infoTable1,
    infoTable2,
    infoTable3,
    subAgentRequests
  }
};
</script>

<style>
.subagent-infotable {
  margin: 20px 0;
}
</style>
