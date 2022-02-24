var canvas, backgroundImage;
var tierra1,tierra2,tierra3,tierra4, tierra5,tierra6,tierra7,tierra8,tierra9,tierra10,tierra11,tierra12,tierra13,tierra14,tierra15,tierra16,tierra17,tierra18,tierra19,tierra20,tierra21;
var gameState = 0;
var playerCount;
var allPlayers;
var distanceX = 0;
var distanceY = 0;
var database;
var pared, osos;
var tierrasGroup;
var form, player, game;


//Definir variable de los osos
var bears,bear1,bear2,bear3;

var forest, bear1_img, bear2_img, bear3_img;
//Definir variable de los cazadores
var cazador1, cazador2,cazador3;

var cazador1_img,cazador2_img, cazador3_img;

function preload(){
  forest = loadImage("images/background.png");
  bear1_img = loadImage("images/Bear1.png");
  bear2_img = loadImage("images/Bear2.png");
  bear3_img = loadImage("images/Bear3.png");
  


  cazador1_img = loadImage("images/Cazador1.png");
  cazador2_img = loadImage("images/Cazador2.png");
  cazador3_img = loadImage("images/Cazador3.png");




}


function setup() {
  canvas = createCanvas(displayWidth - 50, displayHeight-10);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();


}

function draw() {
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }






  drawSprites();
}
