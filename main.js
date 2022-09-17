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

$(function () {  
  $("#next1").click(function () { 
    $(".page1").hide();
    $(".page2").show();
});
  $("#prev1").click(function () { 
    $(".page1").hide();
    $(".page3").show();
    
  });
  $("#next2").click(function () { 
    $(".page2").hide();
    $(".page3").show();
});
  $("#prev2").click(function () { 
    $(".page2").hide();
    $(".page1").show();
    
  });
  $("#next3").click(function () { 
    $(".page3").hide();
    $(".page1").show();
});
  $("#prev3").click(function () { 
    $(".page3").hide();
    $(".page2").show();
    
  });
});  