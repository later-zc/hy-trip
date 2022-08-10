import { getCityAll } from "@/service";
import { defineStore } from "pinia";

const cityStoreOptions = {
  state: () => ({
    allCity: {},
    curCity: {
      cityName: '深圳'
    }
  }),
  getters: {

  },
  actions: {
    async fetchAllCityData() {
      const res = await getCityAll()
      this.allCity = res.data
    }
  }
}

const useCityStore = defineStore('city', cityStoreOptions)

export default useCityStore