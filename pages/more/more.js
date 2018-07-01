//获取应用实例
var app = getApp()

//段子
var curPage = 1;
var isPullDownRefreshing = false;

Page({
  data: {
    selsectState: [1, 0, 0, 0],
    selectIndex: 4,
    //段子
    motto: 'Hello World',
    userInfo: {},
    jokes: {}
  },

  //段子
  lower: function () {
    console.log("reach to lower...");
    var that = this;
    this.fetchJoke();
  },

  onLoad: function (options) {

    //段子
    console.log('onLoad')
    var that = this
    this.fetchJoke();

  },
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh...');
    curPage = 1;
    isPullDownRefreshing = true;
    this.fetchJoke();
  },

  fetchJoke: function () {
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: app.globalData.requestUrl,
      data: {
        'showapi_appid': app.globalData.appid,
        'showapi_sign': app.globalData.apiKey,
        'page': curPage.toString(),
        'type': app.globalData.tText
      },
      method: 'GET',
      success: function (res) {
        // success
        if (curPage == 1)
          that.setData({ jokes: res.data.showapi_res_body.pagebean.contentlist });
        else
          that.setData({ jokes: that.data.jokes.concat(res.data.showapi_res_body.pagebean.contentlist) });

        curPage = curPage + 1;
        wx.hideNavigationBarLoading();
        if (isPullDownRefreshing)
          wx.stopPullDownRefresh();
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
//段子//段子//段子//段子//段子//段子//段子//段子//段子//段子//段子//段子//段子//段子//段子//段子


//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频
  videoJoke: function () {
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: app.globalData.requestUrl,
      data: {
        'showapi_appid': app.globalData.appid,
        'showapi_sign': app.globalData.apiKey,
        'page': curPage.toString(),
        'type': app.globalData.tVideo
      },
      method: 'GET',
      success: function (res) {
        // success
        if (curPage == 1)
          that.setData({ jokes: res.data.showapi_res_body.pagebean.contentlist });
        else
          that.setData({ jokes: that.data.jokes.concat(res.data.showapi_res_body.pagebean.contentlist) });

        curPage = curPage + 1;
        wx.hideNavigationBarLoading();
        if (isPullDownRefreshing)
          wx.stopPullDownRefresh();
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频//视频


//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图
  picJoke: function () {
    wx.showNavigationBarLoading();
    var that = this;
    wx.request({
      url: app.globalData.requestUrl,
      data: {
        'showapi_appid': app.globalData.appid,
        'showapi_sign': app.globalData.apiKey,
        'page': curPage.toString(),
        'type': app.globalData.tImg
      },
      method: 'GET',
      success: function (res) {
        // success
        if (curPage == 1)
          that.setData({ jokes: res.data.showapi_res_body.pagebean.contentlist });
        else
          that.setData({ jokes: that.data.jokes.concat(res.data.showapi_res_body.pagebean.contentlist) });

        curPage = curPage + 1;
        wx.hideNavigationBarLoading();
        if (isPullDownRefreshing)
          wx.stopPullDownRefresh();
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  previewImg: function (e) {
    console.log(e);
    wx.previewImage({
      // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
      urls: [e.currentTarget.dataset.imgurl],
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图//趣图

  //点击段子图标
  clickDict: function () {
    this.setData({
      selsectState: [1, 0, 0, 0],
      selectIndex: 1,

      jokes:[]
    });
   
    this.fetchJoke();
    
  },
  //点击视频图标
  clickExpre: function () {
    this.setData({
      selsectState: [0, 1, 0, 0],
      selectIndex: 2,

      jokes: []
    });
    
    this.videoJoke();
  },
  //点击趣图图标
  clickMore: function () {
    this.setData({
      selsectState: [0, 0, 1, 0],
      selectIndex: 3,

      jokes: []
    });
    
    this.picJoke();
  },
  //点击无法跳转提示
  bindItemTap:function(){
    wx.showModal({
      title: '提示',
      content: '小程序限制，无法跳转详情页哦！',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '谢谢理解！',
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '嗯，我就是那么棒棒哒！',
      desc: '分享个小程序，希望你喜欢',
      success: function (res) {
        wx.showToast({
          title: "分享成功",
          duration: 1000,
          icon: "success"
        })
      }
    }
  }

})