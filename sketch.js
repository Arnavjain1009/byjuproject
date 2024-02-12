var splashscreen
var playbutton
var aboutbutton
var gameState = "wait"
var level1

function preload(){
    splashscreen = loadImage("assets/backrooms.gif");
    level1 = loadImage("assets/level1.jpg");
    //playbutton = loadImage("assets/PLAYBUTTON.png")
    //aboutbutton = loadImage("assets/ABOUTBUTTON.png")
}


function setup(){
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/PLAYBUTTON.png");
    playbutton.position(windowWidth/20, windowHeight/3);
    playbutton.size(120,120);
    playbutton.hide()

    aboutbutton = createImg("assets/ABOUTBUTTON.png");
    aboutbutton.position(windowWidth/20, windowHeight/1.5);
    aboutbutton.size(120,120);
    aboutbutton.hide()
}

function draw(){
    if(gameState == "wait"){
        background(splashscreen);
        playbutton.show();
        aboutbutton.show();
    }

    playbutton.mousePressed( () =>{
        gameState = "level1";
        playbutton.hide();
        aboutbutton.hide();
    })

    aboutbutton.mousePressed( () =>{
        gameState = "about";
        playbutton.hide();
        aboutbutton.hide();
    })

    if(gameState == "level1"){
        background(level1)
    }

    if(gameState == "about"){
        aboutGame();
    }
}

function aboutGame(){
    swal({
      title: "About Game" ,
      text: "this info will come later",
      textAlign: "center",
      imageUrl: "assets/backrooms.gif",
      imageSize: "200x200",
      confirmButtonText: "Go back to main screen",
      confirmButtonColor: "red"     
    }, 
    function(){
        gameState = "wait"
    }
    )
}