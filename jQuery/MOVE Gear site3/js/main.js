$(document).ready(() => {
 
  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });
  
  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').removeClass('hide');
    $('.menu-button').addClass('button-active');
    $('.menu-button').animate({
      fontSize: '24px'
    }, 100);
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').addClass('hide');
    $('.menu-button').removeClass('button-active');
    $('.menu-button').animate({
      fontSize: '18px'
    }, 100);
  })
  
}); 
