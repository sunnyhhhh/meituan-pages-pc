<template>
<div class="page-changeCity">
    <el-row>
        <province></province>
    </el-row>
    <el-row>
        <hot title="热门城市:" :list="hotList"></hot>
    </el-row>
    <el-row>
        <hot title="最近访问:" :list="recentList"></hot>
    </el-row>
    <el-row>
        <category></category>
    </el-row>
</div>

</template>

<script>
import api from '@/api/index.js'
import Province from '@/components/changeCity/province.vue'
import Hot from '@/components/changeCity/hot.vue'
import Category from '@/components/changeCity/category.vue'
export default {
    data () {
        return {
            hotList: ['山东', '甘肃','黑龙江','浙江','沈阳'],
            recentList: ['山东', '甘肃','黑龙江','浙江','沈阳']
        }
    },
    created () {
        api.getHotCity().then(res => {
            this.hotList = res.data.data.map(item => item.name)
        })
        api.getRecentCity().then(res => {
            this.recentList = res.data.data.map(item => item.name)
        })
    },
    components:{
        Province,
        Hot,
        Category
    }
}
</script>

<style>

</style>
