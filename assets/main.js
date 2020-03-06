var htext3 = $("#htext3");
var htext4 = $("#htext4");
var htext6 = $("#htext6");

htext3.hide();
htext6.hide()
$("#arrow").hide();

var pinkify = function() {
  var wh = Math.floor($(window).height() / 2.0);
  var h = Math.floor($("#htext2").height() / 2.0);
  
  $("#htext2").css('padding-top', wh - h + 'px');
  $("#htext2").css('padding-bottom', wh - h + 'px');
  
  var margin;
  if($(window).width() < 600) {
      margin = 2.1 * (wh - h) + 'px';
  } else {
      margin = 1.5 * (wh - h) + 'px';
  }
  
  if(margin < $("#htext2").height()) {
    margin = $("#htext2").height() + 20;
  }
  
  $("#htext3").css('margin-top', margin);
  $("#arrow").css('margin-top', 2*wh - 75 + 'px');
  
  var h2 = Math.floor($("#ftext").height() / 2.0);
  $("#ftext").css('padding-top', wh - h2 + 'px');
  $("#ftext").css('padding-bottom', wh - h2 + 'px');
  
  $("article").width($("#htext4").width() / 1.1);
  $("#htext5").width($("#htext4").width() / 1.1);
};

pinkify();
$("#arrow").show();


// Handlers
$(window).resize(pinkify);

var mouseenter = function() {
  $(this).hide();
  $(this).replaceWith(htext6);
  htext6.fadeIn(250);
  htext3.fadeIn(250);
};

var mouseleave = function() {
  $(this).hide();
  $(this).replaceWith(htext4);
  htext4.mouseenter(mouseenter);
  htext6.mouseleave(mouseleave);
  htext4.fadeIn(250);
  htext3.fadeOut(250);
}

htext4.mouseenter(mouseenter);
htext6.mouseleave(mouseleave);

$("#arrow").click(function() {
  $('html, body').animate({scrollTop: $(window).height()}, 1000);
});

