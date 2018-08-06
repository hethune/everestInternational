export const formatNewsDate = timestampInSec => {
  var postDate = new Date(timestampInSec * 1000);
  var today = new Date().getDate();

  var offsetDays = parseInt((new Date().getTime() - timestampInSec * 1000) / 86400000);

  var month = postDate.getMonth() + 1;
  var day = postDate.getDate();
  var result, offset;
  offset = Math.abs(today - day);
  if (offsetDays < 3) {
    if (offsetDays === 0) {
      result = "今天";
    } else if (offsetDays === 1) {
      result = "昨天";
    } else if (offsetDays === 2) {
      result = "2天前";
    }
  } else {
    result = month + "月" + day + "日";
  }

  return result;
}

export const formatMYDate = timestampInSec => {
  var postDate = new Date(timestampInSec * 1000);
  var year = postDate.getFullYear();
  var month = postDate.getMonth() + 1;
  return month+'月'+year
}

export const formatHouseDate = timestampInSec => {
  var postDate = new Date(timestampInSec * 1000);
  var year = postDate.getFullYear();
  var month = postDate.getMonth() + 1;
  var day = postDate.getDate();

  return year + "-" + month + "-" + day;
}

export const formatValidDate = timestampInSec => {
  var postDate = new Date(timestampInSec * 1000);
  var year = postDate.getFullYear();
  var month = postDate.getMonth() + 1 > 9 ? postDate.getMonth() + 1 : '0' + (postDate.getMonth() + 1);
  var day = postDate.getDate() > 9 ? postDate.getDate() : '0' + postDate.getDate();

  return year + "." + month + "." + day;
}

export const toThousandSep = value => {
  return value ? Number.parseFloat(value).toLocaleString('en-US') : "0"
}

export const toThousandFix = (num, dot=2) => {
  num = Number.parseFloat(Math.abs(num)).toFixed(dot)
  var str=num.toString();
  //n为小数部分
  var n=str.slice(str.lastIndexOf('.'))
  if(n.indexOf('.')==-1){
    n="";
  }
  //str为整数部分
  var str=parseInt(num).toString();
  var list = str.split("").reverse();
  for (var i = 0; i < list.length; i++) {
  if (i % 4== 3) {
  list.splice(i, 0, ",");
  }
  }
  return list.reverse().join("")+n;
  // return value ? Number.parseFloat(Number(value).toFixed(2)).toLocaleString('en-US') : "0"
}

export const toThousandPrt = value => {
  return value ? (value * 100).toFixed(2) : "0"
}

export const uuid = () => {
  const tmSp = localStorage.getItem('vip-timestamp')
  if (tmSp) {
    return tmSp
  } else {
    const s = []
    const hexDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 62), 1)
    }
    s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = '-'
    const tmSp = s.join('')
    localStorage.setItem('vip-timestamp', tmSp)
    return tmSp
  }
}

export const platForm = () => {
  return window.navigator.userAgent
}

export const is_weixin = () => {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) == "micromessenger") {
    return true;
  } else {
    return false;
  }
}     

export const detectmob = () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

export const getSearchCode = () => {
  let wechatCode = {};
  if (window.location.search.indexOf('code=') != -1) {
    wechatCode['code'] = window.location.search.match(/\Wcode=(\S*?)&/)[1]
  }
  if (window.location.search.indexOf('state=') != -1) {
    wechatCode['state'] = window.location.search.match(/\Wstate=(\w)+/gi)[0].split('=')[1];
    wechatCode['from'] = 'wechat_service'
  }
  return JSON.stringify(wechatCode) === '{}' ? null : wechatCode;
}
