var divElem;

function init() {
  console.log("page loaded and DOM is ready");

  // use the selection API to select the div
  divElem = document.getElementById("wavingFlag");


}

var currentImage = 0;

function animateFlag() {

  drawFlag(currentImage);
  // next time, show next sprite/subimage
  currentImage = (currentImage +1) % 6;

}

function drawFlag(indexImage) {
  // set the left pos of the div using the left margin
  divElem.style.marginLeft = "px";
  // change the width and height of the div
  divElem.style.width = "100px";
  divElem.style.height = "100px";
  // remove the text inside the div
  divElem.innerHTML = "";
  // set the background image
  divElem.style.backgroundImage = "url(readyImages/scotspriteflag.jpg)";
  // remove the background color
  divElem.style.backgroundColor = "transparent";
  // select the starting pos in the background image
  var offset = indexImage * 100;
  divElem.style.backgroundPosition  = offset + "px";
}