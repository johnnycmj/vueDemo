<template>
  <div>
    <h1 v-if="result == 'No'">申请参与</h1>
    <h1 v-else-if="result == 'Yes'">取消参与</h1>

    <div>
      <div class="title">v-for template</div>
      <div>
        <div v-for="(item,index) in insurance" :key="index">
            <template v-if="nowTime < item.endtime">
              <p>{{item.code}}</p>
              <p>{{item.name}}</p>
              <p>{{item.tel}}</p>
            </template>
          <template v-else-if="nowTime > item.endtime">
              <button @click="item.arrow = !item.arrow">按钮</button>
              <p>{{item.code}}</p>
              <p v-show="item.arrow == true">{{item.name}}</p>
              <p v-show="item.arrow == true">{{item.tel}}</p>
              <hr />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rendering',
  data() {
    return {
      result: '',
      insurance: [],
      nowTime: '',
    };
  },
  created() {
    setTimeout(() => {
      this.result = 'No';
    }, 3000);

    const myDate = new Date();
    const year = myDate.getFullYear(); // 获取完整的年份(4位,1970-????)
    let month = myDate.getMonth() + 1; // 获取当前月份(0-11,0代表1月)
    let day = myDate.getDate(); // 获取当前日(1-31)
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    this.nowTime = `${year}-${month}-${day}`;

    const insurance = [
      { endtime: '2017-02-01', code: '111111111', name: 'ziksang', tel: '1000000000', arrow: false },
      { endtime: '2017-02-03', code: '222222222', name: 'ziksang2', tel: '2000000000', arrow: false },
      { endtime: '2018-09-10', code: '333333333', name: 'ziksang3', tel: '3000000000', arrow: false },
      { endtime: '2999-02-01', code: '444444444', name: 'ziksang4', tel: '4000000000', arrow: false },
    ];
    this.insurance = insurance;
  },
};
</script>

<style scoped>
  .title{
    background-color: #9ca0a9;
  }
</style>
