// Sierpinski triangle



let triangleVertices = [
  {x: 600, y: 100},
  {x: 100, y: 750},
  {x: 1100, y: 750}
];

let levelsDeep = 1;

function mousePressed(){
  levelsDeep++;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, levelsDeep);

}
function sierpinski(points, depth){
  let theColors = ["red", "green", "white", "blue", "purple", "black", "yellow"];
  fill (theColors[depth % theColors.length]);
  triangle(points[0].x, points[0].y,
    points[1].x, points[1].y,
    points[2].x, points[2].y
  );

  //exit clause
  if(depth > 0){
    sierpinski([points[0], getMidPoint(points[0], points[1]), 
                           getMidPoint(points[0], points[2])],  
                           depth - 1);

    sierpinski([points[1], getMidPoint(points[0], points[1]), 
                           getMidPoint(points[1], points[2])],  
                           depth - 1); 
                           
    sierpinski([points[2], getMidPoint(points[0], points[2]), 
                           getMidPoint(points[1], points[2])],  
                           depth - 1);
  }
  
}
function getMidPoint(points1, points2){
  let xDiffernce = points1.x + points2.x;
  let yDiffernce = points1.y + points2.y;
  let midpoint = {x: xDiffernce / 2, y: yDiffernce/2};
  return midpoint;
}
