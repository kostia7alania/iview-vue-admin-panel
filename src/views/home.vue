<template>
    <div class="layout">
        <Layout>
            <Layout>
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Menu v-if="isUser" class="inline" mode="horizontal" theme="light" active-name="1">
                        <Icon style="float: left" class="inline menu-icon" @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="24"></Icon>
                        <MenuItem name="1" @click.native="setMenu(1)">
                            <Icon type="ios-people" />
                            Акции
                        </MenuItem>
                        <MenuItem name="2" @click.native="setMenu(2)">
                            <Icon type="ios-people" />
                            Субагенты
                        </MenuItem>
                        <MenuItem name="3" @click.native="setMenu(3)">
                            <Icon type="ios-people" />
                            Мой Профайл
                        </MenuItem>
                    </Menu>
                    <Menu v-if="isAdmin" class="inline" mode="horizontal" theme="light" active-name="1">
                        <Icon style="float: left" class="inline menu-icon" @click.native="collapsedSider" :class="rotateIcon" type="md-menu" size="24"></Icon>
                        <MenuItem name="1" @click.native="setMenu(1)">
                            <Icon type="ios-people" />
                            Главная
                        </MenuItem>
                        <MenuItem name="2" @click.native="setMenu(2)">
                            <Icon type="ios-people" />
                            Агенты
                        </MenuItem>
                        <MenuItem name="3" @click.native="setMenu(3)">
                            <Icon type="ios-people" />
                            Реестр акционеров
                        </MenuItem>
                        <MenuItem name="4" @click.native="setMenu(4)">
                            <Icon type="ios-people" />
                            Статиcтика
                        </MenuItem>
                        <MenuItem name="5" @click.native="setMenu(5)">
                            <Icon type="ios-people" />
                            Расчеты
                        </MenuItem>

                    </Menu>
                    <profileWidget />

                </Header>
                <Content v-if="isUser" class="content-section">
                    <shares v-if="menuState == 1"></shares>
                    <subagents v-if="menuState == 2"></subagents>
                    <profile v-if="menuState == 3"></profile>
                </Content>
                <Content v-if="isAdmin" class="content-section">
                <adminmain v-if="menuState == 1"></adminmain>
                <agents v-if="menuState == 2"></agents>
                <registry v-if="menuState == 3"></registry>
                <statistic v-if="menuState == 4"></statistic>
                <counts v-if="menuState == 5"></counts>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations} from "vuex";
import shares from "./includes/home/shares.vue";
import subagents from "./includes/home/subagents.vue";
import profile from "./includes/home/profile.vue";
import profileWidget from "./includes/widgets/profile.vue";

import adminmain from "./includes/admin/adminmain.vue";
import registry from "./includes/admin/registry.vue";
import agents from "./includes/admin/agents.vue";
import statistic from "./includes/admin/statistic.vue";
import counts from "./includes/admin/counts.vue";

export default {
  data() {
    return {
      menuState: 1
    };
  },
  computed:
  Object.assign(
    mapState([]),
    mapGetters([
      'isAdmin',
      'isUser'
    ]),
    {
        rotateIcon() {
        return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
        },
        menuitemClasses() {
        return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
        }
    }
  ),
  created(){/*
    axios('Admin/FetchAll')
    .then(res=>{
      console.log('HOME>',res)
      res.data[0].id;
    })
    .catch(err=>{
      console.warn('HOME ERR=>',err);
    })*/
  },
  methods: {
    ...mapMutations([
      'collapseSubmenu'
    ]),
    collapsedSider() {
      console.log("pressed");
      // this.$refs.side1.toggleCollapse();
      this.collapseSubmenu();
    },
    setMenu(i) {
      console.log();
      this.menuState = i;
      console.log(this.menuState);
    }
  },
  components: {
    shares,
    subagents,
    profile,
    profileWidget,
    adminmain,
    registry,
    agents,
    statistic,
    counts
  }
};
</script>


<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}

.menu-icon {
  margin: 17px 20px;
}
.content-section {
  margin: 20px;
  background: #fff;
  min-height: 260px;
}
</style>
