$('html').removeClass('no-js').addClass('js');
$('#expand17').addClass('hide');
$('#expandint').addClass('hide');
$('#expand18s').addClass('hide');
$('#expand17s').addClass('hide');

//  Release $ from jQuery controlled
$.noConflict();


(function($) {

  //  function to show the content hidden in .expand17 on click
  $('#seventeen-desc').on('click', function () {
    $('#expand17').toggleClass('hide');
  });

  //  function to show the content hidden in .expandint on click
  $('#seventeen-interview').on('click', function () {
    $('#expandint').toggleClass('hide');
  });

  //  function to show the content hidden in .expand18s on click
  $('#eighteen-stats').on('click', function () {
    $('#expand18s').toggleClass('hide');
  });

  //  function to show the content hidden in .expand17s on click
  $('#seventeen-stats').on('click', function () {
    $('#expand17s').toggleClass('hide');
  });


})(jQuery);
