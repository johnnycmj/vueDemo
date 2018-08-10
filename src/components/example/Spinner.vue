<template>
  <comment :is="spinner"></comment>
</template>

<script>
const spinnerSnake = require('./snake.vue');
const spinnerDoubleBounce = require('./doubleBounce.vue');

const SPINNERS = [
  'snake',
  'doubleBounce',
];
const parseSpinner = function parseSpinner(index) {
  let n = index;
  if (Object.prototype.toString.call(n) === '[object Number]') {
    if (n >= SPINNERS.length) {
      console.warn(`'${n}' spinner not found, use the default spinner.`);
      n = 0; // 第二段
    }
    return SPINNERS[index];
  }
  if (SPINNERS.indexOf(n) === -1) {
    console.warn(`'${n}' spinner not found, use the default spinner.`);
    n = SPINNERS[0]; // 第三段
  }
  return n;
};
export default {
  name: 'Spinner',
  computed: {
    spinner() {
      return parseSpinner(this.type);
    }, // 第四段
  },
  components: { // 第五段
    SpinnerSnake: spinnerSnake,
    SpinnerDoubleBounce: spinnerDoubleBounce,
  },
  props: {
    type: {
      default: 0, // 第六段
    },
    size: {
      type: Number,
      default: 0.6,
    },
    color: {
      type: String,
      default: 'red',
    },
  },
};
</script>

<style scoped>

</style>
