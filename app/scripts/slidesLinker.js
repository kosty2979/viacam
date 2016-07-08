(function ($, window, i) {
  $.fn.responsiveSlidesLinker = function () {

    //Объект с соотношением классов кнопок переключения слайдов с якорями на странице
    var linksCorrelation = {
      'rslides1_s1': '#trailerTracking',
      'rslides1_s2': '#nativeApps',
      'rslides1_s3': '#service',
      'rslides1_s4': '#camera'
    };

    //Находим все кнопки на основном слайдере
    var links = $($(this).siblings()[0]).find('a');


    $(links).on('click', function () {
      setLink($(this));
    });

    //Эта функция берет из активной кнопки на основном слайдере имя класса и с
    //помощью объекта соотношений имен классов с якорями находит и присваивает
    //большому красному квадрату новый якорь
    var setLink = function (link) {
      $('div#findOutMoreLink').children().each(

        function () { $(arguments[1]).attr('href', linksCorrelation[link[0].className]); }
      );
    };
  };
})(jQuery, this, 0);
