$(document).ready(function() {

$('.js--section-step').waypoint(function(direction) {

  if( direction == "down"){
    $('nav').addClass('sticky');
  }else{
    $('nav').removeClass('sticky');
  }

});
/*
var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
  }, {
    offset: '25%'
  })

  */


  /* Mobile nav */

  $('.js-mobile-nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon =  $('js-mobile-nav-icon ion-icon');

    nav.slideToggle(000);
 
  

   
});
});







