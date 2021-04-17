import device from "../../utils/device"

let statusBarHeight = 0;

Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true,
  },
  externalClasses: ['class-leftview'],
  properties: {
    // 是否显示返回首页按钮
    showHome: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: '',
    },
    background:{
      type: String,
      value: '#fff',
    },
    color:{
      type: String,
      value: '#000',
    },
    delta: {
      type: Number | String,
      value: 1,
    },
    slotHeight: {
      type: Number | String,
      value: 0,
      observer(newVal, oldVal) {
        if (newVal != null) {
          const { statusBarHeight, navBarHeight } = this.data;
          this.triggerEvent('height', (statusBarHeight + navBarHeight + Number(newVal)));
        }
      }
    },

    isBack: {
      type: Boolean,
      value: true,
    },

    isCustomLeft: {
      type: Boolean,
      value: false,
    },
    isGradient: {
      type: Boolean,
      value: false,
    }
  },

  attached() {
    if (statusBarHeight == 0) {
      const res = wx.getSystemInfoSync();
      statusBarHeight = res.statusBarHeight;
    }

    const pages = getCurrentPages();
    if (pages.length > 1) {
      this.setData({
        statusBarHeight,
        showBack: true,
      })
    } else {
      this.setData({
        statusBarHeight,
      })
    }
    const { navBarHeight, slotHeight } = this.data;
    this.triggerEvent('height', (statusBarHeight + navBarHeight + Number(slotHeight)));
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 20,
    navBarHeight: 44,
    showBack: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleBack() {
      const { isBack, isCustomLeft, delta } = this.data;
      if (isBack && !isCustomLeft) {
        wx.navigateBack({
          delta,
        })
        return;
      }

      this.triggerEvent('navBack')
    },
    backTap() {
      wx.reLaunch({
        url: '/customer/main/pages/main/main',
      })
    }
  }
})
