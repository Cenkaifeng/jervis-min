## Typescript 小程序 jervis-mini 项目说明

ui 库使用 vant-weapp @https://gitee.com/vant-contrib/vant-weapp?utm_source=alading&utm_campaign=repo

后端测试数据使用 leancloud

## 项目初始化说明

https://vant-contrib.gitee.io/vant-weapp/#/quickstart

1. 打开项目之后，需要在命令行 cd miniprogram_npm & npm i 一次
2. (小程序开发工具)工具 -> npm 构建
3. 开发工具（右上角）-> 项目配置 -> 本地配置 -> 勾选【使用npm】 模块

## 构建命令
1. npm run add:page -- /user/home [--title=页面标题] [--creator=创建人]  // 创建一个小程序空页面，页面放在src/pages/user/home
2. npm run add:component -- /ui/dialog [--creator=创建人]               // 创建一个小程序空组件，组件放在src/components/ui/dialog
