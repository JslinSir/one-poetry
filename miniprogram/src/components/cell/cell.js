 

Component({
  options: {
    multipleSlots: true
  },

  externalClasses: ["class-container", "class-extra"],

  /**
   * 组件的属性列表
   */
  properties: {
    // 显示底部边框，默认不显示
    border: {
      type: Boolean,
      value: false
    },

    // 左侧标题
    title: {
      type: String,
      value: ""
    },
    // 左侧标题下方的描述信息
    label: {
      type: String,
      value: ""
    },

    // 右侧的额外内容
    extra: {
      type: String,
      value: ""
    },

    // 右侧 icon 图片路径
    icon: {
      type: String,
      value: "../../assets/images/icon_indicator_grey.png"
    },

    // 不展示右侧 icon，默认展示
    disIcon: {
      type: Boolean,
      value: false
    },
    require:{// 是否必填，左侧显示*
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap() {
      this.triggerEvent('click')
    }
  }
});
