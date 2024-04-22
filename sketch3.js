let img1;
let img2;
let s;

function preload(){
    img1 = loadImage("resources5/media5/2.jpg");
    img2 = loadImage("resources5/media5/4.jpg"); 
}

function setup(){
  createCanvas(400,400); //this is my canvas;
  colorMode(HSB);
  imageMode(CENTER); 
  noCursor();
  s = "I love coding with processing"; 

}

function draw(){
  background(255,255,255);
image(img1,width/2,height/2);
image(img2, mouseX,mouseY, 200,200);
fill(255);
textSize(30);
text(s, 0, 40);
strokeWeight(1);
stroke(63,58,250,100);
strokeWeight(10);
fill(247,147,15);
rect(200,200,100,100);
rectMode(CENTER);
rect(200,200,100,100);
ellipseMode(CENTER);
ellipse(200,200,100,100);
fill(175,126,178);
//noFill();
stroke(132,178,126,150);
noStroke();
ellipseMode(CORNER);
ellipse(200,200,100,100);

//stroke();
//noStroke();
//strokeWeight();
//fill();
//noFill();






};


