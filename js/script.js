$(".slide").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 1,
  adaptiveHeight: true,
});
$(".slide21").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 1,
  adaptiveHeight: true,
});
$(".slide212").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 1,
  adaptiveHeight: true,
});
$(".product_slide").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 4,
  adaptiveHeight: true,
  prevArrow: "<i class='fa-solid fa-arrow-left-long pre_btn'></i>",
  nextArrow: '<i class="fa-solid fa-arrow-right-long next_btn"></i>',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".fsale_slid").slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  adaptiveHeight: true,
  prevArrow: "<i class='fa-solid fa-arrow-left-long pre_btn'></i>",
  nextArrow: '<i class="fa-solid fa-arrow-right-long next_btn"></i>',
});
$(".slide2").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  adaptiveHeight: true,
  prevArrow: "<i class='fa-solid fa-arrow-left-long pre_btn'></i>",
  nextArrow: '<i class="fa-solid fa-arrow-right-long next_btn"></i>',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
// $(".product_slide").slick({
//   dots: true,
//   arrows: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 4,
//   adaptiveHeight: true,
//   prevArrow: "<i class='fa-solid fa-arrow-left-long pre_btn'></i>",
//   nextArrow: '<i class="fa-solid fa-arrow-right-long next_btn"></i>',
//   responsive: [
//     {
//       breakpoint: 1400,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 786,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ],
// });
