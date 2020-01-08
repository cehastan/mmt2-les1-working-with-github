var rood = 10;
var blauw = 400;
var groen = 255;
var vincent = "hallo";

function setup() {
  // put setup code here

  createCanvas(400,400);
  background(240); // groen

}

function draw() {
  background (0,400-mouseX,mouseY);
  // put drawing code here

  rood = random(0,255);
  blauw = random(0,255);
  groen = random(0,255);

  console.log (mouseX);
  
  // background(rood,groen,blauw,random(255));
  // console.log(vincent);

  
  noStroke();
  fill(100,300,200);
  ellipse(200,200,mouseX,mouseY);

  fill(600,300,200);
  rect (150,150,100,100);
  

  fill(100,500,700);
  ellipse(200,200,50,50);

  stroke (600,300,200);
  line (200,0,200,400);

  stroke (600,300,200);
  strokeWeight (10);
  line (0,200,400,200);

  
  
}