
class TabPageComponent{
  constructor(options){
    this.options = options
    this.loadFlag = 0
    this.create()

  }

  create(){
    const {  onLoad,onShow  } = this.options  || {}
    return Component({
      properties: {
    
      },
      attached(){
        getApp().globalData[this.__wxExparserNodeId__] = 0
      },
      detached(){
        getApp().globalData = {}
      },
      data: {
    
      },
      methods: {
 
        //组件逻辑初始化时执行
        _ConLoad(){
          typeof onLoad === 'function' && onLoad.call(this)
        },
  
        //组件显示时触发执行
        _ConShow(){
          getApp().globalData[this.__wxExparserNodeId__] = 1
          console.log(  getApp().globalData[this.__wxExparserNodeId__])
          typeof onLoad === 'function' && onShow.call(this)
        },
        
        //内部逻辑，组件只需要关心 _ConLoad  _ConShow
        _init(){
          console.log('this:',this)
          debugger
          if(getApp().globalData[this.__wxExparserNodeId__]){
            this._ConShow()
          }else{
            this._ConLoad()
            this._ConShow()
          }
        },
    
      },
   
      ...this.options,
    })
  }

}


module.exports = TabPageComponent



