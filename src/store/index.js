import { createStore } from 'vuex'
import getters from '@/store/getters.js'
import userInfo from '@/store/state/userinfo'


export default createStore({
  // // 全局状态初始
  // state: {
  // },
  // // vuex计算属性
  // getters: {
  // },
  // // 更新状态的方法，commit
  // mutations: {
  // },
  // // 异步操作，可以返回一个promise
  // actions: {
  // },
  // // 当数据比较多时，分类模块
  getters,
  modules: {
    userInfo,
  }
})
