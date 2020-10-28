/**
 * index-com
 * Created by jerviscen
 * 2020-10-28
 * @prop ...
 */
Component({
    properties: {},
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        _app: getApp < IAppOption > ()
    },
    attached() {
        const {
            userInfo
        } = this.data._app.globalData
        if (userInfo) {
            this.setData({
                userInfo,
                hasUserInfo: true,
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            this.data._app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    this.data._app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                    })
                },
            })
        }
        if (userInfo) {
            this.setData({
                userInfo,
                hasUserInfo: true,
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            this.data._app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true,
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    this.data._app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                    })
                },
            })
        }
    },
    detached() {
        console.log('index-com 组件结束挂载')
    },
    methods: {
        bindViewTap() {
            wx.navigateTo({
                url: '../logs/logs',
            })
        },
        getUserInfo(e: any) {
            console.log(e)
            this.data._app.globalData.userInfo = e.detail.userInfo
            this.setData({
                userInfo: e.detail.userInfo,
                hasUserInfo: true,
            })
        },
        buttonEvent() {
            console.log('buttonEvent on');
            wx.showToast({
                title: 'button title',
                icon: 'none'
            })
        }
    }
});