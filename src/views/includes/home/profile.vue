<template>
  <div class="shares container">
    <Layout>
      <Sider class="sider-section" hide-trigger collapsible width="auto" v-model="submenuCollapsed">
        <Menu
          :class="menuitemClasses"
          :collapsed-width="78"
          active-name="3-2"
          theme="light"
          width="auto"
        >
          <MenuItem name="3-1" @click.native="setSubContent('3-1')">Персональные данные</MenuItem>
          <MenuItem name="3-2" @click.native="setSubContent('3-2')">Смена Пароля</MenuItem>
        </Menu>
      </Sider>
      <!-- Персональные данные< (3-1) -->
      <Content class="content-section" v-if="subContent == '3-1'">
        <personalInfoChange/>
      </Content>
      <!-- Смена Пароля (3-2) -->
      <Content class="content-section" v-if="subContent == '3-2'">
        <passwordChange/>
      </Content>
    </Layout>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import passwordChange from "./profile/passwordChange.vue";
import personalInfoChange from "./profile/personalInfoForm.vue";

export default {
  components: {
    passwordChange,
    personalInfoChange
  },
  data() {
    return {
      subContent: "3-2"
    };
  },
  created() {},
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
      this.subContent = newState;
    }
  }
};
</script>


<style scoped>
.sider-section {
  background: #fff;
}
.content-section {
  padding: 24px;
  min-height: 280px;
  background: #fff;
}
</style>