//functions
function myFunction(){
    var x = document.getElementById("navbar");
    if (x.className === "navbar"){
        x.className += "responsive";
    }
    else{
        x.className = "navbar"
    }
}
var text1 = "Welcome to my portfolio website.";
var speed = 50;
var i = 0;
function typeWriter(){
    if(i<text1.length){
        document.getElementById("text1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter,speed);}
}
var bspeed = 1000;
function blink(){
    const text = document.getElementById("text2");
    setInterval(()=>{
        text.style.opacity = text.style.opacity ==='0.5'?'1':'0.5';
    },bspeed);
}


function sleep(ms){
    return new Promise(r => setTimeout(r,ms))
}
function ani(){
    document.getElementById("slides").className = "anim";
}
function aniback(){
    document.getElementById("slides").className = "animback";
}
//execution
window.onload = typeWriter();
blink();

