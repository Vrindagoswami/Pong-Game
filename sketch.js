var computerPaddle,playerPaddle,ball;
var gameState = "serve";
var computerScore = 0;
var playerScore = 0;
function preload(){
  
  
}
function setup() {
  createCanvas(400, 400);
  computerPaddle = createSprite(10,150,10,80);
  //computerPaddle.shapeColor ="lightpink";
  
  playerPaddle = createSprite(390,150,10,80);
  
  ball = createSprite(200,200,10,10);
  
  
  
}

function draw() {
  background("white");
  
   text(computerScore,180,20);
  text(playerScore,220,20);
  playerPaddle.y = World.mouseY;
  computerPaddle.y = ball.y;
  
  if(gameState === "serve"){
    text("Press space to serve",150,180); 
    
  }
  
  if(keyDown("space") && gameState === "serve"){
    ball.velocityY = 4;
    ball.velocityX = 4;
    gameState = "play";
  }
  
  for(var i = 0; i<400; i=i+20){
    line(200,i,200,i+10);
  }
  
  if(ball.x<0 || ball.x>400){
    if(ball.x<0){
      playerScore = playerScore+1;
    }
    
    if(ball.x>400){
      computerScore = computerScore+1;
    }
    
    gameState = "serve";
    reset();
  }
  
  if(playerScore === 5 || computerScore === 5){
    gameState = "over";
    text("Game over",200,200);
    text("Press R to restart",200,230);
  }
  
  if(keyDown("r") && gameState === "over"){
    gameState = "serve";
    computerScore = 0;
    playerScore = 0;
  }
  edges = createEdgeSprites();
  ball.bounceOff(edges[2]); 
  ball.bounceOff(edges[3]);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}