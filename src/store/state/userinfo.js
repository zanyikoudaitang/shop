import {getLocalStorage,setLocalStorage,delLocalStorage} from '@/utils/auth.js'

const state = {
  userInfo:getLocalStorage(),
};
const mutations = {
    setUserInfo(state, userInfo) {
        state.userInfo = userInfo;
        setLocalStorage(userInfo)
    },
    delUserInfo(state) {
        state.userInfo = '';
        delLocalStorage()
    }
}

export default{
    state,
    mutations
}
