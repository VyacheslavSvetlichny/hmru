var selector = document.querySelectorAll("input[type='tel']")
var im = new Inputmask('+7 (999)-999-99-99')

im.mask(selector)

Inputmask('+7 (999)-999-99-99', {
  showMaskOnHover: false,
  clearIncomplete: true,
}).mask(selector)
