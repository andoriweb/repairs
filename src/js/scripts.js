/* work-slider */
$('.work-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.arrow__prev'),
  nextArrow: $('.arrow__next'),
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

/* Modals popups */
/* modal-bathroom */
$(document).ready(function() {
  $('#openBathroom').on("click", function() {
    $('#modal-bathroom').show();
  });
  $('#close-bathroom').on("click", function() {
    $('#modal-bathroom').hide();
  });
});
/* modal-flat */
$(document).ready(function() {
  $('#openFlat').on("click", function() {
    $('#modal-flat').show();
  });
  $('#close-flat').on("click", function() {
    $('#modal-flat').hide();
  });
});
/* modal-offices */
$(document).ready(function() {
  $('#openOffices').on("click", function() {
    $('#modal-offices').show();
  });
  $('#close-offices').on("click", function() {
    $('#modal-offices').hide();
  });
});
/* modal-building */
$(document).ready(function() {
  $('#openBuilding').on("click", function() {
    $('#modal-building').show();
  });
  $('#close-building').on("click", function() {
    $('#modal-building').hide();
  });
});
/* modal-kitchen */
$(document).ready(function() {
  $('#openKitchen').on("click", function() {
    $('#modal-kitchen').show();
  });
  $('#close-kitchen').on("click", function() {
    $('#modal-kitchen').hide();
  });
});
/* modal-mansion */
$(document).ready(function() {
  $('#openMansion').on("click", function() {
    $('#modal-mansion').show();
  });
  $('#close-mansion').on("click", function() {
    $('#modal-mansion').hide();
  });
});

/* offices-slider */
$('.offices-slider').slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.offices-prev'),
  nextArrow: $('.offices-next')
});
/* building-slider */
$('.building-slider').slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.building-prev'),
  nextArrow: $('.building-next')
});
/* kitchen-slider */
$('.kitchen-slider').slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.kitchen-prev'),
  nextArrow: $('.kitchen-next')
});
/* mansion-slider */
$('.mansion-slider').slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.mansion-prev'),
  nextArrow: $('.mansion-next')
});