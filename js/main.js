$(document).ready(function() {
  $(window).scroll(function() {
    if( $(window).scrollTop() > 70) {
      $('.container').addClass('nav-fixed');
    }else {
      $('.container').removeClass('nav-fixed');
    }
  });

  $('.manga-content').jScrollPane();

  var i = 1;
  setInterval(function() {
    if (i == 4) {
      $('.image4').removeClass('current');
      $('.image1').addClass('current');
      i = 1;
    }else {
      $('.image'+i).removeClass('current');
      i++;
      $('.image'+i).addClass('current');
    }
  },8000);
});
