<template>
  <div>
    <div>
      <div class="title">1、文本</div>
      <P>hello {{data}}</P>
      <p v-text="'hello' + data"></p>
      <p>{{`hello ${data}`}}</p>
      <p v-text="`hello ${data}`"></p>
      <p v-once>hello once {{data}}</p>
      <button v-on:click="data='ceshi'">改变word的值</button>
    </div>
    <div class="container">
      <div class="title">2、html 显示</div>
      <div v-html="html"></div>
    </div>
    <div class="container">
      <div class="title">3、属性 </div>
      <a v-bind:href='href'>跳转</a>
      <p :id='id'>id</p>
      <img :src="src" alt="图片" class="img"/> <br>
      <button :disabled="disable">按钮</button>
    </div>
    <div class="container">
      <div class="title">4、javaScript 表达式</div>
      <div id="method1">
        <p>{{ 0 > count ? '-':'+'}} {{count + 1}}</p>
        <button @click='count ++'>增加</button>
        <button @click='count --'>减少</button>
      </div>
      <div id="method2">
        <input type="text" v-model="message"/>
        <h1>{{ message.split('').reverse().join('') }}</h1>
      </div>
    </div>
    <div class="container">
      <div class="title">5、过滤器</div>
      <p>{{str | filterA}}</p>
      <!--<p v-for='item in telephone' :key="item">{{item | newtel}}</p>-->
      <div>
        <!--<a v-for='(item,index) in urlList' :key="index"
           :href="item.url | getquery(item.name,item.age)">{{item.url}}</a>-->
        <a v-for='url in urlList' :key="url.name"
           :href='url.url | getquery(url.name,url.age)'>{{url.url}}<br></a>
      </div>
    </div>
    <div>
      <my-button v-on:click.native="buttonClick" />
    </div>
  </div>
</template>

<script>
/* eslint-disable no-alert */

import myButton from '../../components/example/myButton';

export default {
  name: 'index',
  data() {
    return {
      data: 'world',
      html: '<span style="color: red"> 显示红色的字</span>',
      id: 2,
      href: 'http://www.baidu.com',
      src: 'https://cn.vuejs.org/images/logo.png',
      disable: true,
      count: 0,
      message: '',
      str: 'world',
      telephone: [
        10000000000,
        10000000001,
        10000000002,
        10000000003,
        10000000004,
        10000000005,
        10000000006,
        10000000007,
        10000000008,
        10000000009,
        10000000000,
      ],
      urlList: [
        { index: 1, url: 'http://www.baidu.com', name: 'jim', age: 20 },
        { index: 2, url: 'http://www.baidu.com', name: 'tom', age: 30 },
        { index: 3, url: 'http://www.baidu.com', name: 'term', age: 40 },
      ],
    };
  },
  filters: {
    filterA(value) {
      if (!value) {
        return '';
      }
      const v = value.toString();
      return v.charAt(0).toUpperCase() + v.slice(1);
    },
    newtel(value) {
      if (!value) return '';
      // 截取后4位
      let str = value;
      str = str.toString().substr(7, 4);
      str = '*'.repeat(7) + str;
      const endMember = str.substr(-1, 1);
      if (endMember % 2) {
        str += '中奖';
      } else {
        str += '谢谢参与';
      }
      return str;
    },
    getquery(value, name, age) {
      if (!value) return '';
      return `${value}?name=${name}&age=${age}`;
    },
  },
  components: {
    myButton,
  },
  methods: {
    buttonClick() {
      alert('点击');
    },
  },
};
</script>

<style scoped>
  .container{
    margin-top: 10px;
  }
  .title{
    background-color: #9ca0a9;
  }
  .img{
    width: 30px;
    height: 30px;
  }
  #method1{
    margin-top: 10px;
  }
  #method2{
    margin-top: 10px;
  }
</style>
