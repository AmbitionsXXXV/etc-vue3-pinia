<template>
    <div class="city top-page">
        <!-- 1.搜索框 -->
        <van-search
            v-model="searchValue"
            shape="round"
            placeholder="请输入关键词"
            show-action
            @cancel="cancelClick"
        />

        <!-- 2.城市Tab栏 -->
        <van-tabs v-model:active="tabActive" color="#ff9854">
            <template v-for="(value, key, index) in allCities" :key="key">
                <van-tab :title="value.title" :name="key"></van-tab>
            </template>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { storeToRefs } from "pinia"
import { useRouter } from "vue-router"
import useCityStore from "@/stores/modules/city"

const router = useRouter()

// 搜索栏功能
const searchValue = ref("")
const cancelClick = () => {
    router.back()
}

// tab的切换
const tabActive = ref()

/**
 * 这个位置发送网络请求有两个缺点:
 *   1.如果网络请求太多, 那么页面组件中就包含大量的对于网络请求和数据的处理逻辑
 *   2.如果页面封装了很多的子组件, 子组件需要这些数据, 我们必须一步步将数据传递过去(props)
 */
// 网络请求:请求城市的数据
// const allCity = ref({})
// getCityAll().then((res) => {
//     allCity.value = res.data
// })

// 从Store 中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs(cityStore)
</script>

<style lang="less" scoped>
.city {
    // --van-tabs-line-height: 30px;

    // top固定定位
    // .top {
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   right: 0;
    // }

    // .content {
    //   margin-top: 98px;
    // }

    .top {
        position: relative;
        z-index: 9;
    }

    // 布局滚动
    .content {
        height: calc(100vh - 98px);
        overflow-y: auto;
    }
}
</style>
