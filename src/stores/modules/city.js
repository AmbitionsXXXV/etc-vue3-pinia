import { getCityAll } from "@/services"
import { defineStore } from "pinia"

const useCityStore = defineStore("city", {
    state: () => ({
        allCities: {},
        currentCity: { cityName: "成都" },
    }),
    actions: {
        async fetchAllCitiesData() {
            const res = await getCityAll()
            this.allCities = res.data
        },
    },
})

export default useCityStore
