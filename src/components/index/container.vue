<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in resultsData[kind]" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.subTitle}}</div>
            <!-- <div class="price-info" v-if="item.rentNum && item.price_info.current_price">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价¥{{item.price_info.old_price}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
            </div> -->
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price}}</span>
                <span class="units"> /人均</span>
              </span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  props: ["nav"],
  data() {
    return {
      kind: "all",
      resultsData: {

      },
      list: [
        {
          image:
            "//p0.meituan.net/msmerchant/698afe9b6fffb82f429e61560423b1463429881.jpg@460w_260h_1e_1c",
          title: "CAKEBOSS蛋糕老板（王府井apm店）",
          sub_title: "酷炫黑巧乳酪蛋糕1个，约2.8磅，圆形",
          price_info: {
            current_price: 0,
            old_price: 499,
            avg_price: null,
            units: null
          },
          rentNum: 0,
          address: "王府井/东单"
        },
        {
          image:
            "//p0.meituan.net/msmerchant/698afe9b6fffb82f429e61560423b1463429881.jpg@460w_260h_1e_1c",
          title: "CAKEBOSS蛋糕老板（王府井apm店）",
          sub_title: "酷炫黑巧乳酪蛋糕1个，约2.8磅，圆形",
          price_info: {
            current_price: 299,
            old_price: 499,
            avg_price: null,
            units: null
          },
          rentNum: 19,
          address: "王府井/东单"
        }
      ]
    };
  },
  created (){
    api.resultsByKeywords().then(res => {
      console.log(res)
      this.resultsData = res.data.data
    })
  },
  methods: {
    over(e) {
      let dom = e.target;
      // 都是大写
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      // 发送ajax请求获取数据
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>