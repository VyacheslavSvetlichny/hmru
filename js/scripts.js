if (localStorage.getItem('catalog-view')) {
  $('.catalog-type__btn').removeClass('active')
  $(
    '.catalog-type__btn[data-catalog-view=' +
      localStorage.getItem('catalog-view') +
      ']',
  ).addClass('active')
  $('.catalog-content').removeClass('active')
  $(
    '.catalog-content[data-catalog-view=' +
      localStorage.getItem('catalog-view') +
      ']',
  ).addClass('active')
}

$(function () {
  $(document).on('click', '.burger', function () {
    $(this).toggleClass('is_active')
    $(this).toggleClass('not_active')
    $('.burger-menu').toggleClass('active')
    $('.catalog-menu').removeClass('active')
    $('.basket').removeClass('hide')
    $('.cross').addClass('hide')

    if ($(this).hasClass('is_active')) {
      $('body').addClass('locked')
    } else if ($(this).hasClass('not_active')) {
      $('body').removeClass('locked')
    }
  })

  $(document).on('click', '#show-catalog-mobile', function () {
    $(this).toggleClass('is_active')
    $('.basket').toggleClass('hide')
    $('.cross').toggleClass('hide')
    $('.burger').removeClass('is_active')
    $('.burger').addClass('not_active')
    $('.burger-menu').removeClass('active')
    $('.catalog-menu').toggleClass('active')

    if ($('.basket').hasClass('hide')) {
      $('body').addClass('locked')
    } else if ($('.cross').hasClass('hide')) {
      $('body').removeClass('locked')
    }
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

      if ($('#search-popup').hasClass('show')) {
        $('body').addClass('locked')
      } else {
        $('body').removeClass('locked')
      }
    },
  )

  $(document).on('click', '.more_nav', function () {
    $(this).toggleClass('active')
    $(this).children('.more_nav_in').slideToggle()
    $('.popular-sections').slideToggle()
  })

  $(document).on('click', '.catalog-menu__arrow', function () {
    $(this).parent().parent().toggleClass('opened')
    $(this).parent().siblings('.catalog-sub-menu').slideToggle()
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

    localStorage.setItem('catalog-view', $(this).attr('data-catalog-view'))
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

  $(function () {
    $('.news-form__input input').each(function () {
      $(this).on('input', function () {
        if ($(this).val().length > 0) {
          $(this).parent().addClass('filled')
        } else {
          $(this).parent().removeClass('filled')
        }
      })
    })
  })

  $(function () {
    $('.personal-burger, .personal-menu .close').click(function () {
      $('.personal-menu').toggleClass('opened')
      $('body').toggleClass('locked')
    })
  })

  $(function () {
    $('.personal-menu ul li.has-sub-menu .personal-menu__item').click(
      function () {
        $(this).toggleClass('active')
        $(this).siblings('ul').slideToggle()
      },
    )
  })
})
