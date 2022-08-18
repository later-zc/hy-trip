import { onMounted, onUnmounted, ref, watch } from 'vue';
import { throttle } from 'underscore';

/**
 * @param {ref} elRef 监听滚动的元素
 * @param {boolean} isWatchReachBottom 是否监听抵达底部
 * @param {callbackFn} reachBottomCb 抵达底部的钩子函数
 * @param {number} _scrollTop 需要监听的y轴滚动距离
 * @param {ref} isShow 控制隐藏或显示的ref标识符
 */
export default function useScroll({ 
  elRef,
  isWatchReachBottom = false, 
  reachBottomCb,
  _scrollTop = 0,
  isShow,
} = {}) {
  let el = window
  const isReachBottom = ref(false) // 是否到达底部
  const scrollTop = ref(0)
  const clientHeight = ref(0)
  const scrollHeight = ref(0)
  const scrollHandler = throttle(() => {
    if (el === window) {
      const htmlEl = document.documentElement
      clientHeight.value = htmlEl.clientHeight
      scrollHeight.value = htmlEl.scrollHeight
      scrollTop.value = Math.ceil(htmlEl.scrollTop)
    } else {
      clientHeight.value = el.clientHeight
      scrollHeight.value = el.scrollHeight
      // 在使用显示比例缩放的系统上，scrollTop可能会提供一个小数 
      // https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollTop
      // console.log('scrollTopL: ', el.scrollTop) // 1759.199951171875 或 1104.800048828125
      scrollTop.value = Math.round(el.scrollTop) // 经测试使用四舍五入，暂时来看获得的结果是欧克的，这玩意偏移数不会太大应该
    }
    // console.log(clientHeight.value, scrollHeight.value)
    if (!isWatchReachBottom) return
    if (scrollTop.value >= scrollHeight.value - clientHeight.value) {
      console.log('到达底部')
      isReachBottom.value = true
    }
  }, 100, { trailing: true})

  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener('scroll', scrollHandler)
  })

  onUnmounted(() => {
    el.removeEventListener('scroll', scrollHandler)
  })

  if (isWatchReachBottom) {
    watch(isReachBottom, (newValue) => {
      console.log('first')
      if (newValue) {
        reachBottomCb&&reachBottomCb().then(() => isReachBottom.value = false)
      }
    })
  }

  if (!isNaN(parseFloat(_scrollTop)) && isShow) {
    watch(scrollTop, (newValue) => {
      isShow.value = newValue >= _scrollTop
    })
  }

  return {
    scrollTop
  }
}