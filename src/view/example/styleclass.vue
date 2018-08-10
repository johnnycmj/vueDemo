<template>
  <div>
    <ul>
      <li v-for='(item,index) in message' :key="index" @click='item.isred = !item.isred'
          :class='{ red : item.isred }'>{{item.name}}</li>
    </ul>
    <button :class="allchoose">全选</button>
  </div>
</template>

<script>
export default {
  name: 'styleclass',
  data() {
    return {
      message: [],
    };
  },
  created() {
    const data = [
      { name: '混无霹雳手帅不？' },
      { name: '混无霹雳手是老司机不？' },
      { name: '混无霹雳手分享的好不好？' },
    ];
    // for (const i of data) {
    //   this.$set(i, 'isred', false);
    // }
    data.forEach(i => this.$set(i, 'isred', false));
    this.message = data;
  },
  computed: {
    allchoose() {
      for (const i of this.message) {
        if (i.isred === false) {
          return { yellow: false };
        }
      }
      return { yellow: true };
    },
  },
};
</script>

<style scoped>
  .red{
    background:red;
  }
  button{
    background:gray;
  }
  .yellow {
    background:yellow
  }
</style>
