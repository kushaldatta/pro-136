//JS Code
var status = "";

function preload() { }

function setup() {
    canvas = createCanvas(480, 400);
    canvas.position(450, 300);
    video = createCapture(VIDEO);
    video.size(480, 400);
    video.hide();
}

function draw() {
    image(video, 0, 0, 480, 400);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    objectName = document.getElementById("object_name").value;
}

function modelLoaded() {
    console.log("CoCoSSD model is loaded.");
    status = true;
}