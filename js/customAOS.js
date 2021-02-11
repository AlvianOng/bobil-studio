window.addEventListener('scroll', () => {
  let contents = document.querySelectorAll('.animate-scroll')
  let contentsNoTrans = document.querySelectorAll('.animate-scroll-no-trans')
  let fadeTopLeft = document.querySelectorAll('.custom-top-left')
  let fadeLeft = document.querySelectorAll('.custom-left')
  let fadeRight = document.querySelectorAll('.custom-right')
  let fadeMiddle = document.querySelectorAll('.custom-middle')
  let fadeTopDown = document.querySelectorAll('.custom-top-down')
  let fadeBottomUp = document.querySelectorAll('.custom-bot-up')
  let screenPosition = window.innerHeight / 1.5

  contents.forEach((content) => {
    let contentPosition = content.getBoundingClientRect().top
    if (contentPosition < screenPosition) {
      content.classList.add('animated-scroll')
    } else {
      content.classList.remove('animated-scroll')
    }
  });

  contentsNoTrans.forEach((contentNoTran) => {
    let contentPosition = contentNoTran.getBoundingClientRect().top
    if (contentPosition < screenPosition) {
      contentNoTran.classList.add('animated-scroll')
    } else {
      contentNoTran.classList.remove('animated-scroll')
    }
  });

  fadeLeft.forEach((left) => {
    let contentPosition = left.getBoundingClientRect().top
    if (contentPosition < screenPosition) {
      left.classList.add('animate__fadeInLeft')
      left.classList.remove('animate__fadeOutLeft')
    } else {
      left.classList.add('animate__fadeOutLeft')
      left.classList.remove('animate__fadeInLeft')
    }
  })

  fadeTopLeft.forEach((topleft) => {
    let contentPosition = topleft.getBoundingClientRect().top
    if (contentPosition < screenPosition) {
      topleft.classList.add('animate__fadeInTopLeft')
      topleft.classList.remove('animate__fadeOutTopLeft')
    } else {
      topleft.classList.add('animate__fadeOutTopLeft')
      topleft.classList.remove('animate__fadeInTopLeft')
    }
  })

  fadeRight.forEach((right) => {
    let contentPosition = right.getBoundingClientRect().top
    if (contentPosition < screenPosition) {
      right.classList.add('animate__fadeInRight')
      right.classList.remove('animate__fadeOutRight')
    } else {
      right.classList.add('animate__fadeOutRight')
      right.classList.remove('animate__fadeInRight')
    }
  })

  fadeMiddle.forEach((middle) => {
    let contentPosition = middle.getBoundingClientRect().top
    if (contentPosition < screenPosition) {
      middle.classList.add('animate__fadeIn')
      middle.classList.remove('animate__fadeOut')
    } else {
      middle.classList.add('animate__fadeOut')
      middle.classList.remove('animate__fadeIn')
    }
  })

  fadeTopDown.forEach((topdown) => {
    let contentPosition = topdown.getBoundingClientRect().top
    if (contentPosition < screenPosition) {
      topdown.classList.add('animate__fadeInDown')
      topdown.classList.remove('animate__fadeOutDown')
    } else {
      topdown.classList.add('animate__fadeOutDown')
      topdown.classList.remove('animate__fadeInDown')
    }
  })

  fadeBottomUp.forEach((bottomup) => {
    let contentPosition = bottomup.getBoundingClientRect().top
    if (contentPosition < screenPosition) {
      bottomup.classList.add('animate__fadeInUp')
      bottomup.classList.remove('animate__fadeOutUp')
    } else {
      bottomup.classList.add('animate__fadeOutUp')
      bottomup.classList.remove('animate__fadeInUp')
    }
  })
})
