'use strict';

{  

	// 文字がフワッと表れる処理とヘッダーの処理
	
	function inViewCallback(entries,obs) {
		entries.forEach(function(entry){
			if(!entry.isIntersecting) {
				return;
			}
			entry.target.classList.add('appear');
			obs.unobserve(entry.target);
		})
	}


	function onScrolledCallback(entries) {
		entries.forEach(function(entry) {
			if(!entry.isIntersecting) {
				header.classList.add('scrolled');
			} else {
				header.classList.remove('scrolled');
			}
		});
	}

	const header = document.querySelector('header');

	const inViewObserver = new IntersectionObserver(inViewCallback,{threshold:0.4}) 
  
	document.querySelectorAll('.animate').forEach(function(el){
		inViewObserver.observe(el);
	})


	const onScrolledObserver = new IntersectionObserver(onScrolledCallback)

	onScrolledObserver.observe(document.getElementById('target'));


	// ロゴを押すと上に戻る処理

    document.querySelector('header .logo').addEventListener('click',function(e){
		e.preventDefault();

		window.scrollTo({
			top:0,
			behavior:'smooth'
		});
    })



   // モーダルウィンドウとハンバーガーメニュー

  $(function(){
  	$('#open').on('click',function(){
  		$('#modal').addClass('show');
  		$('#overlay').addClass('show');
  	})

  	$('#modal').on('click',function(){
  		$('#modal').removeClass('show');
  		$('#overlay').removeClass('show');
  	})

  	$('#overlay a').on('click',function(){
  		$('#modal').removeClass('show');
  		$('#overlay').removeClass('show');
  	})

  	// スムーズスクロール

  	$('a[href^="#"]').click(function(){
    　　var speed = 500;
    	var href= $(this).attr("href");
    	var target = $(href == "#" || href == "" ? 'html' : href);
    	var position = target.offset().top;
    	$("html, body").animate({scrollTop:position}, speed, "swing");
    	return false;
  	});

  	})

}