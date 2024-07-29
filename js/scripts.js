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
  })

  $(document).on(
    'click',
    '.search-mobile__btn, .main_search_block_in .close',
    function () {
      $('#search-popup').toggleClass('show')
    },
  )

  $(document).on('click', '.more_nav', function () {
    $(this).toggleClass('active')
    $(this).children('.more_nav_in').slideToggle()
    $('.popular-sections').slideToggle()
  })
})
