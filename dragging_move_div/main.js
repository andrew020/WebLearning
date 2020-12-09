var div1 = document.createElement("div");
div1.className = "demo";
document.body.appendChild(div1);
div1.addEventListener("touchstart", process_touchstart, false);
div1.addEventListener("touchmove", process_touchmove, false);
div1.addEventListener("touchcancel", process_touchcancel, false);
div1.addEventListener("touchend", process_touchend, false);

var readyMoving = false;
var offsetX = 0;
var offsetY = 0;

// web mouse moving

div1.onmousedown = function (e) {
  offsetX = e.offsetX;
  offsetY = e.offsetY;
  readyMoving = true;
};

div1.onmouseup = function () {
  readyMoving = false;
};

document.body.onmousemove = function (e) {
  if (readyMoving === true) {
    div1.style.left = e.clientX - offsetX + "px";
    div1.style.top = e.clientY - offsetY + "px";
  }
};

// mobile touch moving

function process_touchstart(e) {
  offsetX = e.targetTouches[0].pageX - div1.offsetLeft;
  offsetY = e.targetTouches[0].pageY - div1.offsetTop;
  readyMoving = true;
}

function process_touchend(e) {
  readyMoving = false;
}

function process_touchcancel(e) {
  readyMoving = false;
}

function process_touchmove(e) {
  if (readyMoving === true) {
    div1.style.left = e.targetTouches[0].clientX - offsetX + "px";
    div1.style.top = e.targetTouches[0].clientY - offsetY + "px";
  }
}
