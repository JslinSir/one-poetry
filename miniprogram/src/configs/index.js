 
import { ENV, HOST } from './env'
class Config {
    constructor() {
      // 版本号
      this.version = '1.0.0';
      
      /*
      MOCK: -1,
      DEV: 0, // 开发
      TEST: 1, // 测试
      UAT: 2, // 预发布
      PROD: 3 // 生产
      */
      // app环境
      this.appEnv = ENV.MOCK;

      //app 域名   
      this.appHost = HOST[this.appEnv];
      
      // 打印请求接口、参数、返回数据
      /***** 默认0，需要打印请求数据改为1 !!! *****/
      this.printLog = 0;
  
      // 发布
      /***** 默认0，上传发布代码时改1，其他情况请忽修改 !!! *****/
      this.release = 0;
  
      // 屏蔽直播
      /***** 默认0，屏蔽直播的模板改1，需要同时删除app.json的直播插件wx2b03c6e691cd7370 !!! *****/
      this.blockLive = 0;
  
      // 程序信息
      const { miniProgram: { appId } } = wx.getAccountInfoSync();
      this.appId = appId;
      // this.appId = "wxb51b14e1bdc60298"
      // this.appId = "wx9dbdf6c9c470eea0"
    }
  }
  
  module.exports = new Config();