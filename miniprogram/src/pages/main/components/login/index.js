 
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:false
  },

  attached(){
    const userInfo = wx.getStorageSync('userInfo') || {}
    if(Object.keys(userInfo).length===0){
       this.setData({isShow:true})
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getUserInfo(e){
      const userInfo = e.detail.userInfo
      wx.setStorageSync('userInfo', userInfo)
      this.setData({isShow:false})

    },
  }
})
