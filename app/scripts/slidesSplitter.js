(function ($, window, i) {
  $.fn.responsiveSlidesSplitter = function () {

    var i;
    var masters = $($(this).siblings()[0]).find('a');
    var slaves = $($(this).siblings()[1]).find('a');

    $(masters).on('click', function(){
      var li = $(this).parent();
      var parent = li.parent()
      var index = parent.find('li').index(li);
      $(slaves[index]).click();
    });
  };
})(jQuery, this, 0);
