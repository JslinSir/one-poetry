 

 /* 使用方法
 * 在onLoad中使用addNotification注册通知，
 * 在onUnload中使用removeAllNotification或removeNotification移除通知(必须,否则会重复收到通知)
 * 
 * name为字符串，请在const.js中定义，observer为页面js(一般传this)
 * 发送通知使用postNotification, 注册的通知与发送的name一致则此通知方法会触发
*/


var notices = [];

// 注册通知
function addNotification(name, observer, selector) {
  if (name && observer && selector) {
    var newNotice = {
      name: name,
      observer: observer,
      selector: selector,
    }
    addNotice(newNotice);
  }
}

// 移除通知（observer按name）
function removeNotification (name, observer) {
  wx.nextTick(() => {
    // 以防post过程中同时remove
    for (var i = notices.length - 1; i >= 0; i--) {
      var inNotice = notices[i];
      if (inNotice.name == name &&
      inNotice.observer == observer) {
        notices.splice(i, 1);
      }
    }
  });
}

// 移除通知（observer所有）
function removeAllNotification (observer) {
  wx.nextTick(() => {
    // 以防post过程中同时remove
    for (var i = notices.length - 1; i >= 0; i--) {
      var inNotice = notices[i];
      if (inNotice.observer == observer) {
        notices.splice(i, 1);
      }
    }
  });
}

// 发送通知
function postNotification (name, info) {
  for (var i = 0; i < notices.length; i++) {
    var inNotice = notices[i];
    if (inNotice.name == name) {
      inNotice.selector(info);
    }
  }
}

// 加入通知数据
function addNotice(newNotice) {
  var hasExist = false;
  if (notices.length > 0) {
    for (var i = 0; i < notices.length; i++) {
      var inNotice = notices[i];
      if (inNotice.name == newNotice.name && 
      inNotice.selector == newNotice.selector && 
      inNotice.observer == newNotice.observer) {
        return;
      }
    }
  }
  notices.push(newNotice);
}

const notifKey = {
  kVi: 'kVi',
  kLoginChange:'kLoginChange',
}

module.exports = {
  // 注册通知
  addNotification,
  // 移除通知（observer按name）
  removeNotification,
  // 移除通知（observer所有）
  removeAllNotification,
  // 发送通知
  postNotification,
  // 通知key
  notifKey,
}