// 安全区 Behavior
module.exports = Behavior({
  behaviors: [],
  properties: {

  },
  data: {
  },
  attached: function () {
    const { safeArea } = wx.getSystemInfoSync()
    this.setData(safeArea)
  },
  methods: {

  }
})