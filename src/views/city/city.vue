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
        <van-tabs v-model:active="tabActive">
            <van-tab title="国内·港澳台"></van-tab>
            <van-tab title="海外"></van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

// 搜索栏功能
const searchValue = ref("")
const cancelClick = () => {
    router.back()
}

// tab的切换
const tabActive = ref()
</script>

<style lang="less" scoped></style>
