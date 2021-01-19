function bullet() {
  console.log('InsideBullet');
  let bulletContainer = document.getElementById('questionCounting');
  let canvasElement = document.createElement('canvas');
  let canvas = canvasElement.getContext('2d');

  canvasElement.width = 85;
  canvasElement.height = 65;
  canvasElement.innerText = '1';
  let w = 65;
  let w2 = 45;
  let h = canvasElement.height;

  // add Text to the canvas

  /// drawing the countur of the circle
  canvas.beginPath();
  canvas.arc(w / 2, h / 2, w / 2 - 2, 0 * Math.PI, 2 * Math.PI, false);
  canvas.lineWidth = 2;
  canvas.strokeStyle = '#E53170';
  canvas.stroke();

  canvas.closePath();

  // drawing the inner circle fill

  canvas.beginPath();
  canvas.arc(w / 2, h / 2, w2 / 2 - 2, 0 * Math.PI, 2 * Math.PI, false);
  canvas.fillStyle = '#E53170';
  canvas.fill();
  canvas.closePath();

  // Line to the right of the circle

  let lastElement = false;
  if (lastElement !== true) {
    canvas.beginPath;
    canvas.moveTo(w, h / 2);
    canvas.lineTo(w + 20, h / 2);

    canvas.lineWidth = 2;

    canvas.stroke();

    canvas.closePath;
  }

  canvas.beginPath();
  canvas.fillStyle = 'white';
  canvas.textAlign = 'center';
  canvas.font = 'bold 30px Arial';
  canvas.fillText('1', w / 2, h / 2 + 10);
  canvas.closePath();
  console.log(canvasElement, 'canvas Element');
  bulletContainer.appendChild(canvasElement);
}

export { bullet };
