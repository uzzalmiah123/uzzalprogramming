
var uzzal = 10;
var diam1=20;

//The setup function only happens once
function setup() {
    createCanvas(500, 500); //create a 100px X 100px canvas
}

//The draw function happens over and over again
function draw() {
  background(49,174,24); //an RGB color for the canvas' background
  //circle
  stroke(000000) // an RGB color for the circle's border
    strokeWeight(5);// Size of the border
  fill(15,400,400,400); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
    ellipse(mouseX,mouseY,250,250);
    fill("#ffff99");
  ellipse (random(width), random(height), 100,100); // center of canvas, 20px dia
    fill(uzzal,200,100);
    uzzal = uzzal+.5;
    textSize(12); // size of the text
    textFont("Helvetica"); //Text desigin 
    textStyle(BOLD); //text style "Bold" 
    textAlign(CENTER); // text position 
    text("Hello My name Is Uzzal ",70,70); // The number of the text size
}

function mousePressed(){
    if (diam1 > 100){
        diam1 = 3;
    }else{
        diam1 = diam1 + 10;
    }
}