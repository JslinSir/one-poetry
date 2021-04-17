 
/* 使用方法
 *
 * 在页面A设置transferParam.addParam(业务名称, 参数对象)，在页面B获取const obj = transferParam.getParam(业务名称)。
 */


const params = {}

// 添加参数
function addParam(name, obj) {
  if (name == null || obj == null) {
    return
  }
  params[name] = obj
}
const duplicate = obj => {
  if (typeof obj === 'undefined' || obj == null) {
    return null
  }

  const json = JSON.stringify(obj)
  const duplicateObj = JSON.parse(json)

  return duplicateObj
}
// 获取参数 (复制,改变不会影响原对象值)
function getParam(name) {
  const duplicateObj = duplicate(params[name])

  // 移除暂存对象
  removeParam(name)

  return duplicateObj
}

// 移除参数
function removeParam(name) {
  // params[name] = null;
  delete params[name]
}

module.exports = {
  // 注册通知
  addParam: addParam,
  // 获取参数 (复制)
  getParam: getParam
}
