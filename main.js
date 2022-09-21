var $vehicle = document.querySelector('#vehicle');
var countSide = 1;
var countVert = 1;
var intervalId = null;
var isMoving = false;

window.addEventListener('keydown', turnCar);
window.addEventListener('keydown', startStopCar);

function turnCar(event) {
  if (event.key === 'd' || event.key === 'ArrowRight') {
    $vehicle.className = '';
  } else if (event.key === 's' || event.key === 'ArrowDown') {
    $vehicle.className = 'down';
  } else if (event.key === 'a' || event.key === 'ArrowLeft') {
    $vehicle.className = 'left';
  } else if (event.key === 'w' || event.key === 'ArrowUp') {
    $vehicle.className = 'up';
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
  if ($vehicle.className === '') {
    $vehicle.style.left = (6 * countSide) + 'px';
    countSide++;
  } else if ($vehicle.className === 'down') {
    $vehicle.style.top = (6 * countVert) + 'px';
    countVert++;
  } else if ($vehicle.className === 'left') {
    $vehicle.style.left = (6 * countSide) + 'px';
    countSide--;
  } else if ($vehicle.className === 'up') {
    $vehicle.style.top = (6 * countVert) + 'px';
    countVert--;
  }
}
