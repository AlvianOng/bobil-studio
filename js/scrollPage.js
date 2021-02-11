let currentLocation = 'firstPage';
let firstHeight = $('#firstPage').offset().top,
  secondHeight = $('#secondPage').offset().top,
  thirdHeight = $('#thirdPage').offset().top;
let autoScrolling = false;

$(document).scroll(function (e) {
  let scrolled = $(window).scrollTop();
  if (!autoScrolling) {
    if (scrolled > 1 && currentLocation == 'firstPage') {
      scrollPage(secondHeight, 'secondPage');
    } else if (scrolled > secondHeight + 1 && currentLocation == 'secondPage') {
      scrollPage(thirdHeight, 'thirdPage');
    } else if (scrolled < thirdHeight - 1 && currentLocation == 'thirdPage') {
      scrollPage(secondHeight, 'secondPage');
    } else if (scrolled < secondHeight - 1 && currentLocation == 'secondPage') {
      scrollPage(firstHeight, 'firstPage');
    }
  }

  function scrollPage(nextHeight, page) {
    currentLocation = page;
    autoScrolling = true;
    $('body,html').animate({
      scrollTop: nextHeight
    }, 850, function () {
      autoScrolling = false;
    });
  }
})
