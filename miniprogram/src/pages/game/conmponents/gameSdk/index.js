 

const gameUtils = require('./lib/utils')
const anserContent = '黄河入海流' 


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
    contentArray:[],
  },
  attached(){
    wx.showToast({
      title: '很抱歉，功能还在开发中',
      icon: 'none',
      duration: 1500,
    });
    this.getCharacter()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 获取其他随机汉字
    getCharacter(){
      const { stringFm } = gameUtils.getCharactersCombination(anserContent,12)
      this.setData({contentArray:stringFm.split(',')})
    },

  }



})
