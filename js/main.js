document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "Symposium of Discovery"

function reDisplay() {

let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall. \n`
let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display`

let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offset
document.getElementById("url").textContent = document.URL;
document.getElementById("title").textContent = document.title;
document.getElementById("modified").textContent = document.lastModified;

}



reDisplay()