import Axios from './axios'
import {
  platForm,
  uuid,
  is_weixin
} from './utils/utils'

// global interceptor for the response

export default {
  eventTrack: function (data) {
    data.ua = platForm()
    data.time_stamp = Date.now()
    data.id = uuid()
    data.type='event'
    data.client= is_weixin()? "h5service" : "website"
    if (localStorage.getItem('wehome-everest')) {
      data.token = JSON.parse(localStorage.getItem('wehome-everest'))['auth']['accessToken']
    }
    console.log(data, 'event')
    // 本地开发是防止数据上传
    if(window.location.hostname=='localhost') return;
    Axios.post('/api/user/track', data, {
      success: function (res) {
      },
      error: function (error) {
        console.log(error)
      }
    })
  },
  routeTrack: function (data) {
    const isWeixin = is_weixin()
    data.ua = platForm()
    data.time_stamp = Date.now()
    data.type = 'path'
    data.client = isWeixin ? "h5service" : "website"
    console.log(data,'router')
    if(window.location.hostname=='localhost') return;
    Axios.post('/api/user/track', data, {
      success: function (res) {
      },
      error: function (error) {
        console.log(error)
      }
    })
  }
}
