var $mach5 = document.querySelector('#mach-5');

window.addEventListener('keydown', turnCar);

function turnCar(event) {
  if (event.key === 'd' || event.key === 'ArrowRight') {
    $mach5.className = '';
  } else if (event.key === 's' || event.key === 'ArrowDown') {
    $mach5.className = 'down';
  } else if (event.key === 'a' || event.key === 'ArrowLeft') {
    $mach5.className = 'left';
  } else if (event.key === 'w' || event.key === 'ArrowUp') {
    $mach5.className = 'up';
  }
}
