//wanneer je scherm/browser is geladen, wordt je canvas getoond.
window.addEventListener("load", function () {
    const canvas = document.querySelector("canvas");
    //voeg context toe
    const ctx = canvas.getContext("2d");
    //geef canvas de hoogte en breedte van je browser
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    

    let painting = false;


function startPosition() {
painting = true;
};
function finishedPosition() {
painting = false;
};



function draw(e) {
    if(!painting) return;

    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY)


    console.log(e);
    };


    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);

    })