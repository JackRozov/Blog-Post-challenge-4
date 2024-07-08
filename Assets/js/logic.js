// Access toggle switch HTML element
const darkmode = document.querySelector('#darkmode');
const container = document.querySelector('.container');

// Dark default
let mode = 'dark';

//click event on toggle switch
darkmode.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});
//blog

// Access toggle switch HTML element
const darkmodeblog = document.querySelector('#darkmodeblog');
const containerblog = document.querySelector('.containerblog');

// Dark Default
let modeblog = 'darkblog';

// click event on toggle switch
darkmodeblog.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (modeblog === 'darkblog') {
    modeblog = 'lightblog';
    containerblog.setAttribute('class', 'lightblog');
  }
  // If mode is light, apply dark background
  else {
    modeblog = 'darkblog';
    containerblog.setAttribute('class', 'darkblog');
  }
});




  