var text1 = "MANDEEP KAUR";
var speed = 50;
var i = 0;
function typeWriter(){
    if(i<text1.length){
        document.getElementById("name").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter,speed);}
}
window.onload = typeWriter();
