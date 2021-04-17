 
const device = require('../../utils/device')

Component({
  properties: {
    tab: {
      type: Array,
      value: [],
    },
    curentTab:{
      type: Number,
      value: 0,
      observer:'changeSetTab'
    }
  },
 
  data: {
    tabIndex:0
  },
  attached(){
    this.setData({remainHeight:device.remainHeight,tabIndex:this.properties.curentTab})
  },

  methods: {
    handleTabClick(e){
      const { tabIndex } = this.data
      const { currentTarget:{ dataset:{ index,name } } } = e
      tabIndex !=index && this.setData({tabIndex:index},()=>{
        this.triggerEvent('change',{name,index})
      })
    },
    changeSetTab(){
      const { curentTab } = this.properties
      this.setData({tabIndex:curentTab})
    }
  }
})