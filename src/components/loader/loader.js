export const startLoader = () => {
  $('body').append('<div class="loader"></div>');
}

export const stopLoader = () => {
$('.loader').remove();
}
