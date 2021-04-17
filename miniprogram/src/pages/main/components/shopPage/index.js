
const lazyBehaviors = require('../../../../components/behaviors/lazyLoadTab')


Component({
  behaviors: [lazyBehaviors],
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  ready(){
    this.createBannerMusic()
  },

  detached(){

  },

  /**
   * 组件的方法列表
   */
  methods: {

    async lazyLoad() {
     this.replay()
    
    },

    curentRefChange(status){
      if(status){
        this.pause()
      }else{
        this.play()
      }
     
    },

    handleToShop(){
      wx.navigateToMiniProgram({
        appId: 'wx911a026f7769ad12',
      })
    },

    createBannerMusic(){
      this.audio = wx.createInnerAudioContext()
      this.audio.autoplay = false
      this.audio.src = `cloud://jslin-fwqc3.6a73-jslin-fwqc3-1302163217/rihe.mp3`
      
    },
    replay(){
      this.audio.seek(0)
      this.play()
    },
    play(){
       this.audio.play()
    },
    pause(){
      this.audio.pause()
    },
   
  }
})
