$(function(){
	// Основной слайдер на главной
	$('.main_slider .slider').owlCarousel({
		items: 1,
		margin: 0,
		nav: true,
		dots: true,
		loop: true,
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
		loop: true,
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
		loop: true,
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


	if($(window).width() < 480)
	{
		var config = {
	      elements: {
	        email:"hallo@f2.codes",
	        phone: "+490000000000",
	        whatsApp: "79120374755",	        
	        viber: "79120374755",
	        facebook: "123",
	      },
	      position: {
	        left: "10px",
	        bottom: "10px"
	      }
	    };
	    buildContactButton(config);

	}


	$('.tab_filter_title').click(function(e){
		e.preventDefault()	
		if($(this).hasClass("active"))
		{
			$(this).removeClass("active");
			$(this).next().slideUp();
		}	
		else
		{
			$(this).addClass("active");
			$(this).next().slideDown();
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


function buildContactButton(config){
	var idNames = [
	 "firstButton", 
	 "secondButton", 
	 "thirdButton",
	 "fourthButton", 
	 "fifthButton", 
	 "sixthButton", 
	 "seventhButton" 
	];
	var idNamesPointer = 0;
	var button = "";

	button = '<div id="contactButton" style="bottom:'+config.position["bottom"]+'; left:'+config.position["left"]+'">';
	if(Object.keys(config.elements).length > 1) {
	button += '<a id="shadow-element" class="contact-button shadow"></a>';
	    button += '<a onclick="toggleUp(this)" style="background-color: #ee3b24" id="'+idNames[idNamesPointer]+'" class="main-button contact-button" role="button"><svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comments" class="svg-inline--fa fa-comments fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path></svg></a>';
	    idNamesPointer++;
	}

	if(config.elements["email"]) {
	    button += '<a href="mailto:'+config.elements["email"]+'" style="background-color: #EF771E;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.55639 0.79361L7.55639 0.79361C7.55997 0.793301 7.56355 0.792991 7.56714 0.792972H7.57216C9.96258 0.792972 12.3525 1.64863 14.2614 3.36174C14.4297 3.51272 14.5369 3.70391 14.5942 3.9079C14.6016 3.92653 14.6066 3.94401 14.6118 3.96278C14.7024 4.35748 14.5946 4.79436 14.2915 5.10232L13.5632 5.84245C13.1338 6.2789 12.4555 6.31779 11.9798 5.93688L10.7969 4.98237C10.7188 4.91957 10.6525 4.84738 10.5934 4.76926L10.5583 4.75012C10.3667 4.64755 10.2488 4.44583 10.2481 4.22565L10.2418 2.42381C9.37354 2.14713 8.473 2.0059 7.57216 2.00653C6.66773 2.0059 5.76448 2.14874 4.89245 2.42764L4.88617 4.22565C4.88488 4.44583 4.7676 4.64755 4.576 4.75012L4.56594 4.75587L4.55591 4.76161C4.49569 4.84262 4.4278 4.91743 4.34746 4.98237L3.16457 5.93688C2.6888 6.31779 2.01058 6.2789 1.5811 5.84245L0.854033 5.10232C0.606836 4.85112 0.489951 4.51374 0.503685 4.18354C0.49105 4.08295 0.511149 3.97875 0.560193 3.876C0.619839 3.68408 0.723603 3.50487 0.882914 3.36174C2.78475 1.65494 5.16481 0.800523 7.54579 0.794248C7.54934 0.794221 7.55286 0.793916 7.55639 0.79361ZM5.63835 6.01983V4.71312H6.92421V6.01983H8.21007V4.71312H9.49593V6.01983L12.2271 8.24023C12.5325 8.4885 12.7106 8.86385 12.7106 9.2611V11.9H13.3535V13.2068H1.78076V11.9H2.42369V9.2611C2.42369 8.86386 2.60175 8.48785 2.90714 8.24023L5.63835 6.01983ZM5.63835 7.9799C5.99324 7.9799 6.28128 8.27261 6.28128 8.63326C6.28128 8.99391 5.99324 9.28662 5.63835 9.28662C5.28345 9.28662 4.99541 8.99391 4.99541 8.63326C4.99541 8.27261 5.28345 7.9799 5.63835 7.9799ZM8.21007 8.63326C8.21007 8.27261 7.92204 7.9799 7.56714 7.9799C7.21224 7.9799 6.92421 8.27261 6.92421 8.63326C6.92421 8.99391 7.21224 9.28662 7.56714 9.28662C7.92204 9.28662 8.21007 8.99391 8.21007 8.63326ZM9.49593 7.9799C9.85083 7.9799 10.1389 8.27261 10.1389 8.63326C10.1389 8.99391 9.85083 9.28662 9.49593 9.28662C9.14104 9.28662 8.853 8.99391 8.853 8.63326C8.853 8.27261 9.14104 7.9799 9.49593 7.9799ZM6.28128 10.5933C6.28128 10.2327 5.99324 9.93997 5.63835 9.93997C5.28345 9.93997 4.99541 10.2327 4.99541 10.5933C4.99541 10.954 5.28345 11.2467 5.63835 11.2467C5.99324 11.2467 6.28128 10.954 6.28128 10.5933ZM7.56714 9.93997C7.92204 9.93997 8.21007 10.2327 8.21007 10.5933C8.21007 10.954 7.92204 11.2467 7.56714 11.2467C7.21224 11.2467 6.92421 10.954 6.92421 10.5933C6.92421 10.2327 7.21224 9.93997 7.56714 9.93997ZM10.1389 10.5933C10.1389 10.2327 9.85083 9.93997 9.49593 9.93997C9.14104 9.93997 8.853 10.2327 8.853 10.5933C8.853 10.954 9.14104 11.2467 9.49593 11.2467C9.85083 11.2467 10.1389 10.954 10.1389 10.5933Z" fill="white"/></svg></a>';
	    idNamesPointer++;
	}

	if(config.elements["phone"]) {
	    button += '<a href="tel:'+config.elements["phone"]+'" style="background-color: #888;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8288 8.97746L10.0318 8.77229C9.60021 8.72276 9.17571 8.87134 8.87149 9.17556L7.56969 10.4774C5.56747 9.45857 3.92607 7.82423 2.90727 5.81492L4.21614 4.50604C4.52037 4.20182 4.66894 3.77731 4.61942 3.34574L4.41424 1.56283C4.32934 0.848249 3.72797 0.310547 3.00632 0.310547H1.78234C0.98287 0.310547 0.31782 0.9756 0.367345 1.77508C0.74232 7.81716 5.57454 12.6423 11.6095 13.0173C12.409 13.0668 13.074 12.4018 13.074 11.6023V10.3783C13.0811 9.66374 12.5434 9.06236 11.8288 8.97746Z" fill="white"/></svg></a>';
	    idNamesPointer++;
	}

	if(config.elements["whatsApp"]) {
	    button += '<a target="blank" href="'+config.elements["whatsApp"]+'" style="background-color: #27D045 !important;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.02841 0.845924C10.4711 0.649461 12.7974 1.50981 14.5029 3.21494C16.7023 5.41533 17.4936 8.64633 16.4238 11.8192C15.3253 15.0731 12.1503 17.1737 8.71403 17.1737H8.71075C7.34115 17.1728 5.99612 16.8298 4.80099 16.1782L1.11158 17.1663C0.770002 17.2572 0.461186 16.9387 0.562759 16.6006L1.62437 13.0782C0.503781 11.1381 0.214624 8.78959 0.902702 6.54008C1.86601 3.39176 4.74447 1.10951 8.02841 0.845924ZM11.3377 12.8842C11.7129 12.8506 12.5476 12.3906 12.718 11.9134C12.8884 11.4361 12.8884 11.0268 12.8376 10.9425C12.7968 10.8741 12.7009 10.8278 12.5584 10.7592C12.5237 10.7424 12.4862 10.7243 12.446 10.7043C12.2421 10.602 11.237 10.1075 11.0494 10.0396C10.8618 9.97164 10.725 9.93726 10.589 10.1419C10.4531 10.3466 10.0615 10.8066 9.94192 10.9425C9.82233 11.0792 9.70355 11.0964 9.49876 10.9941C9.46479 10.977 9.41836 10.9568 9.36096 10.9318C9.07235 10.8063 8.50658 10.5602 7.85475 9.97983C7.24695 9.43873 6.83738 8.76994 6.71778 8.56529C6.59901 8.36146 6.7055 8.25013 6.80789 8.14863C6.86893 8.08762 6.93904 8.00234 7.00928 7.91689C7.04461 7.87392 7.07998 7.83089 7.11425 7.7909C7.20089 7.68895 7.23866 7.61202 7.29008 7.50727C7.29895 7.48922 7.30822 7.47034 7.31821 7.45036C7.3862 7.31448 7.3518 7.19496 7.30101 7.09264C7.2797 7.0497 7.19737 6.84689 7.09555 6.59607C6.95473 6.24919 6.77663 5.81047 6.67109 5.57578C6.51791 5.23606 6.35654 5.22869 6.21073 5.22296C6.09196 5.21805 5.95516 5.21805 5.81918 5.21805C5.68239 5.21805 5.46122 5.2688 5.27364 5.47345C5.2619 5.4862 5.24884 5.50009 5.23465 5.51516C5.02203 5.74113 4.55771 6.23459 4.55771 7.17695C4.55771 8.17568 5.28056 9.14046 5.39034 9.28699L5.39241 9.28975C5.4 9.2999 5.41435 9.32119 5.43528 9.35223C5.69439 9.73654 6.96155 11.616 8.88441 12.3734C10.4459 12.9885 10.8827 12.937 11.2294 12.896C11.2661 12.8917 11.3018 12.8875 11.3377 12.8842Z" fill="white"/></svg></a>';
	    idNamesPointer++;
	}


	if(config.elements["viber"]) {
	    button += '<a target="blank"  href="viber://add?number='+config.elements["xing"]+'" style="background-color: #8F46AD !important;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.4095 4.17713C16.1136 3.12988 15.5276 2.30263 14.6694 1.7174C13.5864 0.976689 12.3405 0.715608 11.2648 0.555733C9.77631 0.33572 8.42837 0.304919 7.14257 0.460394C5.93816 0.607069 5.03114 0.840282 4.20403 1.21724C2.58236 1.95648 1.60876 3.15188 1.31136 4.7697C1.16635 5.55588 1.0687 6.26578 1.01247 6.94342C0.882265 8.5099 1.00064 9.89598 1.3735 11.1809C1.73749 12.4335 2.37225 13.3282 3.31478 13.9163C3.55447 14.0659 3.86224 14.1745 4.15964 14.2786C4.32832 14.3373 4.49256 14.3945 4.62721 14.4576C4.75149 14.5148 4.75149 14.525 4.75001 14.6277C4.73966 15.518 4.75001 17.2635 4.75001 17.2635L4.75297 17.636H5.42768L5.53718 17.5304C5.60968 17.4629 7.28166 15.8612 7.87795 15.2159L7.95933 15.1264C8.06142 15.0091 8.06142 15.0091 8.16648 15.0076C8.9714 14.9915 9.79407 14.9607 10.6108 14.9167C11.6007 14.8639 12.7474 14.7685 13.8275 14.3226C14.8159 13.9134 15.538 13.2636 15.9715 12.3924C16.4243 11.483 16.6921 10.4988 16.7927 9.38262C16.9703 7.42011 16.8445 5.71722 16.4095 4.17713ZM12.8495 11.8086C12.6009 12.209 12.231 12.4877 11.7945 12.6681C11.4749 12.8001 11.1494 12.7723 10.8342 12.6403C8.19607 11.5329 6.12607 9.78891 4.75889 7.28077C4.54882 6.89699 4.38698 6.48728 4.22537 6.07814C4.16957 5.93686 4.11379 5.79566 4.05607 5.65561C4.02513 5.58042 4.01641 5.49589 4.00765 5.41101C4.00342 5.37006 3.99919 5.32903 3.99244 5.28893C4.01168 4.40741 4.69379 3.91018 5.3833 3.76058C5.64667 3.70191 5.88045 3.79431 6.07576 3.98059C6.61731 4.49102 7.04492 5.08505 7.36748 5.75095C7.50804 6.04284 7.44442 6.30098 7.20472 6.51806C7.15441 6.56353 7.10262 6.6046 7.04788 6.64567C6.50042 7.05342 6.42052 7.36291 6.712 7.97748C7.20916 9.02327 8.03479 9.72584 9.1016 10.1615C9.38273 10.2759 9.64759 10.2187 9.86213 9.99279L9.8749 9.98025C9.90075 9.95498 9.92722 9.92911 9.94499 9.89891C10.3652 9.20368 10.9763 9.27261 11.54 9.66864C11.7634 9.82629 11.983 9.9893 12.2024 10.1522L12.2025 10.1522L12.2026 10.1523L12.2027 10.1524L12.2028 10.1525C12.3466 10.2592 12.4903 10.3659 12.635 10.4709C13.1928 10.8772 13.1883 11.2586 12.8495 11.8086ZM8.97879 4.90024C9.1016 4.8797 9.22589 4.86944 9.35018 4.86944C10.5724 4.86944 11.5681 5.85656 11.5681 7.06809C11.5681 7.19277 11.5578 7.31597 11.5371 7.43625C11.503 7.64012 11.6421 7.83373 11.8478 7.86747C11.87 7.87187 11.8907 7.87334 11.9114 7.87334C12.0934 7.87334 12.2532 7.7428 12.2843 7.55945C12.3124 7.39958 12.3257 7.23383 12.3257 7.06809C12.3257 5.44147 10.9911 4.11846 9.35018 4.11846C9.18446 4.11846 9.01726 4.13166 8.85451 4.15953C8.64736 4.19327 8.50827 4.38688 8.5423 4.59076C8.57781 4.7961 8.77165 4.93397 8.97879 4.90024ZM11.1894 7.12236C11.1894 7.32917 11.0192 7.49785 10.8106 7.49785C10.6019 7.49785 10.4318 7.32917 10.4318 7.12236C10.4318 6.50193 9.92132 5.9959 9.29543 5.9959C9.08681 5.9959 8.91665 5.82722 8.91665 5.62041C8.91665 5.4136 9.08681 5.24493 9.29543 5.24493C10.3401 5.24493 11.1894 6.08684 11.1894 7.12236ZM12.9827 8.24882C13.1558 8.24882 13.3126 8.13148 13.3526 7.95694C13.4192 7.66213 13.4532 7.35851 13.4532 7.05342C13.4532 4.8137 11.6155 2.992 9.3561 2.992C9.04834 2.992 8.74205 3.02574 8.44613 3.09321C8.24194 3.13868 8.11321 3.33962 8.16056 3.54203C8.20643 3.74444 8.40914 3.87205 8.61333 3.82511C8.85451 3.77084 9.10456 3.74298 9.3561 3.74298C11.1968 3.74298 12.6956 5.22879 12.6956 7.05342C12.6956 7.30277 12.6675 7.55065 12.6128 7.78973C12.5669 7.99214 12.6941 8.19309 12.8983 8.24002C12.9264 8.24589 12.9546 8.24882 12.9827 8.24882Z" fill="white"/></svg></a>';
	    idNamesPointer++;
	}

	if(config.elements["facebook"]) {
	    button +='<a target="blank" onclick="window.nativeShare()"  href="'+config.elements["facebook"]+'" style="background-color: #3b5998;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" class="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path></svg></a>';
	    idNamesPointer++;
	}


	if(config.elements["linkedIn"]) {
	    button += '<a target="blank"  href="'+config.elements["linkedIn"]+'" style="background-color: #0e76a8;" id="'+idNames[idNamesPointer]+'" class="shadow contact-button" role="button"><i class="fa fa-linkedin" aria-hidden="true"></i></a>';
	    idNamesPointer++;
	}
	
	button += '</div>'
	$(button).appendTo("body");
	$(".main-button").mouseover(function(){
		$("#shadow-element").css("box-shadow", "2px 2px 6px rgba(0,0,0,0.7)");
	});
	$(".main-button").mouseleave(function(){
		$("#shadow-element").css("box-shadow", "2px 2px 6px rgba(0,0,0,0.4)");
	});
}

function toggleUp(element) {
	$(".contact-button").toggleClass("up");
	$(".menu-button").toggleClass("contact-button-out");
}


window.nativeShare = () => {
    const shareLink = location.href;

    if (navigator.share) {
        // this will work on Android
        navigator
            .share({
                title: document.title,
                url: shareLink
            })
            .then(() => console.log("Successful share"))
            .catch(error => console.log("Error sharing", error));
    } else {
        alert(`native share ${shareLink}`);   
    }
};
