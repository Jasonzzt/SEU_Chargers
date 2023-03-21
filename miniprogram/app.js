// app.js
const app = getApp()
App({
  stations: [
    'https://mapi.7mate.cn/api/chargers/XYvIqZM8oCmT19',
    'https://mapi.7mate.cn/api/chargers/XYnfw8BeyiXS16',
    'https://mapi.7mate.cn/api/chargers/XYEogTrLdXZx14',
    'https://mapi.7mate.cn/api/chargers/XYxN6z9ZETBZ17',
    'https://mapi.7mate.cn/api/chargers/XYBGw4c88NWd21',
    'https://mapi.7mate.cn/api/chargers/XYSfeYzOvLwN5',
    'https://mapi.7mate.cn/api/chargers/XYDSUGrzkRfX6',
    'https://mapi.7mate.cn/api/chargers/XYS2hOWumHDa13',
    'https://mapi.7mate.cn/api/chargers/XYp5iHwheZvf18',
    'https://mapi.7mate.cn/api/chargers/XY9HNPbegRgV15',
    'https://mapi.7mate.cn/api/chargers/XYcjSf9nqvK612',
    'https://mapi.7mate.cn/api/chargers/XY31g0OtIZA711',
    'https://mapi.7mate.cn/api/chargers/XYV5mv5tnKHV9',
    'https://mapi.7mate.cn/api/chargers/XY679RB8P35Y10',
    'https://mapi.7mate.cn/api/chargers/XYOGaVYy7OHu7',
    'https://mapi.7mate.cn/api/chargers/XY1eANYJoWM620',
    'https://mapi.7mate.cn/api/chargers/XYlFl6DnfgZH3',
    'https://mapi.7mate.cn/api/chargers/XYeo2IsT1Sx61',
    'https://mapi.7mate.cn/api/chargers/XYKCwwkZXBW62',
    'https://mapi.7mate.cn/api/chargers/XYTbok829tYo8',
    'https://mapi.7mate.cn/api/chargers/XYo7UstSCeu64'
  ],
  globalData: {
    chargers: [],
    sequence: [
      ["东门", "北1"],
      ["东门", "北2"],
      ["东门", "北3"],
      ["东门", "北4"],
      ["东门", "北5"],
      ["东门", "南1"],
      ["东门", "南2"],
      ["西门", "北1"],
      ["西门", "北2"],
      ["西门", "北3"],
      ["西门", "南1"],
      ["西门", "南2"],
      ["西门", "南3"],
      ["南门", "西1"],
      ["南门", "西2"],
      ["南门", "东1"],
      ["南门", "东2"],
      ["北门", "东1"],
      ["北门", "东2"],
      ["北门", "东3"],
      ["北门", "东4"],
    ],
  },
  nums: 0,
  token: null,

  getChargers: function (number) {
    var url0 = this.stations[number];
    wx.request({
      url: url0,
      method: 'GET',
      header: {
        'Authorization': 'Bearer ' + getApp().token,
        // 'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.2; MI 9 Build/N2G48C; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.198 Mobile Safari/537.36 MicroMessenger/8.0.2.1860(0x28000234) Process/appbrand2 WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm32 MiniProgramEnv/android', 
        'Accept': '*/*',
        'Host': 'mapi.7mate.cn',
        'Connection': 'keep-alive'
      },
      success(res) {
        // console.log(res.data.data.channels)
        var tmp = res.data.data.channels;
        var chargers = '';
        var num = 10;
        for (var i = 0; i < 10; i++) {
          if (!tmp[i].status) {
            num = num - 1;
          }
          else {
            chargers = chargers + tmp[i].channel + " ";
          }
        }
        if (!num) chargers = "无可用充电桩";
        else chargers = "可用充电桩:" + chargers;
        getApp().globalData.chargers[number] = chargers;
        getApp().nums++;
        if (getApp().nums == 21) {
          getApp().nums = 0;
          wx.redirectTo({
            url: '/pages/index/index',
          })
        }
      }
    })
  },

  getToken: function () {
    wx.request({
      method: 'post',
      url: 'https://mapi.7mate.cn/api/authorizations',
      headers: {
        // 'User-Agent': 'Apifox/1.0.0 (https://www.apifox.cn)', 
        'Accept': '*/*',
        'Host': 'mapi.7mate.cn',
        'Connection': 'keep-alive',
      },
      data: { "openid": "0212", "phone": "0212" },
      success(res) {
        getApp().token = res.data.data.token;
        console.log("getToken")
        for (let i = 0; i < 21; i++) {
          getApp().getChargers(i);
        }
      }
    })
  },

  onLaunch: function () {
    //this.getToken();
    // this.getData();
  }

});
