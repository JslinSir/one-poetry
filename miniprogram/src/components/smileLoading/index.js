// src/components/business/smileLoading/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showLoading:{
      type:Boolean,
      value:false
    },
    mask:{
      type:Boolean,
      value:true
    },
    animotion:{
      type:Boolean,
      value:true
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      show(){
        this.setData({showLoading:true})
      },
      hide(){
        this.setData({showLoading:false})
      },
  }
})
