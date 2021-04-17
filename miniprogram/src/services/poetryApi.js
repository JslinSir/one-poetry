 


// 获取诗词推荐列表

const cloudFnRequest = (path,param={}) =>  wx.cloud.callFunction({name: 'poetry', data: {$url: path,...param}})



export const getRecommendlistApi = param => cloudFnRequest('recommend/list',param)
export const getPoetryDetailApi = param => cloudFnRequest('get/detail',param)

// 获取作者列表 pageSize,pageNum
export const getAuthorListApi = param => cloudFnRequest('get/author/list',param)

// 查询诗词列表根据分类
export const getPoetryListByCateApi = param => cloudFnRequest('get/list/byCategory',param)