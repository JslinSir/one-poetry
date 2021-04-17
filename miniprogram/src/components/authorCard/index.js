 
const transferParam = require('../../utils/transferParam')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:{
      type:Object,
      value:null
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
    // 跳转详情
    handleToAuthorDetail(e){
      transferParam.addParam('AuthorDetail',this.data.data)
      wx.navigateTo({ url: `/src/pages/poetry/pages/authorDetail/index`, })
    },

  }
})
