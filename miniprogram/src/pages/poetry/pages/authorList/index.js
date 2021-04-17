 

const {
  getAuthorListApi
} = require('../../../../services/poetryApi')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingMore:false,
    dataList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.pageSize = 10
    this.pageNum = 0
    this.loading = false
    this.getAuthorList()
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
    this.pageNum = 0
    this.getAuthorList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if (!this.loading && this.hasNextPage) {
      this.pageNum += 1
      this.setData({ loadingMore: true }, () => this.getAuthorList())

    }

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // 查询作者列表
  async getAuthorList() {
    const { pageSize, pageNum } = this
    const { result:{ data,hasNextPage } } = await getAuthorListApi({pageSize,pageNum})
    const list = this.pageNum == 0 ? data : this.data.dataList.concat(data)
    console.log(list)
    this.hasNextPage = hasNextPage
    this.setData({dataList:list})
  }
})
