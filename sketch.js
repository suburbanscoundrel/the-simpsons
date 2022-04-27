let mando = false;
let simpsons;
let bgImage;
let textOptions = ['lao lao, were you a happy kid?', 'lao lao, i love you', 'lao lao, do you miss china?', 'lao lao, what was lao ye like?', 'lao lao, what was mom like as a kid?', 'lao lao, what was living in china in the 1950s like?', 'lao lao, do you ever feel nostalgic?'];
let textSelect;
let laoLaoFont;
let meFont;

function preload() {
  simpsons = loadImage('assets/simpsons.png');
  bgImage = loadImage('assets/simpsons-1.png');
  laoLaoFont = loadFont('assets/LongCang-Regular.ttf');
  meFont = loadFont('assets/HomemadeApple-Regular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSelect = random(textOptions);
  background(220);
  image(simpsons, 0, 0, width, height);
}

function draw() {
  // background(220, 2);
  noCursor();
  image(bgImage, 0, 0, width, height);
  strokeJoin(ROUND);
  strokeWeight(4);
  stroke(255);
  textAlign(CENTER, CENTER);
  if (mando === false) {
    textFont(meFont);
    textSize(12);
    fill(255,0,0);
    text(textSelect, mouseX, mouseY);
  }

  if (mando === true) {
    fill(0,0,255);
    textSize(18);
    textFont(laoLaoFont);
    text('什么？ 听不懂你', mouseX, mouseY);
  }
  print(textSelect);
}

function mousePressed() {
  mando = !mando
  textSelect = random(textOptions);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

