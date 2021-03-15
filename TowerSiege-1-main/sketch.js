const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;

    block1 = new BlueBlock(300,275,30,40);
    block2 = new BlueBlock(330,275,30,40);
    block3 = new BlueBlock(360,275,30,40);
    block4 = new BlueBlock(390,275,30,40);
    block5 = new BlueBlock(420,275,30,40);
    block6 = new BlueBlock(450,275,30,40); 

    block7 = new PinkBlock(330,235,30,40);
    block8 = new PinkBlock(360,235,30,40);
    block9 = new PinkBlock(390,235,30,40);
    block10 = new PinkBlock(420,235,30,40);
    block11 = new PinkBlock(450,235,30,40);

    block12 = new GreenBlock(360,195,30,40);
    block13 = new GreenBlock(390,195,30,40);
    block14 = new GreenBlock(420,195,30,40);

    block15 = new OrangeBlock(390,155,30,40);
    block16 = new OrangeBlock(420,155,30,40);

    block17 = new YellowBlock(400,115,30,40);

    stone = new Stone(0,0,50);

    stand = new Stand(250,400,600,30);




}

function draw(){
    background("lightblue");
    Engine.update(engine);

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();

    block12.display();
    block13.display();
    block14.display();

    block15.display();
    block16.display();

    block17.display();
    

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x : mouseX , y : mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
