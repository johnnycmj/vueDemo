// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// 引入'mint-ui Ui
import 'mint-ui/lib/style.css';

// 引入根模板
import Main from './components/main';

// 引入路由配置信息
import router from './router';

// 通过components下的index.js文件导入组件
import components from './components/index';

Vue.config.productionTip = false;


// 定义一个VUE内全局用到的名称（标题）
Vue.prototype.appName = 'Vue开发';

// 添加路由钩子修改每个页面标题
router.beforeEach((to, form, next) => {
  // 如果自定义了标题就取标题，否则拿全局标题
  window.document.title = to.meta.title !== undefined ? (`${to.meta.title}-${Vue.prototype.appName}`) : Vue.prototype.appName;
  next();
});
// 对导入的组件进行全局组件注册
Object.keys(components).forEach((key) => {
  // 组件注册
  Vue.component(key, components[key]);
});


/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(Main),
}).$mount('#app');

// Vue 的$mount()为手动挂载，在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等），
// 之后要手动挂载上。new Vue时，el和$mount并没有本质上的不同。
