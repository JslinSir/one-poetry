 
const lazyBehaviors = require('../../../../components/behaviors/lazyLoadTab')
const operateApi = require('../../../../services/operateApi')
const poetryApi = require('../../../../services/poetryApi')
const { categroData } =require('./config')

Component({
  behaviors: [lazyBehaviors],
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    skeletonLoading: true,
    data: [],
    authorList:[],
    categroData,
  },
  attached() {

  },
  ready() {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    async handleInit() {
      //  const { data } = await this.getInitData()
      //  this.setData({data,skeletonLoading:false})
    },

    async lazyLoad() {
      await  Promise.all([this.getBannerList(),this.getPoetyList()])
      this.setData({skeletonLoading:false})
    
    },


    handlePulling() {
      setTimeout(() => {
        this.selectComponent('#scrolViewListIdFindPage').reset() //复位
      }, 1500)
    },
    handleToDetail(e) {
      const { index } = e.currentTarget.dataset
      const curentSelect = this.data.data[index]
      wx.navigateTo({ url: `/src/pages/poetry/pages/bannerDetail/index?id=${curentSelect._id}`, })

    },
    handleToAuthoeDetail(){
      wx.navigateTo({ url: `/src/pages/poetry/pages/authorDetail/index`, })
    },
    // 跳转到作者列表
    handleToAuthList(){
      wx.navigateTo({ url: `/src/pages/poetry/pages/authorList/index`, })
    },

    // 跳转到诗词列表
    handleToPoetryList(){
      wx.navigateTo({ url: `/src/pages/poetry/pages/category/index`, })
    },

    // 搜索跳转
    handleToCate(){
      wx.navigateTo({ url: `/src/pages/poetry/pages/category/index`, })
    },

    // 金刚区点击跳转
    handleJump(e){
      const { item } = e.currentTarget.dataset
      if(item.id.length === 24){
        wx.navigateTo({ url: `/src/pages/poetry/pages/poetryDetail/index?id=${item.id}`, })
      }else{
        wx.navigateTo({ url: `/src/pages/poetry/pages/poetryList/index?id=${item.id}`, })
      }
     

    },

    // *******************************  fetch *******************
    /**
     * 获取banner列表
     */
    async getBannerList() {
      const data = await operateApi.getBannerlistApi()
      const { list } = data.result
      this.setData({data:list})
      return Promise.resolve()
    },

    // 获取作者推荐列表
    async getPoetyList() {
      const { result:{ data } } = await poetryApi.getAuthorListApi({pageSize:4,pageNum:0})
      this.setData({authorList:data})
      return Promise.resolve()
    },
    
   

  }
})
