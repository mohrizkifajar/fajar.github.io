$('.nav-link').on('click', function() {
  $('.nav-link').removeClass('active')
  $(this).addClass('active')
})

$('.nav-link').on('click', function(e) {
  let destination = $(this).attr('href')

  let destination_element = $(destination)

  $('html').animate({
    scrollTop: destination_element.offset().top - 50
  }, 1000, 'swing')
  
})