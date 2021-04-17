 

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    loading:{
      type:Boolean,
      value:true
    },
    size:{
      type:Number,
      value:20
    },
    color:{
      type:String,
      value:'#f2f2f2'
    },
    duration:{
      type:Number,
      value:0.6
    },
    type:{
      type:String,
      value:'default'
    }
  },
  
  attached(){
    // 设置短类型 默认 color
    const { type,color } = this.properties
    if(type==='short' && color==='#f2f2f2'){
      this.setData({color:'#ff6727'})
    }
    
  },

  methods: {
    showLoading(){
       this.setData({loading:true})
    },
    hideLoading(){
      this.setData({loading:false},()=>{
        this.triggerEvent("onClose", '');
      })
   }
  }
})
