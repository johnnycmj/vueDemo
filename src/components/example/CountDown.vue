<template>
  <div>
    <button @click="myClick">{{ time | filterTime}}</button>
  </div>
</template>

<script>
let isRest = false;
export default {
  name: 'CountDown',
  props: {
    start: Boolean,
  },
  data() {
    return {
      time: '获取验证码',
    };
  },
  filters: {
    // 过滤，用来实时处理time的时间变化
    filterTime(value) {
      if (!value) return '获取验证码';
      if (!isNaN(value)) {
        if (isRest === true) {
          return `重新发送${value}`;
        }
        return `${value}s`;
      }
      return value;
    },
  },
  watch: {
    // 监听 start参数
    start(value) {
      if (value === true) {
        // 启动倒计时
        this.startTime();
      }
    },
  },
  methods: {
    startTime() {
      // 处理倒计时
      this.time = 60;
      const timeT = setInterval(() => {
        this.time -= 1;
        // 当时间减少为0时，停止倒计，重置
        if (this.time === 0) {
          isRest = true;
          // 取消时间
          clearInterval(timeT);
          // 设置time
          this.time = '获取验证码';
          // 触发事件，通知父控件重新设置
          this.$emit('countDown');
        }
      }, 1000);
    },
    // 子组件自己的click事件,接收父组件的click事件
    myClick() {
      console.log('--------');
      // 接收到父组件的click事件，然后触发父组件的click事件
      this.$emit('click');
    },
  },
};
</script>

<style scoped>

</style>
