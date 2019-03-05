<template>
<div class="category">
    <dl class="m-category">
        <dt>按拼音首字母选择：</dt>
        <dd v-for="(item, index) in list" :key="index">
            <!-- 跳转到id相同的那一行 -->
                <a :href="'#city-' + item">{{item}}</a>
        </dd>
    </dl>

    <dl class="m-categroy-section" v-for="(item, index) in cityGroup" :key="index" :id="'city-' + index">
        <dt>{{index}}</dt>
        <dd>
            <span v-for="city in item" :key="city.id" @click="changeCity(city)">{{city.name}}</span>
        </dd>
    </dl>
</div>

</template>

<script>
import api from '@/api/index.js'
export default {
    data() {
        return {
            list: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityList: [],
            cityGroup: {},
        }
    },
    created(){
        api.getCityList().then(res => {
            let obj = {};

            res.data.data.forEach((item, index) => {
                if(!obj[item.firstChar.toUpperCase()]) {
                    obj[item.firstChar.toUpperCase()] = [];
                }
                obj[item.firstChar.toUpperCase()].push(item);
            })

            this.cityGroup = obj;
        })
        let data = [{
                'id': 50,
                'name': '武汉',
                'pinyin': 'wuhan',
                'acronym': 'wh',
                'rank': 'AB',
                'firstChar': 'w'
            },
            {
                'id': 2,
                'name': '武汉',
                'pinyin': 'wuhan',
                'acronym': 'wh',
                'rank': 'C',
                'firstChar': 'a'
            },
            {
                'id': 33,
                'name': '武汉',
                'pinyin': 'wuhan',
                'acronym': 'wh',
                'rank': 'CD',
                'firstChar': 'd'
            },
            {
                'id': 4,
                'name': '武汉',
                'pinyin': 'wuhan',
                'acronym': 'wh',
                'rank': 'BH',
                'firstChar': 'w'
            },
            {
                'id': 55,
                'name': '武汉',
                'pinyin': 'wuhan',
                'acronym': 'wh',
                'rank': 'H',
                'firstChar': 'c'
            },
            {
                'id': 6,
                'name': '武汉',
                'pinyin': 'wuhan',
                'acronym': 'wh',
                'rank': 'E',
                'firstChar': 'w'
            }];

    },
    methods: {
        changeCity(item){
            this.$store.dispatch('setPosition', item);
            this.$router.push({name: 'index'});
        }
    }
}
</script>

<style lang="scss">
@import "@/assets/css/changecity/category.scss";
</style>