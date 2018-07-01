// pages/deliveryshow/deliveryshow.js
const app = getApp()

Page({
  data: {
    contexts: "",
    toastHidden: true
  },
  //事件处理函数
  toastChange: function () {
    this.setData({
      toastHidden: true
    })
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.kuaidi100.com/query', //对对对就是在这里使用的人家的接口
      data: {//这里是参数
        type: options.type,
        postid: options.postid
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.message == '参数错误') {
          that.setData({
            toastHidden: false
          })
        }
        //console.log(res.data.message)
        that.setData({
          contexts: res.data.data
        })
      }
    })
  },
  // 用户点击右上角分享
  onShareAppMessage: function () {
    return {
      title: '快递服务',
      desc: '分享个小程序，希望你喜欢',
      success: function (res) {
        // 转发成功
        wx.showToast({
          title: "分享成功",
          duration: 1000,
          icon: "success"
        })
      }
    }
  }
})