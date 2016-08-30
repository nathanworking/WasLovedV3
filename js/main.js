jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');

		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

var viewportWidth = $(window).width();
	// Removes the "showing on load" that is for desktop only
		if (viewportWidth < 1170) {
			var stretchyNav = $('.cd-stretchy-nav');
			stretchyNav.removeClass('nav-is-visible');
	  }

	// Use to hide on click on mobile only
		if (viewportWidth < 1170) {
			$(document).on('click', function(event){
				( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
			});
		}

	}
});

// Scrolling & Current Section
jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav ul li a');
		introItems = $('#intro a');

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

	//smooth scroll from the intro
	introItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });


	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav ul li a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('active');
			}else {
				navigationItems.eq(activeSection).removeClass('active');
			}
		});
	}

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top}
        );
	}
});


// Scrolling fucntion (show nav after hero)
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 500) {
        $('#cd-vertical-nav').fadeIn();
    } else {
        $('#cd-vertical-nav').fadeOut();
    }
});
