$(function(){

  //オブジェクトをhtmlに変換する
	//返り値：html
  function createDom(items) {
    let html_template = '';
    items.forEach(function(item, index){
      html_template += `<li class="item">
            <a href="#">
              <div class="item-cap"><img src="./img/item/${item['id']}.png"
              <div class="item-info">
                <h3 class="item-name">${item['name']}</h3>
                <h3 class="item-text">${item['text']}</h3>
                <div class="item-price">¥${item['price']}</div>
              </div>
            </a>
          </li>`
    });
    return html_template;
  }

  function getItemList(key){
    const items = item_data.filter(function(item, index) {
      switch(key){
        case 'new':
        return item['new']
        break;
      }
    });
    return items;
  }

  let news = getItemList('new');
  let new_lis = createDom(news);
  $('[data-item-list="new"]').append(new_lis);

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