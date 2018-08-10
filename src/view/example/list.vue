<template>
  <div class="container">
    <div class="mt10">
      <div class="title">v-for 列表渲染</div>
      <div>
        <ul>
          <li v-for="(item,index) in memberList" :key="item.custId" @click="memberDetail(index)">
            <span>{{index}} --</span>
            <span>{{item.custName}} --</span>
            <span>{{item.age}} --</span>
            <span>{{item.joinTime}} </span>
          </li>
        </ul>
      </div>
    </div>

    <div>
      <div class="title">template v-for 列表渲染</div>
      <div>
        <template v-for="(item,index) in list">
          <p :key="index">{{item.content}}</p>
          <img :key="index" :src="item.img" alt=""/>
          <p :key="index" class="divider"></p>
        </template>
      </div>
    </div>

    <div>
      <div class="title">Object v-for 列表渲染</div>
      <table>
        <template>
          <tr>
            <td v-for="(value,key,index) in detail" :key="index">{{key}}</td>
          </tr>
          <tr>
            <td v-for="(value,key,index) in detail" :key="index">{{value}}</td>
          </tr>
        </template>
      </table>
    </div>

    <div>
      <div class="title">整数 v-for </div>
      <span v-for="(n,index) in 10" :key="index">{{n}}</span>
    </div>

    <div>
      <div class="title">组件 v-for </div>
      <my-article v-for="item in artList" :key="item.good" :art-list="item" />
      <button @click="push">添加文章</button>
      <button @click='pop'>尾部去除一篇文章</button>
      <button @click='unshift'>在头部加入一条数据</button>
      <button @click='shift'>在头部去除一条数据</button>
      <button @click='reverse'>把所有数据进行反转</button>
      <button @click='clear'>清除所有数据</button>
    </div>

    <div>
      <div class="title">数组非变异 </div>
      <ul>
        <li v-for = " (item,index) in list1" :key="index" v-text='`${item} - ${index} `'></li>
      </ul>
      <button @click="filter">数组进行取余过滤</button>
      <button @click="concat">数组进行合并</button>
      <button @click="map">数组印射</button>
      <button @click="slice">返回截取后的数组</button>
    </div>
  </div>
</template>

<script>
import myArticle from '../../components/example/myArticle';

export default {
  name: 'list',
  components: {
    myArticle,
  },
  data() {
    return {
      memberList: [],
      list: [
        { content: 'test1', img: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1301074775,1382810875&fm=80&w=179&h=119&img.JPEG' },
        { content: 'test2', img: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1312092207,1376369244&fm=80&w=179&h=119&img.JPEG' },
      ],
      detail: {},
      artList: [],
      list1: [1, 2, 3, 4],
      list2: [7, 8, 9, 0],
    };
  },
  created() {
    this.memberList = [
      { custName: 'Jim', age: 20, joinTime: '2018-01-01', custId: 1 },
      { custName: 'Tom', age: 21, joinTime: '2018-02-01', custId: 2 },
      { custName: 'Johnny', age: 22, joinTime: '2018-03-01', custId: 3 },
      { custName: 'Leo', age: 23, joinTime: '2018-04-01', custId: 4 },
      { custName: 'May', age: 24, joinTime: '2018-05-01', custId: 5 },
    ];

    this.detail = {
      name: 'Tom',
      age: 20,
      address: '福建省福州市',
      tel: '13290121234',
    };

    this.artList = [
      { name: 'ziksang1', startTime: '1小时前', content: 'aaaaaaaaa', good: 1 },
      { name: 'ziksang2', startTime: '2小时前', content: 'bbbbbbbbb', good: 2 },
      { name: 'ziksang3', startTime: '3小时前', content: 'ccccccccc', good: 3 },
      { name: 'ziksang4', startTime: '4小时前', content: 'ddddddddd', good: 4 },

    ];
  },
  methods: {
    memberDetail(index) {
      // console.log(`custId ${this.memberList[index].custId}`);
      sessionStorage.custId = this.memberList[index].custId;
    },
    push() {
      this.artList.push({
        name: 'ziksang5',
        startTime: '5小时前',
        content: 'eeeeeeeeee',
        good: 5,
      });
    },
    pop() {
      this.artList.pop();
    },
    shift() {
      this.artList.shift();
    },
    unshift() {
      this.artList.unshift({
        name: 'ziksang3',
        age: 40,
      });
    },
    reverse() {
      this.artList.reverse();
    },
    clear() {
      this.artList = [];
    },
    filter() {
      this.list1 = this.list1.filter(item => item % 2);
    },
    concat() {
      // 以上两种方法都可以
      // 1.第一种是es6的解构操作符
      // 2.第二种是传统的数组合并
      this.list1 = [...this.list1, ...this.list2];
      // this.list = this.list.concat(this.list2)
    },
    map() {
      this.list1 = this.list1.map(item => `${item} map`);
    },
    slice() {
      this.list1 = this.list1.slice(2);
    },
  },
};

/**
 * 1、created()： 方法一个生命周期钩子函数，就是一个vue实例被生成后调用这个函数。
 * 一个vue实例被生成后还要绑定到某个html元素上，之后还要进行编译，然后再插入到document中。
 * 每一个阶段都会有一个钩子函数，方便开发者在不同阶段处理不同逻辑。
 * 一般可以在created函数中调用ajax获取页面初始化所需的数据。
 */
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
