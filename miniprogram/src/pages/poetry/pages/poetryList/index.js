 
const {
  getPoetryListByCateApi
} = require('../../../../services/poetryApi')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:null,
    loadingMore:false,
    id:'诗词列表'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options
    this.pageSize = 10
    this.pageNum = 0
    this.loading = false
    wx.showLoading({
      title: '加载中...',
      mask: true,
    })
    this.setData({id},()=>{
      this.getPoetryList()
    })
   
   
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

  onReachBottom: function () {
    if (!this.loading && this.hasNextPage) {
      this.pageNum += 1
      this.setData({ loadingMore: true }, () => this.getPoetryList())

    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

    // 查询诗词列表
    async getPoetryList() {
      const { pageSize, pageNum,data:{ id } } = this
      const { result:{ data,hasNextPage } } = await getPoetryListByCateApi({pageSize,pageNum,typeName:id})
      const list = this.pageNum == 0 ? data : this.data.dataList.concat(data)
      console.log(list)
      this.hasNextPage = hasNextPage
      this.setData({dataList:list},()=>{
        wx.hideLoading()
      })
    }
})