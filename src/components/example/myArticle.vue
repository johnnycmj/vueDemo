<template>
  <div>
    <p>{{artList.name}}</p>
    <p>{{artList.startTime}}</p>
    <p>{{artList.content}}</p>
    <p>{{artList.good}}</p>
    <p class="divider"></p>
  </div>
</template>

<script>
export default {
  name: 'MyArticle',
  props: ['artList'],
};
</script>

<style scoped>
  .divider {
    width: 100%;
    height: 1px;
    background: black;
  }
</style>
