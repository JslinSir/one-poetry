# 一诗词
一个使用小程序云开发的诗词小程序

## 项目介绍
一个 使用小程序云开发的小程序，致力于帮助青少年学习 查阅古诗词的一个学习休闲 平台 已上线 一个小程序云开发项目


## 项目目录
 
    |-- cloudfunctions  //云函数模块
    |   |-- operate     //运营模块如：轮播等
    |   |   |-- config.json
    |   |   |-- index.js
    |   |   |-- package-lock.json
    |   |   |-- package.json
    |   |-- poetry      //诗词模块
    |   |   |-- config.json
    |   |   |-- index.js
    |   |   |-- package-lock.json
    |   |   |-- package.json
    |-- miniprogram       //小程序目录
        |-- app.js
        |-- app.json
        |-- app.wxss
        |-- project.config.json
        |-- sitemap.json
        |-- src
            |-- entry.js   //入口配置文件
            |-- assets     //资源文件
            |-- components  //公共组件部分
            |-- configs     //小程序配置相关
            |   |-- env.js  // 环境变量
            |   |-- index.js
            |-- pages       //页面
            |-- services    //服务，调用云函数函数的封装
            |-- store       //一些公用的文件常量，以及缓存等
            |-- utils      // 工具类

## 数据库
operate_banner_list  // 运用相关的表
poems_dynasty_list   //诗词朝代表
poetry_authors_list  //作者表
poetry_category      //分类表
poetry_like_list    //诗词收藏表
poetry_list         //诗词表


## 扫码体验
<img src="./code.jpg" width="300" height="300">