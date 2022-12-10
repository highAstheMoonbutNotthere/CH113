function preload(){

}

function setup(){
    canvas= createCanvas(750,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tintcolor = "";

}

function draw() {
    background("green")
    image(video,100,100,550,400);
    tint(tintcolor);
    fill("cyan")
    rect(0,0,40,600)
    rect(0,0,750,40)
    rect(710,0,40,600)
    rect(0,560,750,40)
    fill("blue")
    for(var i=0; i<31; i++){
        circle(0,20*i,20)
        circle(750,20*i,20)
    }
    for(var i=0; i<38; i++){
        circle(20*i,0,20)
        circle(20*i,600,20)
    }

}

function applyFilter() {
    tintcolor = document.getElementById("colors").value;
}

function take_snapshot() {
    save("notAvirus.png");
}