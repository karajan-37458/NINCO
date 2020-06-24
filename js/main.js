$(function(){

  //TOPのスライダー
  $('.top-slider').slick({
    autoplay:true,
    dots:true,
    speed:1500,
    easing:'swing',
    centerMode:true,
    centerPadding:'25%',
    prevArrow:'<div class="slide-btn prev-btn"></div>',
    nextArrow:'<div class="slide-btn next-btn"></div>',
    responsive:[
			{
				breakpoint:768,
				settings:{
					centerPadding:'0%',
					slidesToShow:1,
					slidesToScroll:1,
				}
			}
		]
  });

  // ハンバーガーメニュー
	$('.menu-trigger').on('click', function() {
		$(this).toggleClass('is-active');
		$('.header-links').toggleClass('is-active');
  });

  // サイズの選択
  $('.item-size-list li').on('click', function() {
    const select_size = $(this).text();
    $(this).addClass('is-active');
    $(this).siblings('li').removeClass('is-active');
    $('.item-size-select span').text(select_size);
  })

  // レビュー
  let review_num = 0;
  $('.review li').on('click', function() {
    if( review_num == $('.review li').index(this) + 1){
      $('.review li').removeClass('is-active');
      review_num = 0;
    }else{
      review_num = $('.review li').index(this) + 1;
      $('.review li').removeClass('is-active');
      $(`.review li:lt('${review_num}')`).addClass('is-active');
    }
  });

  //アイテム詳細説明文アコーディオン
	$('[data-accordion="trigger"]').on('click', function() {
		$(this).toggleClass('is-active');
		$(this).next().slideToggle();
	});
  
  
});

$(window).on("scroll", function() {

	//ころりん
	if( $(window).scrollTop() > 300 ){
		$('.circle-banner').addClass('is-over');
	}else{
		$('.circle-banner').removeClass('is-over');
	}
	if( $(window).scrollTop() > $('.footer').offset().top - 1000 ){
		$('.circle-banner').removeClass('is-over');
	}

	//フェイドイン
	$('[data-fadeIn]').each(function(index, el) {
		if( $(window).scrollTop() > ( $(el).offset().top - $(window).height() / 2 ) ){
			$(el).addClass('is-over');
		}
	});

});

$(window).on("load", function() {
  // ローディング
  setTimeout(function() {
      $('.loader').fadeOut();
  },600)
});