// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let grid;
let GRIDSIZE = 10;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //grid = generateEmptyGrid(4);
  cellWidth = width/GRIDSIZE;
  cellHeight = height/GRIDSIZE;
}

function draw() {
  background(220);
  displayGrid();
  boxMove();
}

// function keyPressed(){
//   if(key === " "){
//     grid = generateRandomGrid(10);
//   }
// }

function displayGrid(){
  
  for(let y = 0; y < GRIDSIZE; y++){
    for(let x = 0; x < GRIDSIZE; x++) {
      // if(grid[y][x]===0){
      //   fill("grey");
      // }
      // else{
      //   fill("grey");
      // }
      fill("white");
      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }

  }
}

// function generateRandomGrid(gridSize) {
//   let grid = [];
//   for (let i = 0; i< gridSize; i++){
//     grid.push([]);
//     for (let j = 0; j< gridSize; j++){
//       if (random(100) < 50){
//         grid[i].push(0);
//       }
//       else{
//         grid[i].push(1);
//       }
  
//     }
//   }
//   return grid;
// }

function generateEmptyGrid(GRIDSIZE) {
  let grid = [];
  for (let i = 0; i< GRIDSIZE; i++){
    grid.push([1]);
    for (let j = 0; j< GRIDSIZE; j++){
      grid[i].push(0);
    }
  }
  return grid;
}

function boxMove(){
  fill("black");
  rect(0, 0, cellWidth, cellHeight);
  //let box = generateEmptyGrid(GRIDSIZE);
  // for(let y = 0; y < GRIDSIZE; y++){
  //   for(let x = 0; x < GRIDSIZE; x++){
  // fill("black");
  // rect(0, 0, cellWidth, cellHeight);

  //   }
  // }
}