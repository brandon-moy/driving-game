var $mach5 = document.querySelector('#mach-5');
var countSide = 1;
var intervalId = null;

window.addEventListener('keydown', turnCar);
window.addEventListener('keydown', startCar);

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

function startCar(event) {
  if (event.key === ' ') {
    intervalId = setInterval(moveRight, 16);
  }
}

function moveRight(event) {
  $mach5.style.left = (6 * countSide) + 'px';
  countSide++;
}

clearInterval(intervalId);
