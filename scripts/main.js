$(document).ready(function(){

  $('.overlay').hide();

  $('.images').hover(function(){
    $('.overlay').show();
  },
  function() {
    $('.overlay').hide();
  });

  // $(.'like').on('click', function() {
  //   $(.'like').css('background: 'url('img/space-624054_960_720.jpg')' center no-repeat;')
  // });


});
