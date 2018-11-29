$(document).ready(() => {
  const $menuButton = $('.menu-button');
  const $navDropdown = $('#nav-dropdown');
  const $loginButton = $('.login-button');
  const $loginForm = $('.login-form');
  $menuButton.on('click', () => {
	$loginForm.hide();
    $navDropdown.show();
  })
  
  $navDropdown.on('mouseleave', () => {
    $navDropdown.hide();
  })
  
  $loginButton.on('click', () => {
	$navDropdown.hide();
	$loginForm.show();
  })
  
  $loginForm.on('mouseleave', () => {
    $loginForm.hide();
  })
})


