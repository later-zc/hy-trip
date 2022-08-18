import { defineStore } from "pinia";

const loadStoreOptions = {
  state: () => ({
    isLoading: false
  })
}

const useLoadStore = defineStore('load', loadStoreOptions)

export default useLoadStore