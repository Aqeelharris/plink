var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);

   engine = Engine.create();
    world = engine.world;

 
  for(var k = 0; k<=width; k = k +80 ){
    divisions.push(new Division( k, height-divisionHeight/2,10, divisionHeight))
  }
  
  for(var j =40;j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for(var q =15; q <=width-10; q=q+50){
    plinkos.push(new Plinko(j,175));
  }

  for(var a = 0;a <particles.length;a++){
    particles[a].display();
  }

  for(var k = 0; k< divisions.length; k++ ){
    divisions[k].display();
  }
}


function draw() {
  background(255,255,255); 
  
  divisions.display();
  drawSprites();
}