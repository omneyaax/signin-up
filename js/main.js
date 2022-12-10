let el = document.querySelector('select');

let box = document.querySelector('#details');

el.addEventListener('change', function () {
  if (box.classList.contains('hide')) {
   
    box.classList.add ('show')
  } else {
    box.classList.remove('show');
    
  }
});


