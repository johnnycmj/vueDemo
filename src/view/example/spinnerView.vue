<template>
  <div>
    <snake></snake>
    <double-bounce></double-bounce>
    <div>
      <my-spinner :type='1' color='#000' ></my-spinner>
      <my-spinner :type='0' color='#000' ></my-spinner>
    </div>
  </div>

</template>

<script>
import snake from '../../components/example/snake';
import doubleBounce from '../../components/example/doubleBounce';
import MySpinner from '../../components/example/Spinner';

export default {
  name: 'spinnerView',
  components: {
    snake,
    doubleBounce,
    MySpinner,
  },
};
</script>

<style scoped>

</style>
