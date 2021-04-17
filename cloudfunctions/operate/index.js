 

const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV})
const _DB_ = cloud.database({ env: cloud.DYNAMIC_CURRENT_ENV})


exports.main = (event, context) => {
  const app = new TcbRouter({ event });
/**
 *  获取发现页的 banner 列表
 */
app.router('get/banner/list', async (ctx, next) => {
  ctx.body = await _DB_.collection('operate_banner_list')
  .aggregate()
    .end()
    .then(res => res)
});

 // 根据 id 获取 banner 详情
 app.router('get/banner/detail', async (ctx, next) => {
  ctx.body = await _DB_.collection('operate_banner_list')
  .doc(event.id)
  .get()
  .then(res => res)
});

  return app.serve();

}