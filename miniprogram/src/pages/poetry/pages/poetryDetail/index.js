 

const { getPoetryDetailApi } = require('../../../../services/poetryApi')
const transferParam = require('../../../../utils/transferParam')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    x: -0,
    y: -0,
    data: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    if (options.id) {
      this.id = options.id
      this.getDetailById()

    } else {
      this.getDetail()
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  async getDetail() {
    const result = transferParam.getParam('poetryDetail')
    this.setData({ data: result })
    wx.hideLoading()
    console.log('result:', result)
  },

  async getDetailById() {
    const data = await getPoetryDetailApi({ id: this.id })
    this.setData({ data: data.result.data })
    wx.hideLoading()
    console.log('result:',  data.result.data)
  },


  // 跳转到作者介绍
  handleToAuthorDetail(e) {
    console.log(e)
    wx.navigateTo({ url: `/src/pages/poetry/pages/authorDetail/index`, })
  },

  handleLike() {

  }
})