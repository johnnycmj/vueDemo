<template>
  <div>
    <button @click='demo'>到五的时候取消监听</button>
    <p>{{count1}}</p>
    <button @click='demo2'>只监听一次,传一个参过来</button>
    <p>{{count2}}</p>

    <div>
      <myEventDemo :count = 'time' @onClick='click'></myEventDemo>
      <p>{{time}}</p>
    </div>
  </div>
</template>

<script>
import myEventDemo from '../../components/example/myEventDemo';

export default {
  name: 'email',
  components: {
    myEventDemo,
  },
  data() {
    return {
      count1: 0,
      count2: 0,
      time: 0,
    };
  },
  methods: {
    demo() {
      // emit触发事件,第一个参数是事件名，后面可以带任意参数
      this.$emit('demo');
    },
    demo2() {
      this.$emit('demo2', 10);
    },
    click(value) {
      this.time = value;
    },
  },
  created() {
    // on是监听事件 第一个参数是监听事件名，第二个是一个回调，可接收emit传来的任意参数
    this.$on('demo', () => {
      this.count1 += 1;
      if (this.count1 === 5) {
        // off 是取消监听 只有一个参数，是取消监听的参数名
        this.$off('demo');
      }
    });

    // once 也是监听事件，跟$on不同的是只是监听一次只后不再监听，第二个是一个回调，可接收emit传来的任意参数
    this.$once('demo2', (value) => {
      this.count2 += value;
    });
  },
};
</script>

<style scoped>

</style>
