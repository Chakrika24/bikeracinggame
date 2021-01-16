var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bike1,bike2,bike3,bikes;

var track, bikes1,bikes2,bikes3,ground;

function preload(){
  track = loadImage("../images/track.jpg");
  bikes1 = loadImage("../images/bike1.png");
  bikes2 = loadImage("../images/bike2.jpg");
  bikes3 = loadImage("../images/images.jpg");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 3){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
    
    
  }
}
