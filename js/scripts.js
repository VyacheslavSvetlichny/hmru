$(function () {
  $(document).on('click', '.burger', function () {
    $(this).toggleClass('is_active')
    $(this).toggleClass('not_active')
    $('.burger-menu').toggleClass('active')
    $('.catalog-menu').removeClass('active')
    $('.basket').removeClass('hide')
    $('.cross').addClass('hide')
  })

  $(document).on('click', '#show-catalog-mobile', function () {
    $(this).toggleClass('is_active')
    $('.basket').toggleClass('hide')
    $('.cross').toggleClass('hide')
    $('.burger').removeClass('is_active')
    $('.burger').addClass('not_active')
    $('.burger-menu').removeClass('active')
    $('.catalog-menu').toggleClass('active')
  })

  $(document).on(
    'click',
    '.search-mobile__btn, .main_search_block_in .close',
    function () {
      $('#search-popup').toggleClass('show')
      $('.burger').removeClass('is_active')
      $('.burger').addClass('not_active')
      $('.burger-menu').removeClass('active')
      $('.catalog-menu').removeClass('active')
      $('.basket').removeClass('hide')
      $('.cross').addClass('hide')
    },
  )

  $(document).on('click', '.more_nav', function () {
    $(this).toggleClass('active')
    $(this).children('.more_nav_in').slideToggle()
    $('.popular-sections').slideToggle()
  })

  $(document).on('click', '.catalog-menu__item', function () {
    $(this).parent().toggleClass('opened')
    $(this).siblings('.catalog-sub-menu').slideToggle()
  })

  $(document).on('click', '.catalog-type__btn', function () {
    $('.catalog-type__btn').removeClass('active')
    $(this).addClass('active')
    $('.catalog-content').removeClass('active')
    $(
      `.catalog-content[data-catalog-view="${$(this).attr(
        'data-catalog-view',
      )}"`,
    ).addClass('active')
  })

  const popularSlider = new Swiper('.catalog-popular__container', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 2.25,
      },

      576: {
        slidesPerView: 2.25,
      },

      992: {
        slidesPerView: 3,
      },
    },
  })
})
