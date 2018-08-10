<template>
  <div class="container">
    <div>
      <div class="title">computed</div>
      <textarea v-model="content" v-bind:maxlength="totalcount" />
      <p>你还可以输入{{reduceCount}}字</p>
    </div>

    <div>
      <div class="title">computed实例</div>
      <h1>比赛时间{{time}}s</h1>
      <h2>直播播报{{result}}</h2>
      <div>
        <p>中国队进球数：{{team.china}}</p>
        <button @click="team.china++">点击中国队进一球</button>
        <p>韩国队进球数：{{team.korea}}</p>
        <button @click="team.korea++">点击韩国队进一球</button>
      </div>
    </div>

    <div>
      <div class="title">watch实例</div>
      <div v-show="show">
        <img src="https://img.alicdn.com/simba/img/TB14sYVQXXXXXc1XXXXSutbFXXX.jpg" alt="">
        <img src="//img.alicdn.com/tfs/TB1iZ6EQXXXXXcsXFXXXXXXXXXX-520-280.jpg_q90_.webp" alt="">
        <img src="https://img.alicdn.com/simba/img/TB1C0dOPXXXXXarapXXSutbFXXX.jpg" alt="">
        <img src="//img.alicdn.com/tfs/TB1iZ6EQXXXXXcsXFXXXXXXXXXX-520-280.jpg_q90_.webp" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'calculate',
  data() {
    return {
      totalcount: 200,
      content: '',
      time: 0,
      team: {
        china: 0,
        korea: 0,
      },
      count: 0,
      show: false,
    };
  },
  computed: {
    reduceCount() {
      return this.totalcount - this.content.length;
    },
    result() {
      if (this.time < 90) {
        if (this.team.china > this.team.korea) {
          return '中国队领先';
        } else if (this.team.china < this.team.korea) {
          return '韩国队领先';
        }
        return '双方僵局';
      }

      if (this.team.china > this.team.korea) {
        return '中国队赢';
      } else if (this.team.china < this.team.korea) {
        return '韩国队赢';
      }
      return '平局';
    },
  },
  created() {
    const t = setInterval(() => {
      this.time += 1;
      if (this.time === 90) {
        clearInterval(t);
      }
    }, 1000);
  },
  mounted() {
    const imgs = document.querySelectorAll('img');
    console.log(imgs);
    Array.from(imgs).forEach((item) => {
      const img = new Image();
      img.onload = () => {
        this.count += 1;
      };
      img.src = item.getAttribute('src');
    });
  },
  watch: {
    count(val, oldval) {
      console.log(`val ${val}`);
      console.log(`oldVal ${oldval}`);
      if (val === 4) {
        this.show = true;
        // 然后可以对后台发送一些ajax操作
      }
    },
  },
};
</script>

<style scoped>
  .title{
    background-color: #9ca0a9;
  }
  .divider {
    width: 100%;
    height: 1px;
    background: black;
  }
</style>
