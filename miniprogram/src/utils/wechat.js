 

const promisify = require('./promisify')



module.exports = {
  // upload
  uploadFile: promisify(wx.uploadFile),
  chooseImage: promisify(wx.chooseImage),
  showModal: promisify(wx.showModal),
  getSystemInfo: promisify(wx.getSystemInfo),
  getLocation: promisify(wx.getLocation),
  getNetworkType: promisify(wx.getNetworkType),
  // auth
  getSetting: promisify(wx.getSetting),
  authorize: promisify(wx.authorize),
  openSetting: promisify(wx.openSetting),
  getUserInfo: promisify(wx.getUserInfo)
}
