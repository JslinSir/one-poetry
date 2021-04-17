
const {
  getPoetryListByCateApi
} = require('../../../../services/poetryApi')
const { categoryData } = require('./cateData')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: '全部',
    transformX: 0,
    navBarHeight: 0,
    popShow:false,
    categoryData,
    dataList:null,
    loadingMore:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
     this.refershFetch()
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

  handleSelect({ currentTarget: { dataset: { item, index } } }) {
    wx.showLoading({
      title: '加载中...',
    })
    this.setData({ select: item, curentSelectIndex: index,popShow:false,loading:true,loadingMore:false }, () => {
      this.queryMultipleNodes()
      this.refershFetch()
    })

  },

  getRect(selector, all = false) {
    return new Promise((resolve, reject) => {
      const query = wx.createSelectorQuery().in(this)
      const type = all ? query.selectAll(selector) : query.select(selector)
      type.boundingClientRect((res) => {
        if (!res) return reject('找不到元素')
        resolve(res)
      }).exec()
    });
  },
  queryMultipleNodes() {
    this.getRect('.rect_item', true)
      .then((res) => {
        this.queryScrollNode(res);
      });
  },
  queryScrollNode(res, type = 'width') {
    const { curentSelectIndex } = this.data
    const currentRect = res[curentSelectIndex];
    this.getRect('.category-scrol').then(_ => {
      const scrollWidth = _[type];
      let transformDistance = res
        .slice(0, curentSelectIndex)
        .reduce((prev, curr) => prev + curr[type], 0);
      transformDistance = transformDistance + (curentSelectIndex - 1) * 10
      transformDistance += ((currentRect[type] - scrollWidth) / 2);
      if (type === 'width') {
        this.setData({
          transformX: transformDistance,
        });
      }
    });
  },

  heightChange({ detail }) {
    this.setData({ navBarHeight: detail })
  },

  handleTogglePop(){
    const { popShow } = this.data
    this.setData({popShow:!popShow})
  },
  handleClosePop(){
    this.setData({popShow:false})
  },

 // refersh
 refershFetch(){
  this.pageSize = 10
    this.pageNum = 0
    this.loading = false
    this.getPoetryList()
 },

  // 查询诗词列表
  async getPoetryList() {
    const { pageSize, pageNum,data:{ select } } = this
    const { result:{ data,hasNextPage } } = await getPoetryListByCateApi({pageSize,pageNum,typeName:select})
    const list = this.pageNum == 0 ? data : this.data.dataList.concat(data)
    console.log(list)
    this.hasNextPage = hasNextPage
    this.setData({dataList:list},()=>{
      wx.hideLoading()
    })
  }

})