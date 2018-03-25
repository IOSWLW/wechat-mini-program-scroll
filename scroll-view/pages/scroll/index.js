// pages/courseDetail/index.js

var order = ['section1', 'section2', 'section3', 'section4']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top: true,
    toView: 'section1',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  },
  topEven: function() {
  },
  bottomEven: function() {
  },

  scroll : function(e) {
    // console.log(e)
    if (e.detail.scrollTop >= 300 & e.detail.deltaY < 0 & this.data.top) {
      console.log('1111111111')
      this.setData({
        top: false
      })
    } 
    if (e.detail.scrollTop <= 300 & e.detail.deltaY > 0 & !this.data.top) {
      console.log('2222222222')
      this.setData({
        top: true
      })
    } 
  },

  tap1: function (e) {
        this.setData({
          toView: order[ 1]
        })
  },
  tap2: function (e) {
    this.setData({
      toView: order[2]
    })
  },
  tap3: function (e) {
    this.setData({
      toView: order[3]
    })
  },
})