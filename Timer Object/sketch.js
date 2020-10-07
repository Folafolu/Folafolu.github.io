// Timer Objects Demo


let blinkTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blinkTime = new Timer(1000);
}

function draw() {
  if(blinkTime.IsDone()){
    background("red");
    blinkTime.setWaitTime(2000);
    blinkTime.reset();

  }
  else{
    background("white");
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
  
}
