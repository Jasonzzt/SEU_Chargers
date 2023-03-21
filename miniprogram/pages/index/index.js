// index.js
const app = getApp()

Page({
  data: {
    showUploadTip: false,
    powerList: [
      {
        title: '东门-北1',
        area: '东门',
        tip: app.globalData.chargers[0],
        showItem: false,
      }, {
        title: '东门-北2',
        area: '东门',
        tip: app.globalData.chargers[1],
        showItem: false,
      }, {
        title: '东门-北3',
        area: '东门',
        tip: app.globalData.chargers[2],
        showItem: false,
      }, {
        title: '东门-北4',
        area: '东门',
        tip: app.globalData.chargers[3],
        showItem: false,
      }, {
        title: '东门-北5',
        area: '东门',
        tip: app.globalData.chargers[4],
        showItem: false,
      }, {
        title: '东门-南1',
        area: '东门',
        tip: app.globalData.chargers[5],
        showItem: false,
      }, {
        title: '东门-南2',
        area: '东门',
        tip: app.globalData.chargers[6],
        showItem: false,
      }, {
        title: '西门-北1',
        area: '西门',
        tip: app.globalData.chargers[7],
        showItem: false,
      }, {
        title: '西门-北2',
        area: '西门',
        tip: app.globalData.chargers[8],
        showItem: false,
      }, {
        title: '西门-北3',
        area: '西门',
        tip: app.globalData.chargers[9],
        showItem: false,
      }, {
        title: '西门-南1',
        area: '西门',
        tip: app.globalData.chargers[10],
        showItem: false,
      }, {
        title: '西门-南2',
        area: '西门',
        tip: app.globalData.chargers[11],
        showItem: false,
      }, {
        title: '西门-南3',
        area: '西门',
        tip: app.globalData.chargers[12],
        showItem: false,
      }, {
        title: '南门-西1',
        area: '南门',
        tip: app.globalData.chargers[13],
        showItem: false,
      }, {
        title: '南门-西2',
        area: '南门',
        tip: app.globalData.chargers[14],
        showItem: false,
      }, {
        title: '南门-东1',
        area: '南门',
        tip: app.globalData.chargers[15],
        showItem: false,
      }, {
        title: '南门-东2',
        area: '南门',
        tip: app.globalData.chargers[16],
        showItem: false,
      }, {
        title: '北门-东1',
        area: '北门',
        tip: app.globalData.chargers[17],
        showItem: false,
      }, {
        title: '北门-东2',
        area: '北门',
        tip: app.globalData.chargers[18],
        showItem: false,
      }, {
        title: '北门-东3',
        area: '北门',
        tip: app.globalData.chargers[19],
        showItem: false,
      }, {
        title: '北门-东4',
        area: '北门',
        tip: app.globalData.chargers[20],
        showItem: false,
      },
    ],
    haveCreateCollection: false
  },

  onPullDownRefresh: function () {
    wx.redirectTo({
      url: '../load/load',
    })
  },

  onLoad: function () {
  },

  /**
  * 用户点击右上角分享到好友列表
  */
  onShareAppMessage: function (res) {
    return {
      title: '东南大学充电桩一键查询',
      path: '/pages/load/load',
      imageUrl: '/images/share.jpg'
    }
  },

  /**
  * 用户点击右上角分享到朋友圈
  */
  // onShareTimeline() {
  // },

  onShow: function () {
    wx.hideHomeButton();  //隐藏home/返回主页按钮
  },

});
