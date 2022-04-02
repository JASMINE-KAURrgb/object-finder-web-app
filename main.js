var video="";
var status="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.position(500,580);
    video=createCapture(VIDEO);
    video.size(480,380);
    video.hide();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetecter=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    document.getElementById("textinput").value;
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
}