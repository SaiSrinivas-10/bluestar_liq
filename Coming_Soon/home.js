var txt = ' COMING SOON';
var i = 0;
var speed = 500;


function typeWriter() 
{

    if (i < txt.length) {
        document.getElementById("comingsoon").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

}


function sendalert(){ 
    document.getElementById("alertmsg").style.display = "block";


}