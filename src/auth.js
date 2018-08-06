import Axios from './axios'
import router from './router'
import store from './store'

/**
 * @var{string} LOGIN_URL The endpoint for logging in. This endpoint should be proxied by Webpack dev server
 *    and maybe nginx in production (cleaner calls and avoids CORS issues).
 */
const LOGIN_URL = '/api/login'

const PHONE_LOGIN_URL = '/api/login_by_code'

const SIGNUP_URL = '/api/create_user'

const RESETPWD_URL = '/api/reset_password'

const WECHATLOGIN_URL ='/api/web/update_info'

const SEND_SMS_URL = '/api/send_mobile_code'

const VERIFY_SMS_URL = '/api/is_phone_verification_code_valid'

const WECHATOAUTH_LOGIN = '/api/web/login'

const WECHATOAUTH_URL = '/api/web/wx_auth'

const POST_EMAIL = ''

/**
* Auth Plugin
*
* (see https://vuejs.org/v2/guide/plugins.html for more info on Vue.js plugins)
*
* Handles login and token authentication using OAuth2.
*/
export default {

  install (Vue, options) {
    Vue.prototype.$auth = Vue.auth = this
  },

  postEmail (email, callbacks) {
    const params = { 'email': email }

    return Axios.post(POST_EMAIL, params, {
      success: function (result) {
        if (result.status && callbacks.success) {
          callbacks.success(result)
        } else if (!result.status && callbacks.error) {
          callbacks.error(result)
        }
      },
      error: function (error) {
        if (callbacks.error) {
          callbacks.error(error)
        }
      }
    })
  },

  sendSMS (phone, countryCode, callbacks) {
    const params = { 'phone': phone, 'country': countryCode }

    return Axios.post(SEND_SMS_URL, params, {
      success: function (result) {
        if (result.status && callbacks.success) {
          callbacks.success(result)
        } else if (!result.status && callbacks.error) {
          callbacks.error(result)
        }
      },
      error: function (error) {
        if (callbacks.error) {
          callbacks.error(error)
        }
      }
    })
  },

  verifySMS (phone, countryCode, verificationCode, callbacks) {
    const params = { 'phone': phone, 'country': countryCode, 'code': verificationCode }

    return Axios.post(VERIFY_SMS_URL, params, {
      success: function (result) {
        if (callbacks.success) {
          callbacks.success(result)
        }
      },
      error: function (error) {
        if (callbacks.error) {
          callbacks.error(error)
        }
      }
    })
  },

  /**
   * Signup
   *
   * @param {Object.<string>} creds The username and password for logging in.
   * @param {string|null} redirect The name of the Route to redirect to.
   * @return {Promise}
   */
  signup (name, email, phone, countryCode, verificationCode, password, enableNotif, callbacks) {
    const that = this
    const params = {
      'name': name,
      'email': email,
      'phone': phone,
      'country': countryCode,
      'code': verificationCode,
      'password': password,
      'subscribe_news': enableNotif
    }

    return Axios.post(SIGNUP_URL, params, {
      success: function (result) {
        if (result.success && callbacks.success) {
          that._storeToken(result)
          callbacks.success(result)
        } else if (!result.success && callbacks.error) {
          callbacks.error(result)
        }
      },
      error: function (error) {
        if (callbacks.error) {
          callbacks.error(error)
        }
      }
    })
  },

  /**
   * Forgot Password
   */

   resetPwd(phone, countryCode, verificationCode, password, callbacks) {
     const that = this
     const params = {
       'phone': phone,
       'country': countryCode,
       'code': verificationCode,
       'password': password
     }

     return Axios.post(RESETPWD_URL, params, {
       success: function (result) {
         console.log(result, 'result');
         if (callbacks.success) {
           that._storeToken(result)
           callbacks.success(result)
         } else  {
           callbacks.error(result)
         }
       },
       error: function (error) {
         if (callbacks.error) {
           callbacks.error(error)
         }
       }
     })
   },


  /**
   * Login
   *
   * @param {Object.<string>} creds The username and password for logging in.
   * @param {string|null} redirect The name of the Route to redirect to.
   * @return {Promise}
   */
  login (username, password, callbacks) {
    const that = this
    const params = { 'username': username, 'password': password }

    return Axios.post(LOGIN_URL, params, {
      success: function (result) {
        if (callbacks.success) {
          that._storeToken(result)
          callbacks.success(result)
        } else {
          callbacks.error(result)
        }
      },
      error: function (error) {
          callbacks.error(error)
      }
    })
  },

  phoneLogin(phone, code, callbacks) {
    const that = this
    const params = {
      'phone': phone,
      'code': code
    }
    return Axios.post(PHONE_LOGIN_URL, params, {
      success: function (result) {
        if (callbacks.success) {
          that._storeToken(result)
          callbacks.success(result)
        } else {
          callbacks.error(result)
        }
      },
      error: function (error) {
        callbacks.error(error)
      }
    })
  },


  wechatLogin(countryCode, phone, verificationCode, token, callbacks) {
    const that = this
    const params = {
      'phone': phone,
      'country': countryCode,
      'code': verificationCode,
      'token': token 
    }

    return Axios.post(WECHATLOGIN_URL, params, {
      success: function (result) {
        if (result.success && callbacks.success) {
          that._storeToken(result)
          callbacks.success(result)
        } else if (!result.success && callbacks.error) {
          callbacks.error(result)
        }
      },
      error: function (error) {
        if (callbacks.error) {
          callbacks.error(error)
        }
      }
    })
  },

  /**
   * 获取微信登录的url
   */

  wechatOauthUrl(redirect) {
    const that = this
    const params = redirect ? {redirect_uri:redirect} : {}
    return Axios.get(WECHATOAUTH_URL, params, {
      success: function (result) {
        location.href = result.url
      },
      error: function (error) {
        console.log(error);
      }
    })
  },

  /**
   * wechat auth login ***
   */

  wechatAuthLogin(params, callbacks) {
    const that = this
    params = params || {}
    return Axios.post(WECHATOAUTH_LOGIN, params, {
      success: function (result) {
        if (result.success && callbacks.success) {
          that._storeToken(result)
          callbacks.success(result)
        } else if (!result.success && callbacks.error) {
          callbacks.error(result)
        }
      },
      error: function (error) {
        if (callbacks.error) {
          callbacks.error(error)
        }
      }
    })
  },

  /**
   * Logout
   *
   * Clear all data in our Vuex store (which resets logged-in status) and redirect back
   * to login form.
   *
   * @return {void}
   */
  logout () {
    store.commit('CLEAR_ALL_DATA')
    router.push({ name: 'login' })
  },

  /**
   * Store tokens
   *
   * Update the Vuex store with the access/refresh tokens received from the response from
   * the Oauth2 server.
   *
   * @private
   * @param {Response} response Vue-resource Response instance from an OAuth2 server.
   *      that contains our tokens.
   * @return {void}
   */
  _storeToken (result) {
    const auth = store.state.auth
    const user = store.state.user

    auth.isLoggedIn = true
    auth.accessToken = result.token

    user.name = result.name
    user.avatar = result.avatar
    user.id = result.user_id
    localStorage.removeItem('redirect')
    store.commit('UPDATE_AUTH', auth)
    store.commit('UPDATE_USER', user)
  }
}
