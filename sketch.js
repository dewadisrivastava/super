const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var engine,world
var superhero,bg,chain1,ground,box1,box2,box3,box4
var box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17
var monster1

function preload(){
  bg=loadImage("gamingbackground2.png")
}
function setup(){
  createCanvas(1200,500)
  engine=Engine.create()
  world=engine.world

  superhero=new Superhero(350,200,200,200)
  chain1=new Chain(superhero.body,{x:180,y:100});
  ground=new Ground(500,400,1000,10)

  monster1=new Monster(670,200,200,200)

  box1=new Box(470,195,30,30)
  box2=new Box(470,190,30,30)
  box3=new Box(470,185,30,30)
  box4=new Box(470,180,30,30)
  box5=new Box(470,175,30,30)
  box16=new Box(470,170,30,30)

 box6=new Box(510,195,30,30)
 box7=new Box(510,190,30,30)
 box8=new Box(510,185,30,30)
 box9=new Box(510,180,30,30)
 box10=new Box(510,175,30,30)
 box17=new Box(510,170,30,30)

 box11=new Box(560,195,30,30)
 box12=new Box(560,190,30,30)
 box13=new Box(560,185,30,30)
 box14=new Box(560,180,30,30)
 box15=new Box(560,175,30,30)
 box18=new Box(560,170,30,30)

 
}

function draw(){
  background(bg)
  Engine.update(engine)
  superhero.display()
  chain1.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()

 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()

 box11.display()
 box12.display()
 box13.display()
 box14.display()
 box15.display()
 box16.display()
 box17.display()
 box18.display()
 
 monster1.display()

}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}