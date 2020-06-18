$(function(){
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: true,
		loop: false,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		onInitialized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		}
	})


	// Основной слайдер на главной
	$('.main_slider2 .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: true,
		loop: false,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		onInitialized: function(event){
			setTimeout(function(){
				let dotsOffset = $(event.target).find('.owl-dots').offset()

				$(event.target).find('.owl-nav button.owl-prev').css(
					'left', (dotsOffset.left - 12)
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let dotsOffset = $(event.target).find('.owl-dots').offset()

				$(event.target).find('.owl-nav button.owl-prev').css(
					'left', (dotsOffset.left - 12)
				)
			}, 100)
		}
	})


	// Основной слайдер на главной
	$('.main_slider3 .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: true,		
		loop: false,
		smartSpeed: 750,
		autoplay: true,
		autoplayTimeout: 5000,
		onInitialized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsOffset = $(event.target).find('.owl-dots').offset()

				let dotsW = $(event.target).find('.owl-dots').width()

				console.log(dotsOffset);

				$(event.target).find('.owl-nav button.owl-prev').css(
					'left', (dotsOffset.left - 10)
				)

				$(event.target).find('.owl-nav button.owl-next').css(
					'left', (dotsOffset.left  + dotsW )
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsOffset = $(event.target).find('.owl-dots').offset()

				$(event.target).find('.owl-nav button.owl-prev').css(
					'left', (dotsOffset.left - 10)
				)

				$(event.target).find('.owl-nav button.owl-next').css(
					'left', (dotsOffset.left + arrW + 30)
				)
			}, 100)
		}
	})


	// Отзывы
	$('.reviews .slider').owlCarousel({
		items: 1,
		margin: 73,
		nav: true,
		dotsEach : true,
		dots: true,
		loop: false,
		smartSpeed: 750,
		onInitialized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		}
	})


	// Статьи
	$('.articles .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		dotsEach : true,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        768:{
	            items: 2,
	            margin: 20
	        },
	        1024:{
	            items: 3,
	            margin: 20
	        },
	        1200:{
	            items: 3,
	            margin: 36
	        }
		},
		onInitialized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		}
	})


	// Видео отзывы
	$('.video_reviews .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		loop: false,
		dotsEach : true,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        768:{
	            items: 2,
	            margin: 20
	        },
	        1024:{
	            items: 3,
	            margin: 20
	        },
	        1200:{
	            items: 3,
	            margin: 36
	        }
		},
		onInitialized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		}
	})


	// Акции
	$('.stocks .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		dotsEach : true,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        1024:{
	            items: 2,
	            margin: 20
	        },
	        1200:{
	            items: 2,
	            margin: 36
	        }
		},
		onInitialized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		}
	})


	// Сотрудники
	$('.team .slider').owlCarousel({
		items: 1,
		margin: 73,
		nav: true,
		dotsEach : true,
		dots: true,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        768:{
	            items: 2,
	            margin: 20
	        },
	        1024:{
	            items: 3,
	            margin: 20
	        },
	        1200:{
	            items: 3,
	            margin: 36
	        }
		},
		onInitialized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		}
	})


	// Вакансии
	$('.vacancies .slider').owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		dotsEach : true,
		loop: false,
		smartSpeed: 750,
		responsive: {
	        0:{
	            items: 1,
	            margin: 20
	        },
	        1024:{
	            items: 2,
	            margin: 20
	        },
	        1200:{
	            items: 2,
	            margin: 36
	        }
		},
		onInitialized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		},
		onResized: function(event){
			setTimeout(function(){
				let arrW = $(event.target).find('.owl-nav button').width()
				let dotsW = $(event.target).find('.owl-dots').width()

				$(event.target).find('.owl-nav button.owl-next').css(
					'margin-right', (dotsW / -2) - arrW - 10
				)

				$(event.target).find('.owl-nav button.owl-prev').css(
					'margin-left', (dotsW / -2) - arrW - 10
				)
			}, 100)
		}
	})


	// Меню в шапке
	$('header .menu').flexMenu({		
		showOnHover: true,
		linkText: '<span>ОСТАЛЬНОЕ</span>',
		linkTitle: '',
		linkTextAll: 'Меню',
	})

	//социальные сети
	if($('.mob_scroll .socials a').length>4)
	{
		$(".mob_scroll .socials a").eq(2).after($('<a href="/" class="more"><img src="./images/dot2.svg" alt=""><div class="arrow"><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5L0 0L9 0L4.5 5Z" fill=""/></svg></div><div class="more_block"></div></a>'));
		$('.mob_scroll .socials a').each(function( index, element ) {
			if(index>3)
			{
				$(element).clone(true).appendTo(".mob_scroll .more_block");
				(element).remove();
			}
		});
	}
	$('body').on('click', '.mob_scroll .more_block a', function(e) {
		var href = $(this).attr('href');
      	window.open(href, '_blank');
	});

	$('body').on('click', '.mob_scroll a.more', function(e) {
    	e.preventDefault()
    });


	if($('.mob_header .socials a').length>4)
	{
		$(".mob_header .socials a").eq(2).after($('<a href="/" class="more"><img src="./images/dot2.svg" alt=""><div class="arrow"><svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5L0 0L9 0L4.5 5Z" fill=""/></svg></div><div class="more_block"></div></a>'));
		$('.mob_header .socials a').each(function( index, element ) {
			if(index>3)
			{
				$(element).clone(true).appendTo(".mob_header .more_block");
				(element).remove();
			}
		});
	}
	$('body').on('click', '.mob_header .more_block a', function(e) {
		var href = $(this).attr('href');
      	window.open(href, '_blank');
	});


	$('body').on('click', '.mob_header a.more', function(e) {
    	e.preventDefault()
    });

   	if($('.mob_header .contacts a').length>2)
	{	
		$('.mob_header .contacts a').each(function( index, element ) {
			if(index>2)
			{
				$(element).clone(true).appendTo(".mob_header .more_block").addClass("new_contact");
				(element).remove();
			}
		});
	}




	// Фильтр
	$('body').on('click', 'aside .mob_filter_link', function(e) {
    	e.preventDefault()

    	if( $(this).hasClass('active') ) {
			$(this).removeClass('active')
			$('aside .filter').fadeOut(200)
			$('.overlay').fadeOut(200)
		} else {
			$(this).addClass('active')
			$('aside .filter').fadeIn(300)
			$('.overlay').fadeIn(300)
		}
	})

	$('aside .filter .close, .overlay, aside .block .title .close').click(function(e){
		e.preventDefault()
	    $('aside .mob_filter_link').removeClass('active')
		$('aside .filter').fadeOut(200)
		$('.overlay').fadeOut(200)
	})


	$priceRange = $('.filter #price_range').ionRangeSlider({
        type     : 'double',
        min      : 0,
        max      : 10000,
        from     : 1000,
        to       : 5000,
        step     : 10,
        postfix  : ' ₽'
    }).data("ionRangeSlider")


    // Таймер
	$('.timer').each(function(){
		let timerDate = $(this).data('date')


		$(this).countdown(timerDate, function(event) {
			let daysArr = event.strftime( '%D' ).split('')
			let hoursArr = event.strftime( '%H' ).split('')
			let minutesArr = event.strftime( '%M' ).split('')
			let secondsArr = event.strftime( '%S' ).split('')

			$(this).html( event.strftime(String()
				+ '<div class="item">'
					+ '<div class="val"><span>'+daysArr[0]+'</span><span>'+daysArr[1]+'</span></div>'
					+ '<div>дней</div>'
				+ '</div>'

				+ '<div class="item">'
					+ '<div class="val"><span>'+hoursArr[0]+'</span><span>'+hoursArr[1]+'</span></div>'
					+ '<div>часов</div>'
				+ '</div>'

				+ '<div class="item">'
					+ '<div class="val"><span>'+minutesArr[0]+'</span><span>'+minutesArr[1]+'</span></div>'
					+ '<div>минут</div>'
				+ '</div>'

				+ '<div class="item">'
					+ '<div class="val"><span>'+secondsArr[0]+'</span><span>'+secondsArr[1]+'</span></div>'
					+ '<div>секунд</div>'
				+ '</div>'
				) )
		})
	})


	// До/После
	$('.before_after .item').each(function(){
		$(this).beforeAfter()
	})


	// Фото с маркерами
	$('.image_tips .image .btn').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.image')
		let info = $(this).data('info')

		if( $(this).parents('.item').hasClass('active') ) {
			parent.find('.item').removeClass('active')
			parent.find('.info').hide()
		} else {
			parent.find('.item').removeClass('active')
			parent.find('.info').hide()

			$(this).parents('.item').addClass('active')
			parent.find(info).fadeIn(300)
		}
	})

	$('.image_tips .image .close').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.image')

		parent.find('.item').removeClass('active')
		parent.find('.info').hide()
	})


	// Квиз-Опрос
	$('.quiz_poll .step .links .next').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.steps')
		let nextStep = $(this).data('step')

		if($(this).hasClass("valide"))
		{
			let check = $(this).parent().prev().find("input");

			if(check.val()!="")
			{	
				check.removeClass("error");			
				parent.find('.step').hide()
				parent.find(nextStep).fadeIn(300)
			}
			else
			{
				check.addClass("error");
			}
		}
		else
		{
			parent.find('.step').hide()
			parent.find(nextStep).fadeIn(300)
		}
	})


	$("input[name='agree']").change(function () {
		if (this.checked) {
			$(this).closest("form").find("button").prop("disabled", false);
		}
		else
		{
			$(this).closest("form").find("button").prop("disabled", true);
		}
	});

	$('.product_delete').click(function(e){
		e.preventDefault();
		$(this).parent().parent().remove();
	});


	// Покупка товара
	$('.product_info .buy .buy_link').click(function(e){
		e.preventDefault()

		let parent = $(this).closest('.btn')

		$(this).addClass('bounceOut')
		parent.find('.order_link').delay(750).fadeIn(300)
	})

	// Социальная выпадашка
	$('header .socials a.more, .mob_header .socials a.more').click(function(e){
		e.preventDefault()
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active")
		}
		else
		{
			$(this).addClass("active")
		}
		
	})

	$('.products_sort_mobile .schema-order__link').click(function(e){
		e.preventDefault()	
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			$(".schema-order__popover").hide();
		}	
		else
		{
			$(this).addClass("active");
			$(".schema-order__popover").show();
		}

	})


	// Логотип
	$('.resizeble-font').each(function () {
        let length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length,
            size = $(this).width() / length * parseFloat($(this).data('ratio'))

        if( size > 33 ) {
        	size = 33
        }

        if( size < 16 ) {
        	size = 16
        }
        size2 = size+4
        $(this).css('font-size', size + 'px').css('line-height', size2 + 'px')
    })

    $('.resizeble-font2').each(function () {
        let length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length,
            size = $(this).width() / length * parseFloat($(this).data('ratio'))

        if( size > 16 ) {
        	size = 16
        }

        if( size < 10 ) {
        	size = 10
        }

        $(this).css('font-size', size + 'px')
    })


    $('.resizeble-font3').each(function () {
        let length = $(this).text().replace(/^\s+|\s+$|\(|\)|8-/gm, '').length,
            size = $(this).width() / length * parseFloat($(this).data('ratio'))

        if( size > 48 ) {
        	size = 48
        }

        if( size < 14 ) {
        	size = 14
        }

        size2 = size+3

        $(this).css('font-size', size + 'px').css('line-height', size2 + 'px')
    })


    $('.apply').click(function(e){
		//e.preventDefault()
		let color1 =  $(".color1").val();
    	let color2 =  $(".color2").val();

		localStorage.setItem('color1', color1);
		localStorage.setItem('color2', color2);

		window.location.reload(true)
	});

	$('.clear').click(function(e){
		//e.preventDefault()
		localStorage.removeItem('color1');
		localStorage.removeItem('color2');
		window.location.reload(true)
	});

		

    let color1 = localStorage.getItem('color1');
    let color2 = localStorage.getItem('color2');

    if(color1!=null)
    {
	    $(".color1").val(color1);
	    $(".color2").val(color2);

	    var root = document.querySelector(':root');
	    root.style.setProperty('--main_color1', color1);
	    root.style.setProperty('--main_color2', color2);

	    let rgba = hexDec(color1);
	    
	    root.style.setProperty('--box-shadow-color', "rgba("+rgba+",0.54)");

	    let rgba_opacity = hexDec(color2);

	    root.style.setProperty('--main_color_opacity', "rgba("+rgba_opacity+",0.1)");	    
    }






	/*SVG CHANGE*/

	/*var svg = '<svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.577449 18.6286L8.23728 10.9902L0.577449 3.35168C-0.192483 2.58389 -0.192483 1.34362 0.577449 0.575839C1.34738 -0.191946 2.59112 -0.191946 3.36105 0.575839L12.4226 9.61208C13.1925 10.3799 13.1925 11.6201 12.4226 12.3879L3.36105 21.4242C2.59112 22.1919 1.34738 22.1919 0.577449 21.4242C-0.172741 20.6564 -0.192483 19.3964 0.577449 18.6286Z" fill="'+color1+'"/></svg>';

	var encoded = window.btoa(svg);	
	document.styleSheets[0].addRule('.faq .item .title::after',"background-image: url(data:image/svg+xml;base64,"+encoded+")");*/

})

function hexDec(h){
	var m=h.slice(1).match(/.{2}/g);
	 
	m[0]=parseInt(m[0], 16);
	m[1]=parseInt(m[1], 16);
	m[2]=parseInt(m[2], 16);
	 
	return(m.join(','));
 };


 $(window).scroll(function() {	
	if($("body").hasClass("header_fixed"))
	{
		if($(window).width() > 1023)
		{
			if ($(window).scrollTop() > 0) {
				$('header').addClass('fixed')
				if($("div").is(".warning"))
				{
					$('header').css("top", $(".warning").innerHeight()+"px")
				}	
			} else {
				$('header').removeClass('fixed')
				if($("div").is(".warning"))
				{
					$('header').css("top", "0px")
				}	
			}

		}
		else 
		{
			if ($(window).scrollTop() > 0) {
				$('.mob_header').addClass('fixed')
				if($("div").is(".warning"))
				{
					$('.mob_header').css("top", $(".warning").innerHeight()+"px")
				}	
			} else {
				$('.mob_header').removeClass('fixed')
				if($("div").is(".warning"))
				{
					$('.mob_header').css("top", "0px")
				}
			}
		}
	}
})