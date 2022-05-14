status = "";
video = "";

function preload(){

    video = createVideo("video.mp4");
    video.hide();

}

function setup(){

    canvas = createCanvas(800,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}

function start(){

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : OBJECTS DETECTING";
    name_of_object = document.getElementById("object_name").value;

}

function modelLoaded(){

    console.log("OK. HERE'S THE RULES. THIS MODEL HAS BEEN TURNED ON AND YOU ARE NOT ALLOWED TO TURN IT OFF UNLESS YOU WANT TO BE VERY SORRY.");
    status = true;

}

function draw(){

    image(video, 1, 1, 800, 600);

}