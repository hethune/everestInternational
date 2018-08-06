import axios from 'axios'
import router from './router'
import store from './store'
import { is_weixin } from  './utils/utils'
const BASE_URL = 'https://wechat.fangpinduo.com'

const SUCCESS_CODE = 200
const NEED_AUTH_CODE = 401

// global interceptor for the response

axios.interceptors.response.use((response) => {
  if (response.status === SUCCESS_CODE) {
    return response.data
  } else {
    return Promise.reject({
      errorCode: response.status,
      errorMsg: response.data
    })
  }
}, function (error) {
  if (error.response) { // if it's an error response
    // check if the Vue-resource Response is an invalid token response
    if (error.response.status === NEED_AUTH_CODE) {
      
      // logout first
      store.commit('CLEAR_ALL_DATA')

      // redirect to login page
      if (!is_weixin()) {
        router.push({
          name: 'login'
        })
      } else {
        router.push({
          name: 'home'
        })
      }
    }

    return Promise.reject({
      errorCode: error.response.status,
      errorMsg: error.response.data.message
    })
  } else {
    return Promise.reject(error)
  }
})

export default {
  post: function (requestSurfix, params, callbacks, options) {
    return this.request('POST', requestSurfix, params, callbacks, options)
  },

  get: function (requestSurfix, params, callbacks, options) {
    return this.request('GET', requestSurfix, params, callbacks, options)
  },

  request: function (requestMethod, requestSurfix, params, callbacks, options) {
    const {token} = params
    /**
     * 判断是否访问第三方接口数据(非BASE_URL下的接口)，如果是一个完成的地址接口(包含http/https),就当做第三方接口
     */
    const thirdApi = requestSurfix.indexOf('http') != -1 ? true : false
    /************************************************************************/
    let config = {
      method: requestMethod,
      url: thirdApi ? requestSurfix : BASE_URL + requestSurfix,
      data: params,
      headers: {
        'Authorization': token ? token : store.state.auth.accessToken
      }
    }
    if (requestMethod == 'GET') {
      config = {
        method: requestMethod,
        url: thirdApi ? requestSurfix : BASE_URL + requestSurfix,
        params,
        headers: {
          'Authorization': token ? token : store.state.auth.accessToken
        }
      }
    }
    return axios(config).then((response) => {
      if (callbacks.success) {
        callbacks.success(response)
      }
    }).catch((errorResponse) => {
      if (callbacks.error) {
        callbacks.error(errorResponse)
      }
    })

    // handle options: loadingProgressEnabled, loadingMaskEnabled
  }
}
