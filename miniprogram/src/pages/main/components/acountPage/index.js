 
const lazyBehaviors = require('../../../../components/behaviors/lazyLoadTab')
import music from '../../../../store/music'

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [lazyBehaviors],
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    pullStatus:false,
  },
  attached(){
  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async lazyLoad() {
      const userInfo = wx.getStorageSync('userInfo') 
      this.setData({userInfo})
    
    },
    handleTogame(){
      console.log(music)
      music.btnMusicClick( () => wx.navigateTo({
        url: '../../../game/pages/index/index',
      }))

     
    },
    handleTogameHistoryList(){
      wx.showToast({
        icon:'none',
        title: '敬请期待',
      })
      // wx.navigateTo({
      //   url: '../../../game/pages/history/index',
      // })
    },
    // 跳转我的收藏
    handleToMyLike(){
      wx.reLaunch({
        url: '/src/pages/main/pages/main/main',
      })
      wx.navigateTo({
        url: '../../../mine/likeList/index',
      })
    },
    // 触发下拉刷新
    handleRefresh(){
      this.setData({pullStatus:true},()=>{
        setTimeout(()=>{
          this.setData({pullStatus:false})
        },100)
      })
    },
 
  }
})
