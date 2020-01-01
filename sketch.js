let x;
let moving;

function preload() {
  pizzaman = loadImage("pizzaman.png");
  space = loadImage("space.png");
  pizzaria = loadImage("pizzaria.png");
  casa = loadImage("casa.png");
  win = loadImage('win.png');
  lost = loadImage('lost.png');
  restart = createButton("RESTART");
  restart.style("position:absolute; right:31vw; bottom:3vw; padding:1vw 3.5vw; font-size:1.9vw;");
  restart.mousePressed(setup);


}

function setup() {
  moving = 0;
  createCanvas(windowWidth, windowHeight);
  click = createButton("GO");
  click.style("position:absolute; right:18vw; bottom:3vw; padding:1vw 3.5vw; font-size:1.9vw;");
  clear = createButton("STOP");
  clear.style("position:absolute; right:3vw; bottom:3vw; padding:1vw 3.5vw; font-size:1.9vw;");
  click.mousePressed(moveRight);
  clear.mousePressed(stop);
  let s = 'This is the latest automated pizza model delivery available in the market:';
  fill(50);
  textAlign(CENTER, CENTER);
  textSize(15);
  textFont('Roboto Mono');
  text(s, 350, 10, 600, 300);
  let P = 'PIZZA BOY 3000';
  textAlign(CENTER, CENTER);
  fill(50);
  textSize(15);
  text(P, 600, 50, 100, 300);
  let r = 'Press "GO" to activate his JOURNEY. BUT You have to press "STOP" as soon as he reaches the delivery place, so he can deliver the pizza...Or else he will keep the pizza to himself. ';
  fill(50);
  textSize(15);
  textAlign(CENTER, CENTER);
  text(r, 370, 120, 600, 300);





  x = 410;
}

function draw() {

  if (moving == 1) {
    background('#FF6347');
    x = x + 2;
  } else if (moving == 0) {
    x = x;
    if (x > 800 && x < 1000) {
      image(win, 500, 200, 400, 400);


    }



  }
  image(space, 0, 0, 400, 100);
  image(pizzaria, 150, 380, 275, 275);
  image(casa, 800, 400, 275, 275);

  click.mousePressed(moveRight);
  clear.mousePressed(stop);
  image(pizzaman, x, 510, 140, 140);

  if (x > 1100) {

    image(lost, 500, 200, 400, 400);
  }

}

function init() {
  clear();
  setup();
}

function moveRight() {
  background('#FF6347');
  moving = 1;

}

function stop() {
  moving = 0;
}
