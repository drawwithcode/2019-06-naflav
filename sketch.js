var imgObj = null;
var animate;

function preload() {
  // put preload code here
}

function setup() {
  noCanvas();
  // put setup code here
}

function draw() {
  // put drawing code here
}

function init() {
  imgObj = document.getElementById('myPizzaman');
  imgObj.style.position = 'relative';
  imgObj.style.left = '0px';
}

function moveRight() {
  imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
  animate = setTimeout(moveRight, 20);
}

function stop() {
  clearTimeout(animate);
  imgObj.style.left = '0px';
}

window.onload = init;
