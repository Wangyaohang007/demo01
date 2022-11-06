$(function () {
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
      delay: 2000, //滚动间隔时长
      // 用户触碰后
      disableOnInteraction: false,
      // 鼠标进入时
      pauseOnMouseEnter: true,
    },
    autoplayDisableOnInteraction: false,
    loop: true,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
  })
})


