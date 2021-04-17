/**
 * 安全区
 */
const safeAreaBehavior = require('../behavior/safeArea')

Component({
  options:{
    multipleSlots:true,
  },
  behaviors: [safeAreaBehavior],
  properties: {
   fetchServer:{
     type:Function
   }
  },
  attached(){
    // 分页参数
    this.pageNum = 1
    this.pageSize = 10
    console.log(this.data)
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
    showLoading(){
      this.selectComponent('#loading').show()
    },
    hideLoading(){
      this.selectComponent('#loading').hide()
    },
  }
})
