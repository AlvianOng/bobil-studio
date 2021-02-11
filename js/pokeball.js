$('.pokeball').click(function () {
  let rarity = Math.floor(Math.random() * 11);
  document.querySelector('.pokeball-img').src = "img/pokeball-open.png";
  openPokeball();

  function openPokeball() {
    setTimeout(function () {
      document.querySelector('.eevee').src = "img/catched-eevee.png";
      $('.eevee').addClass('animate__animated animate__fadeOut');
      closePokeball();
    }, 1000);
  }

  function closePokeball() {
    setTimeout(function () {
      document.querySelector('.pokeball-img').src = "img/pokeball.png";
      shakePokeball();
    }, 500);
  }

  function shakePokeball() {
    $('.pokeball').addClass('shaking');
    if (rarity >= 0 && rarity <= 5) {
      let star1 = $("<i></i>").addClass("star-effect fa fa-star one");
      let star2 = $("<i></i>").addClass("star-effect fa fa-star two");
      let star3 = $("<i></i>").addClass("star-effect fa fa-star three");
      let star4 = $("<i></i>").addClass("star-effect fa fa-star four");
      let star5 = $("<i></i>").addClass("star-effect fa fa-star five");
      let star6 = $("<i></i>").addClass("star-effect fa fa-star six");
      let star7 = $("<i></i>").addClass("star-effect fa fa-star seven");
      let star8 = $("<i></i>").addClass("star-effect fa fa-star eight");
      document.querySelector('.pokeball-img').src = "img/pokeball.png";
      setTimeout(function () {
        $('.pokeball').append(star1, star2, star3, star4, star5, star6, star7, star8);
      }, 3000);
      $(".pokeball").attr("disabled", true);
    } else if (rarity >= 6 && rarity <= 10) {
      setTimeout(function () {
        document.querySelector('.pokeball-img').src = "img/pokeball-open.png";
        setTimeout(function () {
          $('.eevee').removeClass('animate__fadeOut');
          $('.eevee').addClass("animate__fadeIn");
        }, 500);
        document.querySelector('.eevee').src = "img/eevee.png";
        setTimeout(function () {
          document.querySelector('.pokeball-img').src = "img/pokeball.png";
        }, 1000);
      }, 3000);
    }
  }
  $('.pokeball').removeClass('shaking');
});
