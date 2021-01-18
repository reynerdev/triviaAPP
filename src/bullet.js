

function bullet() {
  console.log('InsideBullet');
  let bulletContainer = document.getElementById('questionCounting');
  let canvasElement = document.createElement('canvas');
  let canvas = canvasElement.getContext('2d');


  canvasElement.width= 85
  canvasElement.height= 65
  let w  = 65
let h = canvasElement.height
console.log(canvasElement.width,h,"Sizes")
  
  // canvas.width = "65px";
  // // canvas.height = "65px";
  // canvas.beginPath();
  //   canvas.moveTo(canvas.width/2,canvas.height/2)
  

  canvas.beginPath()
  canvas.arc(
    w / 2,
    h / 2,
    w / 2 -2,
    0 * Math.PI,
    2 * Math.PI,
    false
  );
  canvas.lineWidth = 3;
  canvas.stroke();
    canvas.closePath()
  canvas.beginPath
  canvas.lineTo(w,h/2)
  canvas.lineTo(w+20,h/2)

  canvas.lineWidth = 3;

  canvas.stroke();

  // canvas.fill()

  console.log(canvasElement,"canvas Element")
  bulletContainer.appendChild(canvasElement);
}

export { bullet };
