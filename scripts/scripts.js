global.$ = require('jquery');

global.template_functions = {
  getHamburgerPosition: () => {
    let position_logo = $('.logo').position().top;
    let height_logo = $('.logo').outerHeight();
    let height_navbarbuttons = $('.nav-buttons').height();

    return (position_logo + (height_logo /2)) - (height_navbarbuttons / 2) + "px";
  },
  toggleNav: () => {
    if ($('#navigation').hasClass("expanded")) {
      $('#navigation').removeClass("expanded");
      $('nav').removeClass("expanded");
      $('.nav-buttons').removeClass("expanded");
    } else {
      $('#navigation').addClass("expanded");
      $('nav').addClass("expanded");
      $('.nav-buttons').addClass("expanded");
      $(".nav-buttons").get(0).style.setProperty("--hamburger-position", template_functions.getHamburgerPosition());
    }
  },
  scroll_down: () => {
    let scroll_by = (window.innerHeight - document.getElementById('navbar').offsetHeight);

    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      scroll_by = window.innerHeight;
    }
    $("html, body").animate({scrollTop: scroll_by}, 500);
  }
};
