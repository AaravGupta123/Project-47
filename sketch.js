
var Player;
var database;
var position;

var wall1, wall2, wall3, wall4, wall5, wall6,wall7,wall8;
var wall9, wall10, wall11, wall12, wall13, wall14,wall15,wall16;
var wall17, wall18, wall19, wall20, wall21, wall22, wall23,wall24;
var prize, prizeimg
//var player
var player2
var player1Score=0
var player2Score=0
var coinsGroup
//player1
var playerImgRight
var playerImgDown
var playerImgLeft
var playerImgUp
//player2
var player2ImgRight
var player2ImgDown
var player2ImgLeft
var player2ImgUp

var score1







function preload(){
  prizeimg=loadImage("coin.png")
  //player1
  playerImgRight=loadImage("redRight.png")
  playerImgDown=loadImage("redDown.png")
  playerImgLeft=loadImage("redLeft.png")
  playerImgUp=loadImage("redUp.png")
  //player2
  player2ImgRight=loadImage("blueRight.png")
  player2ImgDown=loadImage("blueDown.png")
  player2ImgLeft=loadImage("blueLeft.png")
  player2ImgUp=loadImage("blueUp.png")
}
function setup(){
  createCanvas(400,400)

  database = firebase.database();
    var locationOfPlayer = database.ref('Player/positions')
    locationOfPlayer.on("value",readOp,showError)
    Player = createSprite(250,250,10,10);
    Player.addImage("b",playerImgUp)
    Player.scale=0.02
    Player.shapeColor = "red";
    var scoreOfPlayer1=database.ref('Player/score')
    scoreOfPlayer1.on("value", readScore, showError)
    //var scoreOfPlayer2=database.ref('player2/score2')
   // scoreOfPlayer2.on("value", readScore2, showError)
    coinsGroup=createGroup()


    var locationOfplayer2 = database.ref('player2/positions2')
    locationOfplayer2.on("value",readOperation,showError)
    player2 = createSprite(100,100,10,10);
    player2.addImage("r",player2ImgUp)
    player2.scale=0.04
    player2.shapeColor = "green";

  /*player = createSprite(5,5,10,10)
  player.shapeColor="red"
  player2 = createSprite(5,20,10,10)
  player2.shapeColor="blue"*/

  
   wall1 = createSprite(10,70,100,20);
wall1.shapeColor= "blue";

 wall2 =createSprite(100,50,20,100);
wall2.shapeColor = "blue";

 wall3 =createSprite(80,130,100,20);
wall3.shapeColor = "blue";

 wall4 =createSprite(50,250,20,100);
wall4.shapeColor = "blue";

 wall5 = createSprite(130,210,100,20);
wall5.shapeColor = "blue";

 wall6 =createSprite(10,250,100,20);
wall6.shapeColor = "blue";

 wall7 = createSprite(160,120,20,100);
wall7.shapeColor = "blue";

 wall8 =createSprite(150,20,100,20);
wall8.shapeColor = "blue";

 wall9 = createSprite(210,200,20,100);
wall9.shapeColor = "blue";

 wall10 = createSprite(120,300,20,100);
wall10.shapeColor = "blue";

 wall11 = createSprite(30,350,20,100);
wall11.shapeColor = "blue";

 wall12 = createSprite(250,70,20,100);
wall12.shapeColor = "blue";

 wall13 = createSprite(360,120,20,100);
wall13.shapeColor = "blue";

 wall14 =createSprite(291,160,100,20);
wall14.shapeColor = "blue";

 wall15 =createSprite(330,40,100,20);
wall15.shapeColor = "blue";

 wall16 =createSprite(350,210,100,20);
wall16.shapeColor = "blue";


 wall17 = createSprite(350,400,20,100);
wall17.shapeColor = "blue";



 wall19 =createSprite(349,290,100,20);
wall19.shapeColor = "blue";

 wall20 = createSprite(290,290,20,100);
wall20.shapeColor = "blue";

 wall21 =createSprite(270,390,100,20);
wall21.shapeColor = "blue";

 wall22 = createSprite(170,390,20,100);
wall22.shapeColor = "blue";
  
 wall23=createSprite(190,330,100,20);
wall23.shapeColor = "blue";

wall24 = createSprite(250,290,20,100);
wall24.shapeColor = "blue";
  
  
}
function draw(){
  background("white")


  coins();
  createEdgeSprites()
  
  
  Player.collide(wall1)
  Player.collide(wall2)
  Player.collide(wall3)
  Player.collide(wall4)
  Player.collide(wall5)
  Player.collide(wall6)
  Player.collide(wall7)
  Player.collide(wall8)
  Player.collide(wall9)
  Player.collide(wall10)
  Player.collide(wall11)
  Player.collide(wall12)
  Player.collide(wall13)
  Player.collide(wall14)
  Player.collide(wall15)
  Player.collide(wall16)
  Player.collide(wall17)
  //player.collide(wall18)
  Player.collide(wall19)
  Player.collide(wall20)
  Player.collide(wall21)
  Player.collide(wall22)
  Player.collide(wall23)
  Player.collide(wall24)


  
  
  //player1
    if(keyDown(LEFT_ARROW)){
      //Player.changeImage("q", playerImgLeft)
        changePosition(-1,0);
        //console.log(Player.addImage())
    }
    else if(keyDown(RIGHT_ARROW)){
      Player.changeImage("w", playerImgRight)
        changePosition(1,0);

    }
    else if(keyDown(UP_ARROW)){
      Player.changeImage("e", playerImgUp)
        changePosition(0,-1);
        
    }
    else if(keyDown(DOWN_ARROW)){
      Player.changeImage("m", playerImgDown)
        changePosition(0,+1);
        
    }


    //player2

    if(keyCode===97){
      player2Pos(-1,0);
  }
  else if(keyCode===100){
    player2Pos(1,0);
  }
  else if(keyCode===119){
    player2Pos(0,-1);
  }
  else if(keyCode===115){
    player2Pos(0,+1);
  }




      //player1
    if (coinsGroup.isTouching(Player)){
      player1Score=player1Score+1
      coinsGroup.destroyEach()

    }

    //player2
    if (coinsGroup.isTouching(player2)){
      player2Score=player2Score+1
      coinsGroup.destroyEach()

    }

    drawSprites();
    fill("red")
    text(player1Score, 20,10)
    fill("blue")
    text(player2Score, 20,30)

    

  
  /*if(player.isTouching(prize)){
    textSize(30)
    fill("red")
    text("Red Has Won",140,200)
  }
    if(player2.isTouching(prize)){
    textSize(30)
    fill("blue")
    text("Blue Has Won",140,200)
  }*/
}
//player1
function changePosition(x,y){
  database.ref('Player/positions')
  .set({
      x:Player.x+x,
      y:Player.y+y
  })
}

// player2
function player2Pos(x,y){
  database.ref('player2/positions2')
  .set({
      x:player2.x+x,
      y:player2.y+y
  })
}

//player1
function readOp(data){
  position = data.val()
  Player.x = position.x
  Player.y = position.y 
}
function readScore(data){
  score1=data.val()
  Player.p1score=score1.p1score

 
}

if (coinsGroup.isTouching(Player)){
  database.ref('Player/score').set({
    p1score:Player.p1score+p1score
    //player1Score=player1Score+1
    //coinsGroup.destroyEach()
  })
  
}

//player2
function readOperation(data){
  positions2 = data.val()
  player2.x = positions2.x
  player2.y = positions2.y 
}

function showError(){
  console.log("error")
}

function coins(){
  if(frameCount%60===0){
prize = createSprite(385,385,5,5)
 prize.addImage("p", prizeimg)
 prize.scale=0.01
 prize.velocityX=-2
 prize.y=random(10,350)
 coinsGroup.add(prize)
  }
}