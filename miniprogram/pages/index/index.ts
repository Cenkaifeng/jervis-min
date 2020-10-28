// index.ts
// 获取应用实例


Page({
  data: {
    active: "index",
    _app: getApp<IAppOption>()
  },
  // 事件处理函数
  onLoad() {
    this.testLeanCloud();

  },
  testLeanCloud() {
    const TestObject = this.data._app.AV.Object.extend('TestObject');
    const testObject = new TestObject();
    testObject.set('words', 'Hello world!');
      testObject.save().then((testObject: any) => {
      console.log('保存成功。',  testObject)
    })
  },
  onChange(e: any) {
      this.setData({ active: e.detail});
      wx.showToast({
        title: `点击标签 ${e.detail + 1}`,
        icon: 'none',
      });
  },
})
