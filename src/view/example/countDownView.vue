<template>
  <div>
    <count-down :start="start" @countDown="start=false" @click="startDown"/>
  </div>
</template>

<script>
import CountDowm from '../../components/example/CountDown';

export default {
  name: 'countDownView',
  components: {
    CountDowm,
  },
  data() {
    return {
      start: false,
    };
  },
  methods: {
    // 开始倒计时
    startDown() {
      this.start = true;
    },
  },

};
</script>

<style scoped>

</style>
