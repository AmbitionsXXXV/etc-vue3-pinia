<template>
    <div class="tab-bar">
        <van-tabbar v-model="currentIndex" active-color="#ff9854">
            <template v-for="(item, index) in tabBarData">
                <van-tabbar-item :to="item.path">
                    <template #default>
                        <span>{{ item.text }}</span>
                    </template>
                    <template #icon>
                        <img
                            v-if="currentIndex !== index"
                            :src="getAssetURL(item.image)"
                            alt=""
                        />
                        <img v-else :src="getAssetURL(item.imageActive)" alt="" />
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>

        <!-- <template v-for="(item, index) in tabBarData">
            <div
                class="tab-bar-item"
                :class="{ active: currentIndex === index }"
                @click="itemClick(index, item)"
            >
                <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="" />
                <img v-else :src="getAssetURL(item.imageActive)" alt="" />
                <span class="text">{{ item.text }}</span>
            </div>
        </template> -->
    </div>
</template>

<script setup>
import tabBarData from "@/assets/data/tabbar"
import { getAssetURL } from "@/utils/load_assets"
import { ref } from "vue"

const currentIndex = ref(0)
</script>

<style lang="less" scoped>
.tab-bar {
    img {
        width: 30px;
    }

    // position: fixed;
    // bottom: 0;
    // left: 0;
    // right: 0;
    // height: 50px;
    // display: flex;
    // border-top: 1px solid #f3f3f3;

    // .tab-bar-item {
    //     flex: 1;
    //     display: flex;
    //     flex-direction: column;
    //     justify-content: center;
    //     align-items: center;

    //     &.active {
    //         color: var(--primary-color);
    //     }

    //     img {
    //         width: 34px;
    //     }

    //     .text {
    //         font-size: 12px;
    //         margin-top: 2px;
    //     }
    // }
}
</style>
