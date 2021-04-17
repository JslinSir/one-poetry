 
const safeAreaBehavior = require('../behavior/safeArea')
Component({
  behaviors: [safeAreaBehavior],
  options: {
    multipleSlots: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    api:{
      type:String,
      value:"",
    },
    background:{ //刷新的背景色
      type:String,
      value:"#fff",
    },
    freshStyleType:{ //刷新loading 样式
      type:String,
      value:"black",
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    pullStatus:true,
    loadMore:false,
    refreshEnasble:false,
    smile:false,
  },

  attached(){
    this.setData({refreshEnasble:true})
    this.triggerEvent("dataInit","")
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 下拉
    handlePull:function(e){
      console.log('pull',e)
      this.triggerEvent("pull",e)
    },
    // 触发
    handleRefresh(e){
      if (this._freshing) return
      this.setData({smile:true},()=>{
        this.triggerEvent("pulling",e)
      })
    
    },
    handleRestore(e){
      this.setData({refreshEnasble:true,smile:false},()=>{
        this.triggerEvent("restore",'')
      })
      console.log('复位',e)
    },
    handleAbort(e){
      this.setData({refreshEnasble:true},()=>{
        this.triggerEvent("abort",e)
      })
      console.log('中断',e)
    },
	
    // 上拉触底
    handleMore(e){
      if(!this.loading && this.hasNext){
        console.log('上拉触底',e)
        this.setData({loadMore:true},()=>  this.triggerEvent("loadMore",e))
        
      }
     
    },

    reset(){
      this.setData({
        pullStatus:false,
        smile:false,
      },()=>{
  
      })
    }


  }
})
