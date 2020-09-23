// Fola Idris
// Comp. Sci 30
// Extra for Experts ; adding sounds and creating two modes

let x;
let y;
let button;
let screen = 0;
let backgroundSound;

function preload() {
  soundFormats('mp3', 'ogg');
  backgroundSound = loadSound('Automation.mp3');
}

//width of the square
rectWidth = 60;

// TO CHANGE THE SPEED OF THE RAIN MAKING THE GAME MORE DIFFICULT :)
speed = 10;

//initialize an empty array
//this is where all the objects will be stored
let theRain = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // song = createAudio('Automation.mp3');
  backgroundSound.play();
  backgroundSound.loop();

  spawnRain();
  //call spawnAtom every 500 milliseconds, so that more and more atoms are on the screen over time
  window.setInterval(spawnRain, 200);
}

function draw() {
  screen0();
  screen1();
}

function displayRect() {
  fill('red');
  //rectMode(CENTER);
  rect(mouseX, windowHeight - rectWidth, rectWidth, rectWidth);
}


function spawnRain() {
  //create an object, which for now you should think about as a variable that can hold lots of different information
  let rain = {
    x: random(0, windowWidth),
    y: 0,
    size: (5),
    theColor: color('black')
  };
  //add the object that we just made to the end of the theAtoms array
  theRain.push(rain);
}

//First screen shown in the game
function screen0() {
  if (screen === 0) {
    easyMode();
    button.mousePressed(changeScreenEasy);

    hardMode();
    button.mousePressed(changeScreenHard);
    fill('white');
    textAlign(CENTER);
    textSize(40);
    text("Don't let the rain touch the box ", windowWidth / 2, windowHeight / 3)

  }
}

// second screen shown in the game
function screen1() {
  if (screen === 1) {
    background(255);
    //iterate through all of the objects inside the theAtoms array, calling each one 'atom' for the duration of the iteration  
    for (let rain of theRain) {
      //move this atom
      rain.x += 0;
      rain.y += speed;

      //display this atom    
      fill(rain.theColor);

      circle(rain.x, rain.y, rain.size);
      displayRect();

      //  checking for collision between the rain and the rectangle
      hit = collideRectCircle(mouseX, windowHeight - rectWidth, rectWidth, rectWidth, rain.x, rain.y, rain.size);

      if (hit) {
        noLoop();
        console.log("hit");
        button = createButton('PLAY AGAIN');
        button.position(windowWidth / 2 - 100, windowHeight / 2 - 50);
        button.size(200, 50);
        button.style('font-size', '20px');
        button.style('background-color', 'white');
        button.mousePressed(playAgain);
      }
    }
  }
}

function mousePressed() {}

function playAgain() {
  screen = 0;
  loop();
  theRain = [];
}

// the Rain speed is low
function changeScreenEasy() {
  removeElements();
  speed = 10;
  screen = 1;
}
// the Rain speed is high
function changeScreenHard() {
  removeElements();
  speed = 18;
  screen = 1;
}

// Easy Mode button function
function easyMode() {
  if (screen === 0) {
    background('black');
    button = createButton('EASY MODE');
    button.position(windowWidth / 2 - 100, windowHeight / 2 - 50);
    button.size(250, 50);
    button.style('font-size', '20px');
    button.style('background-color', 'white');
  }
}

// Hard Mode button function
function hardMode() {
  if (screen === 0) {
    background('black');
    button = createButton('HARD MODE');
    button.position(windowWidth / 2 - 100, windowHeight / 2 + 50);
    button.size(250, 50);
    button.style('font-size', '20px');
    button.style('background-color', 'white');
  }

}