// FIXED HEADER
let path = window.location.pathname;
let page = path.split("/").pop();
if (window.pageYOffset === 0 && page === 'contact.html') {
  $('header').addClass('fixed-scroll-contact-html')
}
$(window).scroll(function () {
  if ($(window).scrollTop() >= 150 && page != 'contact.html') {
    $('header').addClass('fixed-scroll');
  } else if (page === 'contact.html' && window.pageYOffset <= 10) {
    $('header').addClass('fixed-scroll-contact-html');
  } else if ($(window).scrollTop() >= 150 && page == 'contact.html') {
    $('header').addClass('fixed-scroll');
  } else {
    $('header').removeClass('fixed-scroll');
    $('header').removeClass('fixed-scroll-contact-html');
  }
});

//HAMBURGER MENU
document.querySelector('.menu-wrapper').addEventListener('click', () =>
  document.querySelector('.main-menu').classList.toggle('show'));

$('.brand').css('z-index', '9999')
$('header').addClass('sticky-top')

$('.menu-wrapper').click(function () {
  if ($('body').hasClass('flow-y')) {
    $('body').addClass('overflow-y')
    $('body').removeClass('flow-y custom-body')
  } else if ($('body').hasClass('overflow-y')) {
    $('body').addClass('flow-y custom-body')
    $('body').removeClass('overflow-y')
  }
  $('body').css('overflow-y', 'hidden');
})

$(function () {
  $('.menu-wrapper').on('click', function () {
    $('.hamburger-menu').toggleClass('animate');
    $('.mobile-nav').toggleClass('change');
  })
});

$(function () {
  $('.neon-light.one').hover(function () {
    $('#home').css('opacity', '0.3');
  }, function () {
    $('#home').css('opacity', '0');
  });
});

$(function () {
  $('.neon-light.two').hover(function () {
    $('#project').css('opacity', '0.3');
  }, function () {
    $('#project').css('opacity', '0');
  });
});

$(function () {
  $('.neon-light.three').hover(function () {
    $('#about').css('opacity', '0.3');
  }, function () {
    $('#about').css('opacity', '0');
  });
});

$(function () {
  $('.neon-light.four').hover(function () {
    $('#contact').css('opacity', '0.3');
  }, function () {
    $('#contact').css('opacity', '0');
  });
});

$('.neon-light').mouseenter(function () {
  $(this).addClass('hover-animation')
})
$('.neon-light').mouseleave(function () {
  $(this).removeClass('hover-animation')
})
