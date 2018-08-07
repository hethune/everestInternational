import Vue from 'vue'

const BASE_URL = 'https://wechat.fangpinduo.com/api/login'

module.exports = {

  httpPost: function (requestSurfix, params, successCallback, errorCallback, loadingProgressEnabled, loadingMaskEnabled) {
    return Vue.http.post(this.getWeHomeRequestUrl(requestSurfix), params)
      .then((response) => {
        successCallback(response.body)
      })
      .catch((errorResponse) => {
        errorCallback(errorResponse)
      })
  },

  httpGet: function (requestSurfix, params, successCallback, errorCallback, loadingProgressEnabled, loadingMaskEnabled) {
    return Vue.http.get(this.getWeHomeRequestUrl(requestSurfix), params)
      .then((response) => {
        successCallback(esponse.body)
      })
      .catch((errorResponse) => {
        errorCallback(errorResponse)
      })
  },

  getWeHomeRequestUrl: function (requestSurfix) {
    return BASE_URL + requestSurfix
  },

  /**
   * Get the error from a response.
   *
   * @param {Response} response The Vue-resource Response that we will try to get errors from.
   */
  getResponseError: function (response) {
    return response.body['error_description']
      ? response.body.error_description
      : response.statusText
  }
}
