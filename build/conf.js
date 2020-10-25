// import env from './env/index.js'; TODO: 根据数据要求填写host
module.exports = {
    // 当前环境
    process: {
        envs: ['dev', 'production'],
        host: {
            dev: 'test.com.cn',
            pro: 'sgxq.test.com.cn'
        }
    },
    // 公共输出路径
    path: {
        tmp: '.tmp',
        src: './miniprogram',
        dist: './dist',
        serve: './serve',
        gulp: './gulp'
    },
    // oss seting 腾讯云
    TencentOss: {
        SecretId: 'XXXXXXX',
        SecretKey: 'XXXXXXXX',
        Bucket: 'XXXXXXXXX',
        Region: 'XXXXXXX'
    },
    // oss aliyun
    AliyunOss: {
        region: 'oss-XX-XXXXX',
        accessKeyId: 'XXXXXX',
        accessKeySecret: 'XXXXXXXXXXXX',
        bucket: 'XXXXXXX'
    },
    // 全局版本
    version: {
        static: '0.8.44',
        local: '1.0.7',
        lostArk: '1.0.0',
        laosAgreeCss: '0.0.666'
    }
};
