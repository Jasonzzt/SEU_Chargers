// pages/load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    getApp().getToken();
    console.log('re')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log('ok')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

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
  // onShareTimeline: function (res) {
  //   return {
  //     title: '东南大学充电桩一键查询',
  //     path: '/pages/load/load',
  //   }
  // },

})