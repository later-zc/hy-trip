import { defineStore } from "pinia";


const startTimeStamp = +new Date()
const endTimeStamp = startTimeStamp + 24*60*60*1000
const searchStoreOptions = {
  state: () => ({
    startTimeStamp,
    endTimeStamp
  }),
  getters: {

  },
  actions: {
    
  }
}

const useSearchStore = defineStore('search', searchStoreOptions)

export default useSearchStore