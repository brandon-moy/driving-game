var $mach5 = document.querySelector('#mach-5');
var countSide = 1;
// var countVert = 1;
var intervalId = null;
var isMoving = false;

window.addEventListener('keydown', turnCar);
window.addEventListener('keydown', startStopCar);

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

function startStopCar(event) {
  if (event.key === ' ' && isMoving === false) {
    isMoving = true;
    intervalId = setInterval(moveCar, 16);
  } else if (event.key === ' ' && isMoving) {
    isMoving = false;
    clearInterval(intervalId);
  }
}

function moveCar(event) {
  $mach5.style.left = (6 * countSide) + 'px';
  countSide++;
}
