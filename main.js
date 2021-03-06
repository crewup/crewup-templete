/*Hide and show the navbar's color and shadow*/
$(window).scroll(function(){
  var scrollOffset = $(window).scrollTop();
  /*console.log(scrollOffset);*/
  if (scrollOffset >= 50){
    $("header").addClass("color", 500, "easeInOutCubic");
    $("header").addClass("shadow", 500, "easeInOutCubic");
  }
  else {
    $("header").removeClass("shadow", 500, "easeInOutCubic");
    $("header").removeClass("color", 500, "easeInOutCubic");
  }
});

/**/
var cardLikeToggle = 0;
$(document).ready(function(){
  $('#love').click(function(){
    if (cardLikeToggle===0){
      $(this).css('color', 'red');
      cardLikeToggle = 1;
    }
    else{
      $(this).css('color', 'white');
      cardLikeToggle = 0;
    }
  });
});

/*ripple-effect*/
(function (window, $) {
  $(function() {
    $('.ripple').on('click', function (event) {
      event.preventDefault();

      var $div = $('<div/>'),
          btnOffset = $(this).offset(),
      		xPos = event.pageX - btnOffset.left,
      		yPos = event.pageY - btnOffset.top;

      $div.addClass('ripple-effect');
      var $ripple = $(".ripple-effect");

      $ripple.css("height", $(this).height());
      $ripple.css("width", $(this).height());
      $div
        .css({
          top: yPos - ($ripple.height()/2),
          left: xPos - ($ripple.width()/2),
          background: $(this).data("ripple-color")
        })
        .appendTo($(this));

      window.setTimeout(function(){
        $div.remove();
      }, 1000);
    });

  });

})(window, jQuery);
