 
const { getRecommendlistApi } = require('../../../../services/poetryApi')
import { calendar } from '../../../../utils/lunarTransfer'
import { format } from '../../../../utils/dateFormat'
const transferParam = require('../../../../utils/transferParam')

Component({
  /**
   * 组件的属性列表
   */
  properties: {},
  data: {
    curentIndex: 0,
    swiperHeight: 0,
    pullStatus: false,
    refreshEnasble: false,
    list: [],
    loading:true
  },
  attached() {
    const { safeArea: { bottom } } = wx.getSystemInfoSync()
    this.setData({ swiperHeight: bottom - 55 - 32, refreshEnasble: true })
    this.getRecommendlist()
    this.setLunarDay()
  },
  ready() {
    this.$scrolViewListId = this.selectComponent('#scrolViewListId')
  },
  methods: {
    // 获取诗词推荐
    async getRecommendlist() {
      const data = await getRecommendlistApi({ nums: 3 })
      console.log(data)
      let { list } = data.result
      // 数据处理
      list = list.map(item => {
        if (item.content && Array.isArray(item.content)) {
          item.content = item.content.map(ct => {
            return `<div>${ct}</div>`
          })
        }
        return {
          ...item,
          dynasty: (item.dynasty || '').substring(0, 1)
        }
      })
      this.setData({ list,loading:false },()=>{
        this.$scrolViewListId.reset() //复位
      })
      console.log(list)
    },
    handlePulling() {
      this.getRecommendlist()
    },
    async handleToDetail(e) {
      const { item } = e.currentTarget.dataset
      transferParam.addParam('poetryDetail',item)
      wx.navigateTo({ url: `/src/pages/poetry/pages/poetryDetail/index`, })
    },
    handleToMore() {
       wx.navigateTo({
         url: '/src/pages/poetry/pages/category/index',
       })
    },
    // 设置农历展示
    setLunarDay() {
      const dateFrm = format(new Date(), 'yyyy-MM-dd-ww')
      console.log('dateFrm:',dateFrm)
      const dateFrmArray = dateFrm.split('-')
      const lunarDate = calendar.solar2lunar(Number(dateFrmArray[0]), Number(dateFrmArray[1]), Number(dateFrmArray[2]))
      this.setData({
        dateInfo:{
          week:dateFrmArray[3],
          day:dateFrmArray[2],
          month:`${lunarDate.IMonthCn}${lunarDate.IDayCn}`
        }
      })

    }

  }
})

