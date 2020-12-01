//name spacing
const  Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;


var engine,world;
var ground,box;
var ball;
function setup(){
createCanvas(400,400)
//creating our engine
engine = Engine.create();
//creating our wrld
world = engine.world;


//adding bodies to the world
var goptions = {

isStatic:true

}

var boptions = {

restitution:2.0


}



box = Bodies.rectangle(200,200,50,50,boptions)
ground = Bodies.rectangle(200,380,400,10,goptions)
ball = Bodies.circle(100,100,25)
World.add(world,box);
World.add(world,ground);
World.add(world,ball);


}



function draw(){
background("black");
rectMode(CENTER)
Engine.update(engine)
fill("white")
rect(box.position.x,box.position.y,50,50)
rect(ground.position.x,ground.position.y,400,10)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,25,25)



}