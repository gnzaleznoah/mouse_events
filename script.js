var boxBall = document.querySelector('#ballBox');
var mydot = document.querySelector('#dot');

boxBall.addEventListener("click", getClickPosition, false);

function getClickPosition(e){
    var xPosition = e.offsetX -25;
    var yPosition = e.offsetY -25;

    var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)"; 
    mydot.style.transform = translate3dValue;
}

const pointBox = document.querySelector('.dot-box');
const pointer = document.querySelector('#point');

pointBox.addEventListener('mousedown', (e) => {
    pointBox.innerHTML = e.offsetX + ',' + e.offsetY;

    console.log("Client: " , e.clientX , e.clientY)
    console.log("Page: " , e.pageX , e.pageY)
    console.log("Screen: " , e.screenX , e.screenY)
    console.log("Event Object: ", e); 
} );

var athenaPic = document.querySelector('.athena');

    function blendOne(){
        athenaPic.setAttribute("id", "blend1");
    }
    function blendTwo(){
        athenaPic.setAttribute("id", "blend2");
    }
    function blendThree(){
        athenaPic.setAttribute("id", "blend3");
    }