
const Engine = Matter.Engine;
const Bodies=Matter.Bodies;
const World= Matter.World;
const Constraint= Matter.Constraint;

var ground, box1;
var engine, world;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12;
var box13,box14,box15,box16;
var box17,box18,box19,box20,box21;
var box22,box23,box24;
var box25;
var polygon,polygonImg;


function preload(){
  polygonImg=loadImage("hexagon.png");
}
function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world = engine.world;
  
 // createSprite(400, 200, 50, 50);
 ground = new Ground(400,390,800,10);
 stand1= new Stand(345,322,240,10);
 stand2=new Stand(625,223,220,10);
 box1=new Box(250,303,30,40);
 box2=new Box(280,303,30,40);
 box3=new Box(310,303,30,40);
 box4=new Box(340,303,30,40);
 box5=new Box(370,303,30,40);
 box6=new Box(400,303,30,40);
 box7=new Box(430,303,30,40);
 box8=new Box(280,258,30,40);
 box9=new Box(310,253,30,40);
 box10= new Box(340,253,30,40);
 box11=new Box(370,253,30,40);
 box12=new Box(400,258,30,40);
 box13=new Box(310,223,30,40);
 box14=new Box(340,223,30,40);
 box15=new Box(370,223,30,40);
 box16=new Box(340,178,30,40);
 box17=new Box(560,206,30,40);
 box18=new Box(590,206,30,40);
 box19=new Box(620,206,30,40);
 box20=new Box(650,206,30,40);
 box21=new Box(680,206,30,40);
 box22=new Box(590,166,30,40);
 box23=new Box(620,166,30,40);
 box24=new Box(650,166,30,40);
 box25=new Box(620,126,30,40);
 polygon=Bodies.circle(50,310,20);
 World.add(world,polygon);
 slingshot= new SlingShot(this.polygon,{x:100, y:310})
}

function draw() {
 Engine.update(engine);
  background("lightBlue");  
  //drawSprites();
  textSize(20);
  fill("blue");
  //text (mouseX+ " , " + mouseY,30, 100);
  ground.display();
  stand1.display();
  stand2.display();
  fill("lightBlue");
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  fill("turquoise");
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  fill("yellow");
  box13.display();
  box14.display();
  box15.display();
  fill("pink");
  box16.display();
  fill("lightBlue");
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  fill("turquoise");
  box22.display();
  box23.display();
  box24.display();
fill("yellow");
box25.display();
  slingshot.display();
  imageMode(CENTER);
  image(polygonImg,polygon.position.x, polygon.position.y,40,40);
}



function mouseDragged(){
Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY });

}

function mouseReleased(){
slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(this.polygon);
  }
}