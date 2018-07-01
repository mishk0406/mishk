// pages/deliveryinput/deliveryinput.js
Page({
  data: {
    show:"",
    imgTop: '../../images/kuaidi.png',
    imgCode:'../../images/saomiao.png',
    title: "快递查询",
    areaIndex: 0,
    area: ['点击选择', '申通', 'EMS','邮政包裹', '顺丰', '圆通', '中通', '韵达', '天天','如风达','百世快递', '汇通', '全峰', '德邦', '宅急送'],
    realvalue: ['', 'shentong', 'ems', 'youzhengguonei', 'shunfeng', 'yuantong', 'zhongtong', 'yunda', 'tiantian', 'rufengda','baishiwuliu','huitongkuaidi', 'quanfengkuaidi', 'debangwuliu', 'zhaijisong']
  },
  //获取快递公司
  bindPickerChange: function (e) {
    console.log(this.data.realvalue[e.detail.value])
    this.setData({             //**重点**！！！使用setData重新给data赋值或新建data
      userName: this.data.realvalue[e.detail.value],
      areaIndex: e.detail.value
    })
  },

  //获取快递单号
  passWdInput: function (e) {
    this.setData({
      userPwd: e.detail.value
    })
  },
  qrcode:function(e){

    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        that.setData({
          userPwd: res.result,
          show: res.result
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