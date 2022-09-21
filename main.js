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

// Code for select vehicle modal

var $left = document.querySelector('.left-arrow');
var $right = document.querySelector('.right-arrow');
var $buttons = document.querySelector('.buttons');
var $icons = $buttons.querySelectorAll('i');
var $images = document.querySelectorAll('.row > img');
var $select = document.querySelector('.select');
var $modal = document.querySelector('.modal-container');
var imgPosition = 0;
var intervalModalId = null;

$left.addEventListener('click', left);
$right.addEventListener('click', right);
$buttons.addEventListener('click', button);
$select.addEventListener('click', chooseCar);

function left(event) {
  clearInterval(intervalModalId);
  intervalModalId = null;

  imgPosition--;

  if (imgPosition < 0) {
    imgPosition = 4;
  }
  for (var i = 0; i < $images.length; i++) {
    $images[i].className = 'hidden';
    $icons[i].classList.remove('fa-solid');
    $icons[i].classList.add('fa-regular');
  }
  $images[imgPosition].className = '';
  $icons[imgPosition].classList.remove('fa-regular');
  $icons[imgPosition].classList.add('fa-solid');

  intervalModalId = setInterval(cycle, 3000);
}

function right(event) {
  clearInterval(intervalModalId);
  intervalModalId = null;

  imgPosition++;

  if (imgPosition > 4) {
    imgPosition = 0;
  }
  for (var j = 0; j < $images.length; j++) {
    $images[j].className = 'hidden';
    $icons[j].classList.remove('fa-solid');
    $icons[j].classList.add('fa-regular');
  }
  $images[imgPosition].className = '';
  $icons[imgPosition].classList.remove('fa-regular');
  $icons[imgPosition].classList.add('fa-solid');

  intervalModalId = setInterval(cycle, 3000);
}

function cycle(event) {
  imgPosition++;

  if (imgPosition > 4) {
    imgPosition = 0;
  }
  for (var j = 0; j < $images.length; j++) {
    $images[j].className = 'hidden';
    $icons[j].classList.remove('fa-solid');
    $icons[j].classList.add('fa-regular');
  }
  $images[imgPosition].className = '';
  $icons[imgPosition].classList.remove('fa-regular');
  $icons[imgPosition].classList.add('fa-solid');
}

function button(event) {
  clearInterval(intervalModalId);
  intervalModalId = null;
  if (event.target.tagName === 'I') {
    for (var i = 0; i < $icons.length; i++) {
      if (event.target.className === $icons[i].className) {
        imgPosition = i;
        $images[i].className = '';
        $icons[i].classList.remove('fa-regular');
        $icons[i].classList.add('fa-solid');
      } else {
        $images[i].className = 'hidden';
        $icons[i].classList.remove('fa-solid');
        $icons[i].classList.add('fa-regular');
      }
    }
  }
  intervalModalId = setInterval(cycle, 3000);
}

intervalModalId = setInterval(cycle, 3000);

function chooseCar(event) {
  var car = $images[imgPosition].getAttribute('src');

  $vehicle.setAttribute('src', car);
  $vehicle.className = '';
  $modal.className = 'hidden';

  clearInterval(intervalModalId);
  intervalModalId = null;
}
