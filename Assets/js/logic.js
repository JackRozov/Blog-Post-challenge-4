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



  