<template>
  <div class="container">
    <ul class="indexList mt20">
      <li v-for='data in list' :key="data.title" @click='$router.push(data.push)'>
        <b>{{data.title}}</b>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'main',
  data() {
    return {
      list: [
        {
          title: '模板语法',
          push: '/example/index',
        },
        {
          title: '列表渲染',
          push: '/example/list',
        },
        {
          title: '计算属性',
          push: '/example/calculate',
        },
        {
          title: '条件渲染',
          push: '/example/rendering',
        },
        {
          title: 'class与style绑定',
          push: '/example/class',
        },
        {
          title: '方法demo',
          push: '/example/email',
        },
        {
          title: '短信倒计时组件',
          push: '/example/countdown',
        },
        {
          title: 'Spinner 组件',
          push: '/example/spinner',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
