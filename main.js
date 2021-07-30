function preload(){



}


function setup(){

    canvas = createCanvas(400, 400);
    canvas.center(); 
    
    video = createCapture(VIDEO);
    video.hide();

    object_detector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";

}

function draw(){

    image(video, 0, 0, 400, 400);
    
}

function modelLoaded(){

    console.log("the model has been loaded");

}