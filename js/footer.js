$('.back-to-top').click(function () {
  $(this).removeClass('back-to-top')
  $(this).addClass('back-to-top1')

  setTimeout(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 500)
    return false
  } , 490)

  setTimeout(function() {
    $('.back-to-top1').addClass('back-to-top')
    $('.back-to-top1').removeClass('back-to-top1')
  }, 2000)
})
