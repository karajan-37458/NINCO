$(function(){
	const page_type = $('.contents').attr('id');
	const param_key = location.search.substring(1).split('=')[0];
	const param_value = location.search.substring(1).split('=')[1];
  const categorys = ['men', 'women', 'kids'];

	let more_count = {
		'brand':3,
		'items':10
	}

	function moreControl(el, num) {
		const more_type = $(el).attr('data-more-btn');
		const target_list = $(`[data-more-list="${more_type}"]`);
		const max_count = target_list.find('li').length;
		more_count[more_type] += num;
		target_list.find(`li:lt(${more_count[more_type]})`).fadeIn();
		if( more_count[more_type] >= max_count ){
			$(el).hide();
		}
	}

  //オブジェクトをhtmlに変換する
	//返り値：html
  function createDom(items) {
    let html_template = '';
    items.forEach(function(item, index){
      html_template += `<li class="item">
            <a href="#">
              <div class="item-cap"><img src="./img/item/${item['id']}.png"></div>
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
	
	function searchWordShow() {
		let result_text;
		if( param_key == 'price' ){
			result_text = `〜${param_value}円`;
			$(`.price-select option[value="${param_value}"]`).prop('selected', true);
		}else{
			result_text = param_value;
		}
		$('.result-text').text(decodeURI(result_text));
	}

  function getItemList(key, value = null){
		const search_value = value ? value : param_value;
		const items = item_data.filter(function(item, index) {
			switch(key){
				case 'brand':
				case 'category':
					return item[key] == search_value
					break;
				case 'new':
					return item['new']
					break;
			}
    });
    return items;
	}

  function pickUpShuffle(item_data) {
		let items = [];
		let rand_check = [];
		for( let i = 0; i < 6; i++ ){
			let j = Math.floor(Math.random() * item_data.length);
			if( rand_check.indexOf(j) !== -1 ){
				i--;
				continue;
			}else{
				rand_check.push(j);
				items.push(item_data[j]);
			}
		}
		return items;
	}

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
  
  if( page_type == 'page-index' ){
		let item_list_new = getItemList('new');
		$('[data-item-list="new"]').append(createDom(item_list_new));
		categorys.forEach(function(category){
			let item_list_category = getItemList('category', category);
			item_list_category = createDom(item_list_category);
			$(`[data-item-list="${category}"]`).append(item_list_category);
		});
	}

	let item_list_pickup = createDom(pickUpShuffle(item_data));
	$('[data-item-list="pickup"]').append(item_list_pickup);

	$('[data-more-btn="brand"]').on('click',function(){
    moreControl($(this), 3);
  });
  $('[data-more-btn="items"]').on('click',function(){
    moreControl($(this), 10);
	});

	if( page_type == 'page-detail' ){
		$('[data-zoom-image]').elevateZoom();
	}
	
	if( page_type == 'page-list' ){
		const item_list = createDom(getItemList(param_key));
		$('.sort-list').append(item_list);
		$('.price-select').on('change', function(){
			$('#price-form').submit();
		});
	}
  
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