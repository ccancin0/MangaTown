$(document).ready(function() {
  $(window).scroll(function() {
    if( $(window).scrollTop() > 70) {
      $('.container').addClass('nav-fixed');
    }else {
      $('.container').removeClass('nav-fixed');
    }
  });
});
