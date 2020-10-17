/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
  }
  AV: any,
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}