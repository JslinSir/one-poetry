
class Cache {
  constructor(params){
   this.params = params || {}
  }

  // 设置缓存
  setCatch(v){
    if(typeof v === 'object' && Object.keys(v)>0){
      this.params = v
    }else{
      throw new Error('参数必须是Object')
    }
  }
  // 更新缓存
  updateCatch(v){
    if(typeof v === 'object' && Object.keys(v)>0){
      this.params = {
        ...this.params,
        ...v
      }
    }else{
      throw new Error('参数必须是Object')
    }
  }
  // 清楚
  clearCatch(){
    this.params = {}
  }
}

module.exports = new Cache()