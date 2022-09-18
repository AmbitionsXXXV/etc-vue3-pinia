<template>
    <div class="search-box">
        <div class="location">
            <div class="city" @click="cityClick">成都</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

const cityClick = () => {
    router.push("/city")
}

const positionClick = () => {
    navigator.geolocation.getCurrentPosition(
        (res) => {
            console.log("获取位置成功：", res)
        },
        (err) => {
            console.log("获取失败：", err)
        }
    )
}
</script>

<style lang="less" scoped>
.location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

    .city {
        flex: 1;
        color: #333;
        font-size: 15px;
    }

    .position {
        width: 74px;
        display: flex;
        align-items: center;

        .text {
            position: relative;
            top: 1px;
            color: #666;
            font-size: 12px;
        }

        img {
            margin-left: 5px;
            width: 18px;
            height: 18px;
        }
    }
}
</style>
