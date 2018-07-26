let balloons = [];
let message = "Thankyousomuchforthewishes";
let floaters = [];
let _y;
let an = 0;

async function preload() {
  
  balloons.push(loadImage("balloon1.svg"));
  balloons.push(loadImage("balloon2.svg"));
  balloons.push(loadImage("balloon3.svg"));
  balloons.push(loadImage("balloon4.svg"));
  
}

function setup() {
  let can = createCanvas(windowWidth- 100, windowHeight -100);
  _y = height;
  for(let letter of message) {
    let floater = {
      "ballon": balloons[floor(random(4))],
      "char": letter,
      "x": floor(random(width - 150)),
      "y": _y,
      "r": floor(random(255))  ,
      "g": floor(random(255)) ,
      "b": floor(random(255)) ,
      "angle": floor(random(360))
    }
    floaters.push(floater);
    _y += 200;
  }
  textSize(64);
  fill(255);
  angleMode(DEGREES);
  can.class("canvas");
  frameRate(60);
}

function draw() {
  background(51);
  an = an + 1;
  
  for(let balloon of floaters) {
    let s = sin(balloon["angle"]);
    image(balloon["ballon"], balloon["x"] + s * 150, balloon["y"], 150, 150);

    fill(balloon["r"], balloon["g"], balloon["b"]);

    text(balloon["char"], balloon["x"] + (s*150) + 100, balloon["y"] + 200);
    balloon["y"] -= 1;
    balloon["angle"] += 1;
    if(balloon["angle"] >= 360) {
      balloon["angle"] = 0;
    }
  }
  
  if(an == 360) {
    an = 0;
  }
  
}
