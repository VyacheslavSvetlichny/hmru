$(function () {
  const totalProgress = $('.work-progress li').length
  const doneProgress = $('.work-progress li.done').length

  $('.progress-head span').text(`${(doneProgress / totalProgress) * 100}%`)

  $('.work-progress .in-progress a').append(' (в процессе)')

  $('.progress-bar__inner').css(
    'width',
    `${(doneProgress / totalProgress) * 100}%`,
  )
})
