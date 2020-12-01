document.querySelector('video').playbackRate = 1
document.querySelector('.title').style.border = "5px solid red";
var a = document.getElementsByClassName('ytd-video-primary-info-renderer')[0]
function ChangeVitesse() {
    console.log(document.getElementById("vitesse2"))
    document.getElementById("vitesse2").textContent ="vitesse = "+document.getElementById("vitesse").value/10
    document.querySelector('video').playbackRate = document.getElementById("vitesse").value/10
}
var els = document.createElement('input');
els.type ="range";
els.id ="vitesse";
els.name ="vitesse";
els.min="0";
els.max="50";
els.value="10"
els.onchange =ChangeVitesse
var els2 = document.createElement('p');
els2.id ="vitesse2" 
a.appendChild(els);
a.appendChild(els2);


