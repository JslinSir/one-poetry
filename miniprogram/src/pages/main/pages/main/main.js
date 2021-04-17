 

import { tabConfig } from '../../contants/tabConfig'

const ENUM = {
  0:'indexPage',
  1:'findPage',
  2:'shopPage',
  3:'acountPage'
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabData: tabConfig,
    curentTab:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {



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
    // this.selectComponent("#safeAreaView").showLoading()
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


  tabPageFromTab(index) {
    const tabPage = this.selectComponent(`#${ENUM[index]}`);
    return tabPage;
  },

 

  handleTabChange({detail:{index}}){
     this.setData({curentTab:index})
    //  if(index==2){
    //    const shopPage = this.tabPageFromTab(index)
    //    shopPage.play()
    //  }

  },




})