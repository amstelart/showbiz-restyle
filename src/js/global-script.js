// Если на проекте jQuery
$( document ).ready(function() {

  if(window.matchMedia('(max-width: 860px)').matches)
  {
    // do functionality on screens smaller than 768px
    $('.projects__grid').loadMoreResults({
      displayedItems: 2,
      showItems: 2,
      tag: {
        'name': 'div',
        'class': 'project-card'
      },
      button: {
        'class': 'project-more-loader',
        'text': 'Загрузить еще'
      }
    });
  };

  $(".phone-mask").mask("+7(999) 999-9999" ,{autoclear: false});

  var formInputs = $('.field-text__input');
  formInputs.focus(function() {
       $(this).parent().children('.field-text__name').addClass('formTop');
  });
  formInputs.focusout(function() {
    if ($.trim($(this).val()).length == 0 || $.trim($(this).val()) == '+7(___) ___-____' ){
    $(this).parent().children('.field-text__name').removeClass('formTop');
    }
  });
  $('.field-text__name').click(function(){
     $(this).parent().children('.form-style').focus();
  });

  $('.attainment').viewportChecker({

      callbackFunction: function(elem, action){
        $('.count').each(function() {
          $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
          }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
              $(this).text(Math.ceil(now));
            }
          });
        });
      },
  });

  new WOW().init();

});


// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });

$(function() {
  // Generic selector to be used anywhere
  $(".js-scroll-to").click(function(e) {

    // Get the href dynamically
    var destination = $(this).attr('href');

    // Prevent href="#" link from changing the URL hash (optional)
    e.preventDefault();

    // Animate scroll to destination
    $('html, body').animate({
      scrollTop: $(destination).offset().top
    }, 700);
  });
});
