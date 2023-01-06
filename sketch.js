var pez;
var fondo;
var tiburon;
var calamar;
var cofre;
var fondoX = 640;
var fondoY = 350;
var tiburx = 700;
var tibury = 300;
var calamax = 2000;
var calamay = 400;
var cofrx = 700;
var cofry = 500;
var gameover;
var puntaje = 0;
function setup() {
    createCanvas(1280,700);
    background(255,255,0);
    fondo = loadImage("fondo.jpeg");
    pez = loadImage("pez.png");
    tiburon = loadImage("tiburon.png");
    calamar = loadImage("calamar.png");
    cofre = loadImage("cofre.png");
    gameover = loadImage("gameover.webp");
}

function draw() {
    image(fondo,fondoX,fondoY,1320,800);
    image(fondo,fondoX+1280,fondoY,1320,800);
    fondoX = fondoX -30;
    image(pez,100,mouseY,200,200);
    image(tiburon,tiburx,tibury,400,400);
    rotate (tiburon,180);
    image(calamar,calamax,calamay,360,360);
    image(cofre,cofrx,cofry,180,180);
    cofrx = cofrx -6.5;
    imageMode(CENTER);
    if(fondoX < -700){
    fondoX = 640;
    }
    if(tiburx < -1320){
    tiburx = 1330;
    tibury = random(0,700);    
    }
    if (calamax < -1320){
    calamax = 1600;
    calamay = random(0,700); 
    }
    if (cofrx < -1320){
    cofrx = 1830;
    cofry = random(0,700);
    }
    if(tiburx<300 && tiburx>0 &&(tibury>=mouseY-100 && tibury<=mouseY+100)){
        image(gameover,660,400);
        tibury=mouseY;
        tiburx=100;

    }else
      tiburx =tiburx -8;
    if(calamax<300 && calamax>0 &&(calamay>=mouseY-100 && calamay<=mouseY+100)){
        image(gameover,660,400);
        calamay=mouseY;
        calamax =100;
    }else
    calamax= calamax -10;
    if(cofrx<300 && cofrx>0 &&(cofry>=mouseY-100 && cofry<=mouseY+100)){
     puntaje = puntaje +1;
     cofrx = 1300;
    }
    fill ("orange");
    textSize(55);
    text("Puntos: "+puntaje,-5,50);
    textAlign(LEFT);

function random(max, min){ 
return Math.floor((Math.random()*(max-min+1))+min); 
}

}
function reiniciar(){
puntaje  = 0;
fondoX = 640;
tiburx = 700,
calamax = 2000;
cofrx= 700;
}
function musica(){
var audio = document.getElementById("audio");
 var boton = document.getElementById("boton musica");
if(boton.value == "off"){
audio.play();
boton.value = "on";
}else {
audio.pause();
boton.value = "off";
}

}