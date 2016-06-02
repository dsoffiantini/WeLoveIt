$(document).ready(function(){

  $('.overlay').hide();

  $('.images').hover(function(){
    $(this).find('.overlay').show();
  },
  function() {
    $('.overlay').hide();
  });

  $('.like').click(function(){
  $(this).find('img').attr('src',"./img/heart-filled.png");
  return false;
  });


});
