import hyRequest from '../request/index'

export function getCityAll() {
  return hyRequest.get({
    url: '/city/all'
  })
}