$('#menuIcon').hover(function () {
  $(this).attr('src', '/images/MenuIconHover.png');
}, function () {
  $(this).attr('src', '/images/MenuIcon.png');
});

$('aside>div>img:nth-child(1)').hover(function () {
  $(this).attr('src', '/images/closeAsideButtonHover.png');
}, function () {
  $(this).attr('src', '/images/closeAsideButton.png');
});

$('#findOutMoreLink').hover(function () {
  $(this).find('img').attr('src', '/images/ArrowDownHover.png');
}, function () {
  $(this).find('img').attr('src', '/images/ArrowDown.png');
});


var defineDevice = function () {
  if ($('html').hasClass('desktop')) {
    return '-669px';
  } else if ($('html').hasClass('mobile') || $('html').hasClass('tablet')) {
    return '-100%';
  }

};

var closeLeftMenu = function () {
  $('aside').animate({
    left: defineDevice()
  }, 500);
};

var openLeftMenu = function () {
  $('aside').animate({
    left: '0px'
  }, 500);
};

var linksToPicturesRelations = {
  'images/MainSliderSlide01.jpg': '#canBus',
  'images/MainSliderSlide02.jpg': '#driverChecksApp',
  'images/MainSliderSlide03.jpg': '#trailerTracking',
  'images/MainSliderSlide04.jpg': '#camera'
};

var setLink = function () {
  
  $('section#mainSlider>ul.linker>li').map(function (index, li) {
    if ($(li).attr('class') && $(li).attr('class').indexOf('on')) {
      $('#findOutMoreLink>a').map(function (index, a) {
        $(a).attr('href', linksToPicturesRelations[$($(li).children()[0]).attr('src')]);
      });
    }
  })
};

$(document).ready($(function () {
  $('.rslides').responsiveSlides({
    auto: false, // Boolean: Animate automatically, true or false
    speed: 500, // Integer: Speed of the transition, in milliseconds
    timeout: 4000, // Integer: Time between slide transitions, in milliseconds
    pager: true, // Boolean: Show pager, true or false
    nav: false, // Boolean: Show navigation, true or false
    random: false, // Boolean: Randomize the order of the slides, true or false
    pause: false, // Boolean: Pause on hover, true or false
    pauseControls: true, // Boolean: Pause when hovering controls, true or false
    prevText: 'Previous', // String: Text for the "previous" button
    nextText: 'Next', // String: Text for the "next" button
    maxwidth: '', // Integer: Max-width of the slideshow, in pixels
    navContainer: '', // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: '', // Selector: Declare custom pager navigation
    namespace: 'rslides', // String: Change the default namespace used
    before: function () {}, // Function: Before callback
    after: function () {} // Function: After callback
  });
  $('.rslidesAuto').responsiveSlides({
    auto: true, // Boolean: Animate automatically, true or false
    speed: 500, // Integer: Speed of the transition, in milliseconds
    timeout: 4000, // Integer: Time between slide transitions, in milliseconds
    pager: true, // Boolean: Show pager, true or false
    nav: false, // Boolean: Show navigation, true or false
    random: false, // Boolean: Randomize the order of the slides, true or false
    pause: false, // Boolean: Pause on hover, true or false
    pauseControls: true, // Boolean: Pause when hovering controls, true or false
    prevText: 'Previous', // String: Text for the "previous" button
    nextText: 'Next', // String: Text for the "next" button
    maxwidth: '', // Integer: Max-width of the slideshow, in pixels
    navContainer: '', // Selector: Where controls should be appended to, default is after the 'ul'
    manualControls: '', // Selector: Declare custom pager navigation
    namespace: 'rslides', // String: Change the default namespace used
    before: function () {}, // Function: Before callback
    after: function () {
        setLink();
      } // Function: After callback
  });
  $('.rslides.split').responsiveSlidesSplitter();
  $('.rslidesAuto.linker').responsiveSlidesLinker();

  if ( $('html').hasClass('desktop') && $(window).innerWidth() >= 1350){
     $(window).scroll(function(){

           slideScroll1();
           slideScroll2();
           slideScroll3();
         });
  slideScroll1();
  slideScroll2();
  slideScroll3();
  }

  setLink();


}));

$(function () {
  $('a[href*="#"]:not([href="#"])').click(smoothScroll);
});

var smoothScroll = function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 100
      }, 1000);
      return false;
    }
  }
};
$(function () {
  $('#findOutMoreLink a').click(smoothScroll);
});

var slideScroll1 = function () {
  

  var basePadding = 50;
  var bottomPadding = 50;

  /*--------search elements---------*/
  var $divToPadding = $('.canBusScroll');
  var $section = $('#canBus');
  var $scrollText = $('div.canBusText');
  var $text = $($scrollText).children('a');


  var top = $(document).scrollTop();
  var windowWidth = $(window).innerWidth();
  var sectionPosition = $($section).offset().top;
  var headerHeight = $('nav.header').outerHeight();
  var sectionHeight = $($section).outerHeight();
  var childHeight =$divToPadding.children('div').outerHeight(); 

  var nativeAppsHeight = windowWidth/16*9*3 + 'px';
  var newPadding = top -  sectionPosition + headerHeight + basePadding;
  var how = $($scrollText).length
  var scrollTextHeignt = 100 / how + '%'
  /*--------add css for scroll---------*/

  $($section).css('height', nativeAppsHeight );
  $($divToPadding).css({'height':'100%',
                         'paddingTop': basePadding,
                          'float':'right',
                          'width': '62%'})
                  .children('div').css({'width': '100%'});
  $($scrollText).removeClass('scrollText--hide')
                  .css('height', scrollTextHeignt);
  
  /*--------fixed block---------*/

  if (sectionHeight <= (childHeight + basePadding + newPadding + bottomPadding) ){

    var stopPadding = sectionHeight - childHeight - basePadding - bottomPadding;  
    $divToPadding.css('paddingTop', stopPadding);

    return
  }

  if( top >= (sectionPosition - headerHeight) ){
          $divToPadding.css('paddingTop', newPadding)
         };

  /*--------switch slider---------*/

  
   if ( $($text[1]).offset().top < top ){
    $( '.rslides1_s3' ).click();
    return;
  }
  if ( $($text[0]).offset().top < top ){
    $( '.rslides1_s2' ).click();
    return;
  } else{
    $( '.rslides1_s1' ).click();
  }


   
}

var slideScroll2 = function () {
  

  var basePadding = 50;
  var bottomPadding = 50;
  
  /*--------search elements---------*/
  var $divToPadding = $('.webUserScroll');
  var $section = $('#webUserInterface');
  var $scrollText = $('div.webUserText');
  var $text = $($scrollText).children('a');


  var top = $(document).scrollTop();
  var windowWidth = $(window).innerWidth();
  var sectionPosition = $($section).offset().top;
  var headerHeight = $('nav.header').outerHeight();
  var sectionHeight = $($section).outerHeight();
  var childHeight =$divToPadding.children('div').outerHeight(); 

  var nativeAppsHeight = windowWidth/16*9*3 + 'px';
  var newPadding = top -  sectionPosition + headerHeight + basePadding;
  var how = $($scrollText).length
  var scrollTextHeignt = 100 / how + '%'
  /*--------add css for scroll---------*/

  $($section).css('height', nativeAppsHeight );
  $($divToPadding).css({'height':'100%',
                         'paddingTop': basePadding,
                          'float':'left',
                          'width': '57%'})
                  .children('div').css({'width': '100%'});
  $($scrollText).removeClass('scrollText--hide')
                  .css('height', scrollTextHeignt);
  
  /*--------fixed block---------*/

  if (sectionHeight <= (childHeight + basePadding + newPadding + bottomPadding) ){

    var stopPadding = sectionHeight - childHeight - basePadding - bottomPadding;  
    $divToPadding.css('paddingTop', stopPadding);

    return
  }

  if( top >= (sectionPosition - headerHeight) ){
          $divToPadding.css('paddingTop', newPadding)
         };

  /*--------switch slider---------*/

 if ( $($text[2]).offset().top < top ){
     $( '.rslides2_s4' ).click();
     return;
  }
   if ( $($text[1]).offset().top < top ){
    $( '.rslides2_s3' ).click();
    return;
  }
  if ( $($text[0]).offset().top < top ){
    $( '.rslides2_s2' ).click();
    return;
  } else{
    $( '.rslides2_s1' ).click();
  }


   
}

var slideScroll3 = function () {
  

  var basePadding = 50;
  
  /*--------search elements---------*/
  var $divToPadding = $('#fixScroll');
  var $section = $('#nativeApps');
  var $scrollText = $('div.scrollText');
  var $text = $($scrollText).children('a');


  var top = $(document).scrollTop();
  var windowWidth = $(window).innerWidth();
  var sectionPosition = $($section).offset().top;
  var headerHeight = $('nav.header').outerHeight();
  var sectionHeight = $($section).outerHeight();
  var childHeight =$divToPadding.children('div').outerHeight(); 

  var nativeAppsHeight = windowWidth/16*9*3 + 'px';
  var newPadding = top -  sectionPosition + headerHeight + basePadding;
  var how = $($scrollText).length
  var scrollTextHeignt = 100 / how + '%'

  /*--------add css for scroll---------*/

  $($section).css('height', nativeAppsHeight );
  $($divToPadding).css({'height':'100%', 'paddingTop': basePadding})
                  .children('div').css({'alignSelf':'baseline'});
  $($scrollText).removeClass('scrollText--hide')
                  .css('height', scrollTextHeignt );
  
  /*--------fixed block---------*/

  if (sectionHeight <= (childHeight + basePadding + newPadding) ){

    var stopPadding = sectionHeight - childHeight - basePadding;  
    $divToPadding.css('paddingTop', stopPadding);

    return
  }

  if( top >= (sectionPosition - headerHeight) ){
          $divToPadding.css('paddingTop', newPadding)
         };

  /*--------switch slider---------*/

  if ( $($text[2]).offset().top < top ){
     $( '.rslides3_s4' ).click();
     return;
  }
   if ( $($text[1]).offset().top < top ){
    $( '.rslides3_s3' ).click();
    return;
  }
  if ( $($text[0]).offset().top < top ){
    $( '.rslides3_s2' ).click();
    return;
  } else{
    $( '.rslides3_s1' ).click();
  }


   
}
