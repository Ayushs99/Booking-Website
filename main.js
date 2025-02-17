var count = document.querySelectorAll(".box-1").length;
for (var i = 0; i < count; i++) {
  var mouse_hover = document.querySelectorAll('.box-1')[i];
  var mouse_hover_1=document.querySelector(".box-2");
  mouse_hover_1.addEventListener("mouseover",hover);
  mouse_hover_1.addEventListener("mouseout",click);
  mouse_hover.addEventListener("mousemove", hover);
  mouse_hover.addEventListener("mouseout", click);
}

function hover() {
  this.style.transform = 'scale(1.02)';
  this.style.transition = 'ease-in-out 1s';
}

function click() {
  this.style.transform = 'scale(1)';
}