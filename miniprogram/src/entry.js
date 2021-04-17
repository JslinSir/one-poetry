 
import device from './utils/device'
import network from './utils/network'
import userEntry from './store/user'
import music from './store/music'


export const entryInit = () => {
    // 获取设备信息
    device.initialize()
    // 监听网络状态
    network.startListener()
    // 读取用户信息
    userEntry.readUserInfo()
    console.log(music)
    // 初始化云函数
    wx.cloud.init({
        env: 'jslin-fwqc3',
        traceUser: true,
    })
   
    // 用户登陆
    wx.cloud.callFunction({
        name: 'login'
      }).then(res => {
        const openid = res.result.openid;
        // this.globalData.openid = openid;
        // 该用户从未打开过小程序，未存储过openid在本地
        if (!wx.getStorageSync(openid)) {
          wx.setStorageSync('openid', openid); // 存储openid到本地
        }
     
      })
     
}


