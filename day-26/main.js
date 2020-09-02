const section = document.querySelector('section');
const logo = document.querySelector('.logo')
const FPS = 60;
section.style.height = window.innerHeight+'px';
section.style.width = window.innerWidth+'px';

let xPosition = 100;
let yPosition = 100;
let xSpeed = 4;
let ySpeed = 4;
function update(){
  logo.style.left = xPosition;
  logo.style.top = yPosition;
}

setInterval( () => {
  if(xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0){
    xSpeed = -xSpeed;
    logo.style.fill = randomColor();
  }
  if(yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0){
    ySpeed = -ySpeed;
    logo.style.fill = randomColor();
  }
  xPosition += xSpeed;
  yPosition += ySpeed;
  update();

},1000/FPS)
function randomColor(){
  let color = '#';
  color += Math.random().toString(16).slice(2,8).toUpperCase();

  return color;
}
console.log(randomColor())

window.addEventListener('resize', ()=> {
  location.reload();
})
