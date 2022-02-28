
(function($) {
    "use strict";

	/* Preloader */
	$(window).on('load', function() {
		const preloaderFadeOutTime = 500;

		function hidePreloader() {
			const preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});


	/* Navbar Scripts */
    $(window).on('scroll load', function() {
		if ($(".navbar").offset().top > 20) {
			$(".fixed-top").addClass("top-nav-collapse");
		} else {
			$(".fixed-top").removeClass("top-nav-collapse");
		}
    });

	$(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			const $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});


    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


	$('.filters-button-group').on( 'click', 'a', function() {
		const filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
    });


    $('.button-group').each( function( i, buttonGroup ) {
		const $buttonGroup = $(buttonGroup);
		$buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });


	let a = 0;
	$(window).scroll(function() {
		if ($('#counter').length) {
			const oTop = $('#counter').offset().top - window.innerHeight;
			if (a === 0 && $(window).scrollTop() > oTop) {
			$('.counter-value').each(function() {
				const $this = $(this),
					countTo = $this.attr('data-count');
				$({
				countNum: $this.text()
				}).animate({
					countNum: countTo
				},
				{
					duration: 2000,
					easing: 'swing',
					step: function() {
					$this.text(Math.floor(this.countNum));
					},
					complete: function() {
					$this.text(this.countNum);

					}
				});
			});
			a = 1;
			}
		}
    });



    $("input, textarea").keyup(function(){
		if ($(this).val() !== '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });

})(jQuery);
