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
    $('.personal-input input').each(function () {
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

  $(function () {
    $('.delete-modal__cancel').click(function () {
      $.fancybox.close()
    })
  })

  $(function () {
    $('.active-orders__list .active-orders__item').click(function () {
      $(this).children('.active-orders__additional').slideToggle()
      $(this).toggleClass('active')
    })
  })

  $('.select').on('click', '.select__head', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open')
      $(this).next().fadeOut()
    } else {
      $('.select__head').removeClass('open')
      $('.select__list').fadeOut()
      $(this).addClass('open')
      $(this).next().fadeIn()
    }
  })

  $('.select').on('click', '.select__item', function () {
    $('.select__head').removeClass('open')
    $(this).parent().fadeOut()
    $(this).parent().prev().text($(this).text())
    $(this).parent().prev().prev().val($(this).children().text())
  })

  $(document).click(function (e) {
    if (!$(e.target).closest('.select').length) {
      $('.select__head').removeClass('open')
      $('.select__list').fadeOut()
    }
  })

  $(document).ready(function () {
    $('.cart-counter__plus').on('click', function () {
      var input = $(this).siblings('.cart-counter__input')

      var currentValue = parseInt(input.val())
      input.val(currentValue + 1)
      calculateTotal()
    })

    $('.cart-counter__minus').on('click', function () {
      var input = $(this).siblings('.cart-counter__input')
      var currentValue = parseInt(input.val())
      if (currentValue > 1) {
        input.val(currentValue - 1)
        calculateTotal()
      }
    })

    $('.cart-counter__input').on('change', function () {
      var input = $(this)
      var currentValue = parseInt(input.val())
      if (currentValue > 0) {
        calculateTotal()
      }
    })

    function calculateTotal() {
      var totalQuantity = 0
      var totalPrice = 0
      $('.cart-item').each(function () {
        var price = parseInt($(this).find('.cart-item__price span').text())
        var quantity = parseInt($(this).find('.cart-counter__input').val())
        totalQuantity += quantity
        totalPrice += price * quantity
      })
      $('.cart-menu__price span').text(totalPrice.toLocaleString('ru-RU'))
      $('.cart-menu__title span').text(totalQuantity)
    }
  })

  $(function () {
    $('.delivery-type__tab:first-child').addClass('active')
    $('.delivery-type__content:first-child').addClass('active')
  })

  $(document).on('click', '.delivery-type__tab', function () {
    $('.delivery-type__tab').removeClass('active')
    $(this).addClass('active')
    $('.delivery-type__content').removeClass('active')
    $(
      `.delivery-type__content[data-delivery="${$(this).attr(
        'data-delivery',
      )}"`,
    ).addClass('active')
  })

  $(document).click(function (e) {
    $('.delivery-radio__tooltip').click(function () {
      $(this).children('.delivery-radio__tooltip-body').fadeIn()
    })

    if (!$(e.target).closest('.delivery-company__item').length) {
      $('.delivery-radio__tooltip-body').fadeOut()
    }
  })

  $(function () {
    $('.pick-up__item:first-child').addClass('active')
  })

  $(document).on('click', '.pick-up__select .select__item', function () {
    $('.pick-up__item').removeClass('active')
    $(`.pick-up__item[data-point="${$(this).attr('data-point')}"`).addClass(
      'active',
    )
  })

  $(document).on('click', '.order-next', function () {
    $('.delivery-type[data-order-stage="1"]').removeClass('active')
    $('.delivery-type[data-order-stage="2"]').addClass('active')
  })

  $(document).on('click', '.order-back', function () {
    $('.delivery-type[data-order-stage="2"]').removeClass('active')
    $('.delivery-type[data-order-stage="1"]').addClass('active')
  })

  $('.notifications-tab:first-child').addClass('active')
  $('.notifications-list:first-child').addClass('active')

  $(document).on('click', '.notifications-tab', function () {
    $('.notifications-tab').removeClass('active')
    $(this).addClass('active')
    $('.notifications-list').removeClass('active')
    $(`.notifications-list[data-tab="${$(this).attr('data-tab')}"`).addClass(
      'active',
    )
  })

  $(function () {
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

    const deliveryCompanySlider = new Swiper('.delivery-company', {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1.2,
        },

        576: {
          slidesPerView: 2.5,
        },

        992: {
          slidesPerView: 3,
        },
      },
    })
  })
})
