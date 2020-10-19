// Local storage demo



let numberOfClicks = 0;
let highScore = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  highScore = getItem("maxClicks");
}

function draw() {
  background(220);
  showClicks();
  highestClicks();
}
function showClicks(){
  fill("black");
  textSize(60);
  textAlign(CENTER,CENTER);
  text(numberOfClicks, width/2,height/2 );
}

function mousePressed(){
  numberOfClicks++;
  if(numberOfClicks > highScore){
    storeItem("maxClicks", numberOfClicks);
  }
}
function highestClicks(){
  fill("red");
  textSize(40);
  text(highScore, width/2, height/2 + 150);
}