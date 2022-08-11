import { defineStore } from 'pinia';
import { getHotSuggests, getCategories, getHouseList } from '@/service';

const homeStoreOptions = {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    curPagination: 1
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategories() {
      const res = await getCategories()
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await getHouseList(this.curPagination)
      this.houseList.push(...res.data)
    }
  }
}

const useHomeStore = defineStore('home', homeStoreOptions)

export default useHomeStore