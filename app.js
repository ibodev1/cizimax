const temizleBtn = document.getElementById("temizle");
const canvas = document.querySelector("#draw");
const rangevalue = document.getElementById("cizgi");
const silgi = document.getElementById("silgi");
const renk = document.getElementById("renk");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = rangevalue.value;
// ctx.globalCompositeOperation = 'multiply';


function range() {
  console.log(rangevalue.value);
  ctx.lineWidth = rangevalue.value;
  console.log(ctx.lineWidth);
}

/*function color() {
        cizgirenk = `hsl(${hue}, 100%, 50%)`;
      }*/

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let opacity = 1;
let direction = true;
let cizgidurum = false;
let cizgirenk = `hsl(${hue}, 100%, 50%)`;

temizleBtn.addEventListener("click", temizle);

function temizle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = renk.value;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  silgi.addEventListener("click", function() {
    renk.value = "#ffffff";
    console.log("Silgi Aktif.");
  });

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

/* cizgi.addEventListener("click", function () {
          if (cizgidurum) {
            console.log("azalan çizgi");

            if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
              direction = !direction;
            }
            if (direction) {
              ctx.lineWidth++;
            } else {
              ctx.lineWidth--;
            }

          } else {

            console.log("düz çizgi");
            ctx.lineWidth = 50;

          }
          cizgidurum = !cizgidurum;
        }); */

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("mouseup", function () {
  isDrawing = false;
});
canvas.addEventListener("touchstart", function () {
  isDrawing = false;
});
canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("touchend", () => (isDrawing = false));


const panel = document.getElementById("panel");
const araclar = document.getElementById("araclar");
panel.addEventListener("click", function(){
  araclar.classList.toggle('aktif');
});