const transferParam = require('../../utils/transferParam')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   data:{
     type:Object,
     value:{}
   }
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
    handleToDetail(){
      const { data } = this.data
      transferParam.addParam('poetryDetail',data)
      wx.navigateTo({ url: `/src/pages/poetry/pages/poetryDetail/index`, })
    },
    
  }
})
