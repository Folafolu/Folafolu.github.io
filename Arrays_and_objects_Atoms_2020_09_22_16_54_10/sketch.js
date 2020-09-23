let theAtoms = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  //for(let i = 0; i< 50; i++){
    spawnAtom();
 // }
  window.setInterval(spawnAtom, 1000);
}

function draw() {
  background(220);
  
  for (let atom of theAtoms){
    atom.x += random(-5,5);
    atom.y += random(-5,5);

    noStroke();
    fill(atom.theColor);
    circle(atom.x, atom.y, atom.size);
}
}

function spawnAtom(){
    let atom = {
    x: random(width),
    y : random(height),
    size: random(5, 50),
    theColor: color(random(255),random(255),random(255)),
  };
  theAtoms.push(atom);
}