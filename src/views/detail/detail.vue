<template>
    <div class="detail top-page">
        <van-nav-bar
            title="房屋详情"
            left-text="旅途"
            left-arrow
            @click-left="onClickLeft"
        />
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()
// 监听返回按钮的点击
const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped>
.tabs {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
        width: 123px;
    }

    .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
    }
}
</style>
