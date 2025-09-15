function greet(name = "Stranger") {
  console.log(`Hello, ${name}!`);
}
greet();


let position = 0;
let element = document.getElementById('animatedBox');
function animateBox() {
  position += 1;
  element.style.left = position + 'px';
  if (position < 200) {
    requestAnimationFrame(animateBox);
  }
}
animateBox();


document.getElementById("animateBtn").addEventListener("click", function () {
  const box = document.getElementById("box");
  box.classList.toggle("animate");
});