 
const cloudFnRequest = (path,param={}) =>  wx.cloud.callFunction({name: 'operate', data: {$url: path,...param}})



export const getBannerlistApi = param => cloudFnRequest('get/banner/list',param)
export const getBannerDetailApi = param => cloudFnRequest('get/banner/detail',param)
