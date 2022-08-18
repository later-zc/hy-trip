import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config.js';
import useLoadStore from '@/stores/modules/load.js';


const loadStore = useLoadStore()

class HYRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.request.use(config => {
      loadStore.isLoading = true
      return config
    }, err => {
      return err
    })
    
    this.instance.interceptors.response.use(res => {
      loadStore.isLoading = false
      return res
    }, err => {
      loadStore.isLoading = false
      return err
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({ ...config, method: "post" })
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)


