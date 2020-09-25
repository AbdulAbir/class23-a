const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 

var engine,world;



function setup() {
  
  createCanvas(windowWidth,windowHeight);
 
 engine =  Engine.create();
 world = engine.world

 ball1 = new ball(200,200,40,50);
 
}

function draw() {
// background("red");
  Engine.update(engine);  
  ball1.display();
 
}