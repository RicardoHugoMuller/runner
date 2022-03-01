var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);

// Movendo o fundo 
path=createSprite (200,200);
path.addImage (pathImg);
path.velocityY = 4;
path.scale = 1.2;
//Criando menino que corre 
boy = createSprite (200,300);
boy.addAnimation("Runner",boyImg);
boy.scale = 0.05;
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(400,0,100,800);
rightBoundary.visible = false;
}


function draw() {
background("black");

// Menino se movendo no eixo X com o mouse
if (World.mouseX) {
    boy.x = World.mouseX;
  }

//edges = createEdgeSprites();
//boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);

 //Reiniciar o fundo
 if(path.y > 400){
    path.y = 100;
 }


 drawSprites();

 }


