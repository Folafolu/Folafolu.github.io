// Project Title
// Fola
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let grid;
let GRIDSIZE = 44;
let cellSize;
//x and y position of the character
let characterX = 1;
let characterY = 1;
// x and y position of the 2nd player
let playerX = 2;
let playerY = 2;
// let lastTeleportTime = 0;
// let teleportTime = 500;
// let move = false;
let blinkTime;
let button;
let score = 0;


function preload(){
  grid = loadStrings("assets/1.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // convert grid to 2d array
  for(let i = 0; i< grid.length; i++){
    grid[i] = grid[i].split(",");
  }

  //loop through the whole 2d array, and turn everything to numbers
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < GRIDSIZE; x++) {
      grid[y][x] = int(grid[y][x]);
    }
  }

  //place character
  grid[characterY][characterX] = 9;
  grid[playerY][playerX] = 10;
  
  if(width < height){
    cellSize = windowWidth/ GRIDSIZE;
  }
  else{
    cellSize = windowHeight/GRIDSIZE;
  }
  blinkTime = new Timer(10000);
}

function draw() {
  background("pink");
  displayGrid();
  if(blinkTime.IsDone()){
    displayPlayAgainButton();
    blinkTime.setWaitTime(10000);
    //blinkTime.reset();
  }

  blinkTime.display(100,200,60);  
  frameRate(10);
  if(keyIsPressed === true){
    keyPressed();
  }
}


function displayGrid(){
  let xBufferZone = 100 ;
  let yBufferZone = 200 ;

  noStroke();
  for(let y = 0; y < grid.length; y++){
    for(let x = 0; x < grid[y].length; x++) {
      if(grid[y][x] === 0){
        fill("white");
      }
      else if(grid[y][x] === 9){
        fill("red");
      }
      else if(grid[y][x] === 10){
        fill("blue");
      }
      else if(grid[y][x] === 1){
        fill("purple");
      }
      rect(cellSize*x + xBufferZone, cellSize*y + yBufferZone, cellSize, cellSize);
    }
  }         
}


function keyPressed() {
  if(key === "w"){
    //move up
    if(grid[characterY-1][characterX] === 0 ){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterY -= 1;
      grid[characterY][characterX] = 9; // set new location to red
    }
    if(grid[characterY-1][characterX] === 10){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterY -= 1;
      score +=1;
      grid[characterY][characterX] = 9; // set new location to red
    }
  }
  if(key === "s"){
    //move down
    if(grid[characterY+1][characterX] === 0 ){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterY += 1;
      grid[characterY][characterX] = 9; // set new location to red
    }
    if(grid[characterY+1][characterX] === 10){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterY += 1;
      score += 1;
      grid[characterY][characterX] = 9; // set new location to red
    }
  }
  if(key === "d"){
    //move right
    if(grid[characterY][characterX+1] === 0 ){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterX += 1;
      grid[characterY][characterX] = 9; // set new location to red }
    }
    if(grid[characterY][characterX+1] === 10){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterX += 1;
      score +=1; 
      grid[characterY][characterX] = 9; // set new location to red }
    }
  }
  if(key === "a"){
    //move left
    if(grid[characterY][characterX-1] === 0 ){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterX -= 1;
      grid[characterY][characterX] = 9; // set new location to red
    }
    if(grid[characterY][characterX-1] === 10){
      grid[characterY][characterX] = 0; // reseting player current location to white
      characterX -= 1;
      score +=1;
      grid[characterY][characterX] = 9; // set new location to red
    }
  }
}


class Timer {
  constructor(howLongToWait){
    this.howLongToWait = howLongToWait;
    this.beginTime = millis();
    this.endTime = this.beginTime + this.howLongToWait;
  }

  IsDone(){
    return millis() >= this.endTime;
  }

  reset(){
    this.beginTime = millis();
    this.endTime = this.beginTime + this.howLongToWait;
  }
  setWaitTime(howLongToWait){
    this.howLongToWait = howLongToWait;
  }
  display(x, y, size){
    let remainingSeconds = round((this.endTime - millis()) /100) /10;
    textSize(size);
    text(remainingSeconds, x, y);
  }
}

function displayPlayAgainButton(){
  noLoop();
  button = createButton("PLAY AGAIN");
  //textSize(16);
  button.position(windowWidth/2 - 100, windowHeight/2 - 50);
  button.size(200,50);
  //button.style('font-size', 400);
  button.style('background-color', "#03c4a1");
  button.mousePressed(resetTime);
}

function resetTime(){
  blinkTime.reset();
  removeElements();
  loop();
}