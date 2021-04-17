 


const ENV = {
    MOCK: -1, // mock
    DEV: 0, // 开发
    TEST: 1, // 测试
    UAT: 2, // 预发布
    PROD: 3, // 生产
};


const HOST = {
    '-1': "http://yapi.rainbowcn.net/mock",
    0: "https://dev-api.xxxx",
    1: "http://sit-api.xxxx",
    2: "https://uat-api.xxxxx",
    3: "https://api.xxxx",
}

export  {
    ENV,
    HOST
}