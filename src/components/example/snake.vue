<template>
  <div class='snake' :style="{
        'border-top-color' : spinnerColor,
        'border-left-color' : spinnerColor,
        'border-bottom-color' : spinnerColor,
        'height' : spinnerSize,
        'width' : spinnerSize
    }">
  </div>
</template>

<script>
export default {
  name: 'snake',
  computed: {
    spinnerColor() {
      return this.color || this.$parent.color || 'red';
    },

    spinnerSize() {
      return `${this.size || this.$parent.size || 0.44}rem`;
    },
  },
  props: {
    color: String,
    size: Number,
  },
};
</script>

<style scoped>
  .snake {
    animation : spinner-rotate 1s infinite linear;
    border : 4px solid transparent;
    border-radius : 50%;
  }
  @keyframes spinner-rotate {
    0% {
      transform : rotate(0deg);
      transform : rotate(360deg)
    }
  }
</style>
