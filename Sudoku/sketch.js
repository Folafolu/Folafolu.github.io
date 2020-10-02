// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond


let sudoku;
let initialState;
 
const GRIDSIZE = 9;  
let cellSize;       

function preload(){
  sudoku = loadStrings("assets/1.txt");
  initialState = loadStrings("assets/1.txt");
}

function setup() {
  createCanvas(400, 400);
  //convert sudoku into 2d array
  for(let i = 0; i< sudoku.length; i++){
    sudoku[i] = sudoku[i].split(",");
    initialState[i] = initialState[i].split(",");
  }

  //loop throught the whole 2d array and turn everything to numbers from strings
  for(let y = 0; y< GRIDSIZE; y++){
    for(let x=0; x< GRIDSIZE; x++){
      sudoku[y][x] = int(sudoku[y][x]);
      initialState[y][x] = int(initialState[y][x]);
    }
  }
  if(width < height){
    cellSize = width/ GRIDSIZE;
  }
  else{
    cellSize = height/GRIDSIZE;
  }
}

function draw() {
  background(220);
  displaySudoku();
  
}
function displaySudoku(){
  
  for(let y = 0; y<GRIDSIZE; y++){
    for(let x = 0; x< GRIDSIZE; x++){
      strokeWeight(1);
      fill("white");
      rect(x* cellSize, y* cellSize, cellSize, cellSize);

      //show value
      if(sudoku[y][x] !== 0){

        if (sudoku[y][x] === initialState[y][x]){
          fill("grey");
        }
        else{
          fill("black");
        }
        textSize(cellSize* 0.6);
        textAlign(CENTER,CENTER);
        text(sudoku[y][x],x* cellSize + cellSize/2, y* cellSize + cellSize/2);
      }
     
  
    }
  }
  displayLines();
}

function displayLines(){
  strokeWeight(5);
  line(0, cellSize*3,cellSize * 9, cellSize *3);
  line(0, cellSize*6, 0, cellSize * 9, cellSize *6);
  line(cellSize *3,0, cellSize * 3, cellSize *9);
  line(cellSize *6,0, cellSize *6, cellSize *9);
}

function mousePressed(){
  let cellX = floor(mouseX/cellSize);
  let cellY = floor(mouseY/cellSize);

  changeCell(cellX, cellY);
}

function changeCell(x, y){
  if(sudoku[y][x] !== initialState[y][x] || sudoku[y][x]===0){
    sudoku[y][x] = (sudoku[y][x] + 1) % 10;
  }

}
