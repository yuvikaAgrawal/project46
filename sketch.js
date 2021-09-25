var gameState = "screen1"
var male, female, player1, submit1, submit2
var binImg, bin, hImg, hello, boyImg, boy, girlImg, girl, groundImg, ground
var screen3, bg2, startImg,start

function preload() {
  binImg = loadImage("bin.png");
  hImg = loadImage("hello.png");
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl (2).png");
  groundImg = loadImage("background.png");
  startImg= loadImage("start.png")
  screen3=loadImage("BG2.png")
}

function setup() {
  createCanvas(800, 400);
  ground = createSprite(400, 250);
  ground.addImage(groundImg);
  ground.scale = 0.8

  male = createSprite(300, 280, 10, 10)
  male.addImage(boyImg)
  male.scale = 0.05
  
  bin = createSprite(650, 90);
  bin.addImage("throw", binImg);
  bin.scale = 0.13
  
  hello=createSprite(410,80)
  hello.addImage(hImg)
  hello.scale=0.4
  
  girl = createSprite(450, 270);
  girl.addImage(girlImg);
  girl.scale = 0.12
  
  bg2= createSprite(400,200)
  bg2.addImage(screen3)
  bg2.scale=0.1
  
  start= createSprite(400,200);
  start.addImage(startImg);
  start.scale=0.07
   
  }

  function draw() {
    
    if (gameState === "screen1") {
      background(250, 246, 0);
      hello.visible=false;
      textSize(50)
      fill(255, 0, 250)
      text("throw the garbage", 200, 100)
      text(".............................", 200, 120)
      textSize(25);
    fill("red")
    text("please press space to start", 250, 200)
    male.visible = false
    girl.visible = false
    bg2.visible = false
    start.visible = false
    
    if (keyCode === 32) {
      gameState = "screen2"
    }
  }
  
  if (gameState === "screen2") {
    background(0, 250, 255)
    bin.visible = false;
    bg2.visible = false;
    start.visible = false;
    male.visible = true
    hello.visible = true
    girl.visible = true
    
    // male = createButton("MALE")
    // male.position(300, 300)
    
    // female = createButton("FEMALE")
    // female.position(400, 300)
    // boy = createSprite(320, 250);
    // boy.addImage(boyImg);
    // boy.scale = 0.05
    
    textSize(25);
    fill("blue")
    text("please fill enteries to start!!", 250, 170)
    
    
    if (mousePressedOver(male)) {
      player1 = createInput('NAME')
      player1.position(235, 330);
      submit1 = createButton('SUBMIT');
      submit1.position(235, 370)
      
      submit1.mousePressed(() => {
        gameState = "screen3"
        background(screen3)
        player1.hide()
        submit1.hide()
      })
    }
    
    
    if (mousePressedOver(girl)) {
      player2 = createInput('NAME')
      player2.position(400, 330);
      submit2 = createButton('SUBMIT');
      submit2.position(400, 370)
      
      submit2.mousePressed(() => {
        gameState = "screen3"
        background(screen3)
        start.visible=true
        
      })
    }
    
    // male.mousePressed(() => {
      //   //console.log("it is working")    
      //   player1 = createInput("NAME")
      //   player1.position(235, 330);
      //   submit1 = createButton('SUBMIT');
      //   submit1.position(235, 370)
      //   submit1.mousePressed(()=>{
        //     gameState="screen3" 
        //     submit1.hide()
        //     player1.hide()  
        //   })
        // })
        
        // female.mousePressed(() => {
          //   //console.log("it is working")
          //   player1 = createInput("NAME")
          //   player1.position(400, 330);
          //   submit2 = createButton("SUBMIT")
          //   submit2.position(400, 370)
          //   submit2.mousePressed(() => {
            //     gameState = "screen4"
            //     player2.hide()
            //     submit2.hide()
            //   })
            // })
          }
          
          if (gameState === "screen3") {
            ground.visible=false
            //console.log("I am here.!! yipppieee!!!")
            male.visible = false
            girl.visible = false
            hello.visible = false
            start.visible=true
             

            if (mousePressedOver(start)){
              console.log("working");
              
            }
            
  }
  drawSprites();
}


// hide(){
//   male.hide()
//   female.hide()
//   player1.hide()
//   player2.hide()
//   submit1.hide()
//   submit2.hide()
// }




