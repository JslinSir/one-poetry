 


module.exports = Behavior({
    properties: {
        hidden: {
            type: Boolean,
            value: true,
            observer: 'curentRefShow'
        }
    },
    data: {},
    pageLifetimes: {
        show: function () {

        },
    },
    created: function () {
        this.canLoad = 0  //控制tab 数据是否加载的标识
    },
    attached: function () {
    },
    detached: function () {
        this.canLoad = 0
    },
    methods: {

        // 惰性加载 
        curentRefShow() {
            this.canLoad++
            if (this.canLoad == 1 && !this.properties.hidden) {
                if (this.lazyLoad) {
                    this.lazyLoad() //组件需要惰性加载的方法
                }
            }else{
                typeof this.curentRefChange === 'function' && this.curentRefChange(this.properties.hidden)
            }
           
        },

    }

})