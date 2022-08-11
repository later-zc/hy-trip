import { defineStore } from "pinia";
import { getCityAll } from "@/service";

const cityStoreOptions = {
  state: () => ({
    allCity: {},
    curCity: {
      cityName: '深圳'
    }
  }),
  actions: {
    async fetchAllCityData() {
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
}

const useCityStore = defineStore('city', cityStoreOptions)

export default useCityStore