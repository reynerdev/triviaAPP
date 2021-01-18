function bullet() {
  console.log('InsideBullet');
  let bulletContainer = document.getElementById('questionCounting');
  let canvasElement = document.createElement('canvas');
  let canvas = canvasElement.getContext('2d');

  canvas.width = 65;
  canvas.height = 65;
  canvas.beginPath();
  //   canvas.moveTo(canvas.width/2,canvas.height/2)
  canvas.arc(
    canvas.width / 2,
    canvas.height / 2,
    canvas.width / 2,
    0 * Math.PI,
    2 * Math.PI,
    false
  );

  canvas.lineWidth = 10;
  canvas.strokeStyle = 'black';
  canvas.stroke();

  bulletContainer.appendChild(canvasElement);
}

export { bullet };
