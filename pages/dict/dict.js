// pages/dict/dict.js
var app     = getApp();
var utilMd5 = require('../../utils/md5.js');
Page({
  data: {
    img: '../../images/cidian.png',
    huhuanimg:"../../images/huhuan.png",
    title: "翻译助手",
    isShowResult:false,
    textFoucs:true,
    resultValue:'',
    fromname: 'auto',
    toname: 'zh',
    textvalue:'',
    fromIndex: 0,
    toIndex: 0,
    fromarray: ['自动检测', '中文', '英语', '粤语', '文言文', '日语', '韩语', '法语', '西班牙语', '泰语', '阿拉伯语', '俄语', '葡萄牙语', '德语', '意大利语', '希腊语', '荷兰语', '波兰语', '保加利亚语', '爱沙尼亚语', '丹麦语', '芬兰语', '捷克语', '罗马尼亚语', '斯洛文尼亚语', '瑞典语', '匈牙利语', '繁体中文', '越南语'],
    fromvalue: ['auto', 'zh', 'en', 'yue','wyw', 'jp', 'kor', 'fra', 'spa', 'th', 'ara', 'ru', 'pt', 'de', 'it', 'el', 'nl', 'pl', 'bul', 'est', 'dan', 'fin', 'cs', 'rom', 'slo', 'swe', 'hu', 'cht', 'vie'],
    toarray: [ '中文', '英语', '粤语', '文言文', '日语', '韩语', '法语', '西班牙语', '泰语', '阿拉伯语', '俄语', '葡萄牙语', '德语', '意大利语', '希腊语', '荷兰语', '波兰语', '保加利亚语', '爱沙尼亚语', '丹麦语', '芬兰语', '捷克语', '罗马尼亚语', '斯洛文尼亚语', '瑞典语', '匈牙利语', '繁体中文', '越南语'],
    tovalue: [ 'zh', 'en', 'yue', 'wyw', 'jp', 'kor', 'fra', 'spa', 'th', 'ara', 'ru', 'pt', 'de', 'it', 'el', 'nl', 'pl', 'bul', 'est', 'dan', 'fin', 'cs', 'rom', 'slo', 'swe', 'hu', 'cht', 'vie']
  },
  //获取源语言
  bindPickerChange1: function (e) {
    console.log(this.data.fromvalue[e.detail.value])
    this.setData({
      fromname: this.data.fromvalue[e.detail.value],
      fromIndex: e.detail.value
    })
  },
  //获取目标语言
  bindPickerChange2: function (e) {
    console.log(this.data.tovalue[e.detail.value]);
    this.setData({
      toname: this.data.tovalue[e.detail.value],
      toIndex: e.detail.value
    })
  },

  //获取文本域的值
  charChange: function (e) {
    this.setData({
      textvalue: e.detail.value,
      isShowResult: false
    })
  },

  dict:function(e){
    this.setData({
      textFoucs: false
    });
    var that  = this;
    var salt  = Math.round(Math.random() * 10);
    var query = this.data.textvalue;
    var param = {
      q: query,
      from: this.data.fromname,
      to: this.data.toname,
      appid: app.globalData.baiduDictAppId,
      salt: salt,
      sign: utilMd5.md5(app.globalData.baiduDictAppId + query + salt + app.globalData.baiduDictKey)
    };
    //发出请求
    wx.request({
      url: app.globalData.baiduDictBase + "/api/trans/vip/translate",
      data: param,
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          isShowResult: true,
          resultValue: res.data.trans_result[0].dst
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