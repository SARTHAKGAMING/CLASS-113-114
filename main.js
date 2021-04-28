function preload() {
    //
    //
}

function setup() {

 canvas=createCanvas(640,400);

    canvas.position(630,250);
video=createCapture(VIDEO);
video.hide();
tintcolour="";
}

function draw() {


    image(video,0,0,640,400);

    tint(tintcolour);


}
function take_snapshot(){
    save("342mf899 - i9i03rha8re[ef0] - naoir32qhisfj[3q0jhf0qje].png");

}
function change_btn(){
    tintcolour=document.getElementById("take123").value;
}