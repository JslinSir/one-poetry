 
const cloud = require('wx-server-sdk');
const TcbRouter = require('tcb-router');
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})

const _DB_ = cloud.database({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const _ = _DB_.command
const $ = _DB_.command.aggregate

exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  });
  /**
   *  获取诗词推荐列表
   *  参数：event包含调用此函数时传过来的参数
   *  nums = 3 查询的条数 默认三条
   * 筛选 format  七言古诗 五言古诗 七言律诗 五言律诗  七言绝句  五言绝句 进行推荐
   */
  app.router('recommend/list', async (ctx, next) => {
    ctx.body = await _DB_.collection('poetry_list')
      .aggregate()
      .match({
        "$or": [ //或查询条件
          {
            format: '五言绝句'
          },
          {
            format: '五言律诗'
          },
          {
            format: '七言绝句'
          },
          {
            format: '七言古诗'
          },
          {
            format: '五言古诗'
          },
          {
            format: '七言律诗'
          },
        ],
        "content.6": {
          $exists: 0
        } //数组大小小于5，就意味着num[6]不存在。
      })
      .sample({ //随机获取数据
        size: event.nums || 3
      })
      .end()
      .then(res => res)
  });

  // 根据诗词 id 获取诗词详情
  app.router('get/detail', async (ctx, next) => {
    ctx.body = await _DB_.collection('poetry_list')
      .doc(event.id)
      .get()
      .then(res => res)
  });

  // 查询作者列表 分页查询
  app.router('get/author/list', async (ctx, next) => {
    const count = await _DB_.collection('poetry_authors_list').count() //获取总条数
    const pageData = await _DB_.collection('poetry_authors_list')
      .skip(event.pageNum * (event.pageSize || 10))
      .limit(event.pageSize || 10)
      .get()
      .then(res => res)
    const {
      data
    } = pageData
    ctx.body = {
      data,
      total: count.total,
      hasNextPage: event.pageNum * (event.pageSize || 10) < count.total
    }
  });

  // 根据作者ID 查作者详情
  app.router('get/author/detail', async (ctx, next) => {
    ctx.body = await _DB_.collection('poetry_authors_list')
      .doc(event.id)
      .get()
      .then(res => res)
  });

  // 根据分类查询诗词 分页
  app.router('get/list/byCategory', async (ctx, next) => {
    const count = await _DB_.collection('poetry_list').count() //获取总条数
    const filterParams = event.typeName == '全部' ? {} : {
      tags: _DB_.command.all([event.typeName])
    }
    const pageData = await _DB_.collection('poetry_list')
      .where(filterParams)
      .skip(event.pageNum * (event.pageSize || 10))
      .limit(event.pageSize || 10)
      .get()
      .then(res => res)
    const {
      data
    } = pageData
    ctx.body = {
      data,
      total: count.total,
      hasNextPage: event.pageNum * (event.pageSize || 10) < count.total
    }

  });


  return app.serve();

}
