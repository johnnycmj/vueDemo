<template>
  <div class="container">
    <mt-header fixed title="我的物品">
      <router-link to="/" slot="left">
        <mt-button icon="back" >返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <div>
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>

      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>


  </div>

</template>

<script>
import Vue from 'vue';
import {
  Header,
  Navbar,
  TabItem,
  TabContainer,
  TabContainerItem,
  Button,
} from 'mint-ui';


Vue.component(Header.name, Header);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Button.name, Button);


export default {
  name: 'home',
  data() {
    return {
      selected: '1',
    };
  },
};
</script>

<style scoped>
    .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .page-part {}
</style>
