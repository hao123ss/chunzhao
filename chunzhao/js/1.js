var swiper1 = new Swiper('.swiper-container-v',{
  direction: 'vertical',
  // loop:true,
  onInit:function(swiper){
    swiperAnimateCache(swiper);
    swiperAnimate(swiper);
  },
  onSlideChangeEnd:function(swiper){
    swiperAnimate(swiper);
  }
})
var swiper2 = new Swiper('.swiper-container-h',{
	 pagination: '.swiper-pagination',
	 loop:true,
	effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
	})

