<template>

<div>
    <span class="name">省份选择</span>
    <m-select :list="provinceList" title="省份" :value="province" 
    :showWrapperActive="provinceActive"
    @change_active="changeProvinceActive"
    @change="changeProvince"
    exClass="province"
    ></m-select>

    <m-select :list="cityList" title="城市" :value="city" 
    :showWrapperActive="cityActive"
    @change_active="changeCityActive"
    @change="changeCity"
    :disabled="cityDisabled"
    exClass="city"
    ></m-select>

    <span>直接搜索</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="(item, index) in searchList" :key="item + '_' + index" :label="item" :value="item"></el-option>
    </el-select>
</div>
</template>

<script>
import api from '@/api/index.js'
import MSelect from './select.vue'
export default {
    data(){
        return {
            provinceList : ['山东', '甘肃','黑龙江','浙江','沈阳'],
            province: '省份',
            cityList: ['哈尔滨', '佳木斯', '牡丹江', '鹤岗'],
            city: '城市',
            provinceActive: false,
            cityActive: false,
            searchList: ['哈尔滨', '佳木斯', '牡丹江', '鹤岗','哈尔滨', '佳木斯', '牡丹江', '鹤岗'],
            searchWord: '',
            loading: false,
            cityDisabled: true
        }
    },
    created () {
        api.getProvinceList().then(res => {
            this.provinceList = res.data.data.map(item => {
                item.name = item.provinceName;
                return item;
            })
        })
    },
    methods: {
        changeProvinceActive(flag){
            this.provinceActive = flag;
            if(flag){
                this.cityActive = false;
            }
        },
        changeCityActive(flag){
            this.cityActive = flag;
            if(flag){
                this.provinceActive = false;
            }
        },
        changeProvince(item){
            this.cityDisabled = false;
            this.province = item.name;
            this.cityList = item.cityInfoList;
        },
        changeCity(item){
            this.city = item.name;
            this.$store.dispatch('setPosition', item);
            this.$router.push({name: 'index'});
        },
        // 这里的e就是输入的搜索关键词
        remoteMethod(e){
            // 请求后端接口
        }
    },
    components: {
        MSelect
    }
}
</script>

<style lang="scss">
@import "@/assets/css/changeCity/iselect.scss";

</style>
