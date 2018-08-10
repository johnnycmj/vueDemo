<template>
  <button @click="onClick">按钮</button>
</template>

<script>
export default {
  name: 'myEventDemo',
  data() {
    return {
      time2: 0,
    };
  },
  props: ['count'],
  methods: {
    onClick() {
      this.time2 += 1;
      this.$emit('onClick', this.time2);
    },
  },
  watch: {
    count(value) {
      console.log(`---${value}`);
      this.time2 = value;
    },
  },
};
</script>

<style scoped>

</style>
