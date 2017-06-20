$(document).ready(function() {
  $(".example").mouseover(function(e) {
      $("#tooltip_container")
      .text($)
      $('#tooltip_container').css(
          {
          'display':"block",
          "opacity":0})
  }).animate({'opacity':1},1000)
      .mousemove(function(e){
       $('#tooltip_container').css({
           top:e.pageY + "px",
           left: e.pageX +"px"
       })
  }).mouseout(function(e) {
      $("#tooltip_container")
      .animate({"opacity":0},1000, function() {
          $(this).css('display':"none").text('');
      });
  }) ; 
});