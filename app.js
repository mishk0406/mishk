App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
  },

  globalData: {
    defaultCity: '',
    defaultCounty: '',
    weatherData: '',
    air: '',
    day: '',
    g_isPlayingMusic: false,
    g_currentMusicPostId: null,
    heWeatherBase: "https://free-api.heweather.com",
    tencentMapKey: "4HYBZ-EB23D-SLC42-HQ5R3-LP3LQ-OZFU5",
    heWeatherKey: "4a817b4338e04cc59bdb92da7771411e",
    baiduDictBase:"https://fanyi-api.baidu.com",
    baiduDictAppId:"20160908000028393",
    baiduDictKey:"XcR34Ckk6HKR3N96DQEp",

    //段子
    userInfo: null,
    requestUrl: "https://route.showapi.com/255-1",
    appid: "68620",
    apiKey: "a82182600ac14f59bd4070c9193dcfc1",
    tText: '29',
    tImg: '10',
    tAudio: '31',
    tVideo: '41'
  }

})