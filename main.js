$(function() {
    let date = new Date();
    $("#year").html(date.getFullYear());
  });
  

/**
   * Typewritter
   */
var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    startDelay: 30,
    typeSpeed:100,
    backSpeed:80,
    showCursor:false,
    loop: true,
  });

