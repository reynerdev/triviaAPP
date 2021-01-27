import { bullet } from './bullet';
import TOKEN from './utils';

let idInterval = '';
const retrieveQuestion = (selectedData) => {

  let questionArray = [];


  
  const URI = returnUri(selectedData);

  console.log(URI, 'NEWWWWWWWWWWWWWWWWWW URI');
  fetch(URI)
    .then((response) => response.json())
    .then((questions) => {
      
      if (questions.results.length === 0) {
        window.alert(
          'Theres no questions for this combination. Please click on Again!'
        );
        return;
      }
    
      questionArray = questions;
     

      const mp = new manejadorPreguntas(questionArray.results, true);

      mp.start();
    })
    .catch((err) => console.log(err));
};

const returnUri = (selectedData) => {
  const category =
    selectedData.category_name === 'Any'
      ? ''
      : `&category=${selectedData.category}`;
  const difficulty =
    selectedData.dificulty === 'Any'
      ? ''
      : `&difficulty=${selectedData.dificulty.toLowerCase()}`;
  const type =
    selectedData.type === 'Any'
      ? ''
      : selectedData.type === 'Multiple Choice'
      ? '&type=multiple'
      : '&type=boolean';

  const URI = `https://opentdb.com/api.php?amount=10${category}${difficulty}${type}`;

  return URI;
};

const restoreElements = () => {
  console.log('RESTOREEEEEEEEEEEE ELEMENTS ');
  let bulletContainer = document.getElementById('questionCounting');
  let answerBoxElement = document.getElementById('answerBox');
  
  let bottomElement = document.getElementById('bottom');
  let earnedPoints = document.getElementById('EarnedPoints');
  console.log('Earned Points');
  earnedPoints.innerHTML = 0;
  let questionElement = document.getElementById('question');

  answerBoxElement.classList.remove('animate__animated', 'animate__bounceIn');
  questionElement.classList.remove('animate_animated', 'animate__heartBeat');
  bulletContainer.removeAttribute('style');
  answerBoxElement.removeAttribute('style');
  bottomElement.removeAttribute('style');
  questionElement.removeAttribute('style');


};

class manejadorPreguntas {
  constructor(questionList, startTime) {
    this.points = 0;
    this.time = 0;
    this.currentQuestion = 1;
    this.questionList = questionList;
    this.startTime = startTime;
    this.idInterval = '';
  }

  start() {
    this.updateListBullets();
    if (this.currentQuestion === 11) {
      clearInterval(idInterval);
      let bulletContainer = document.getElementById('questionCounting');
      let answerBoxElement = document.getElementById('answerBox');
      let bottomElement = document.getElementById('bottom');
      let questionElement = document.getElementById('question');
      let earnedPoints = document.getElementById('EarnedPoints');
      let newBottom = `<div class="bottom"  delete='ok' style="margin-top: 0px;">
      <div class="point">
        <span class="pointTxt">Points:</span>
        <span class="pointValue" id="EarnedPoints">${this.points}</span>
        <span class="pointPt">pt</span>
      </div>

      <div class="time" style="margin-left: 200px;">
        <span class="timeTxt">Time:</span>
        <span class="timeValue" id="timeValue">${this.time}</span>
        <span class="timeValue" id="timeValue">s</span>
      </div>
    </div>`;
      
      bulletContainer.style.display = 'none';

     
      answerBoxElement.innerHTML = '';
      answerBoxElement.style.height = '300px';
      answerBoxElement.classList.add('animate__animated', 'animate__bounceIn');
      questionElement.innerHTML = 'Final Result !!';
      questionElement.classList.add('animate_animated', 'animate__heartBeat');
      questionElement.style.fontSize = '64px';
      bottomElement.style.display = 'none';
      answerBoxElement.innerHTML = newBottom;
      earnedPoints.innerHTML = 0;

      return;
    }

    this.answerBlock();

    if (this.startTime === true) {
   
      this.idInterval = setInterval(() => {
        let timeValueElement = document.getElementById('timeValue');
        timeValueElement.innerHTML = this.time;
        this.time = this.time + 1;
     
      }, 1000);
      idInterval = this.idInterval;
      this.startTime = false;
    }
  }

  updateListBullets() {
    let bulletContainer = document.getElementById('questionCounting');
    bulletContainer.innerHTML = '';
    bullet(this.currentQuestion);
  }

  answerBlock() {
    
    let currentQuestion = this.questionList[this.currentQuestion - 1];
    let correctAnswer = currentQuestion['correct_answer'];
    let questionElement = document.getElementById('question');
    let answerboxElement = document.getElementById('answerBox');
    let question = currentQuestion['question'];
    let arrAnswers = []; //
    let wrongAnswers = currentQuestion['incorrect_answers'];
    let earnedPointsElement = document.getElementById('EarnedPoints');
    // we create an object to every answer, we also add a propertie that indicates whether the quesito is True or Not
    arrAnswers.push({
      correct: true,
      ans: correctAnswer,
    });

    wrongAnswers.forEach((element) =>
      arrAnswers.push({ correct: false, ans: element })
    );

    //we sort the array to not always have the correct anwser in the first place

    arrAnswers = arrAnswers.sort(() => Math.random() - 0.5);

    // we render our questionBox Elements
    //clean answerBox Element first

    answerboxElement.innerHTML = '';
  
    earnedPointsElement.innerHTML = this.points;
    arrAnswers.forEach((element, index) => {
      let questionBox = document.createElement('div');
      let questionNumber = document.createElement('div');
      let questionAnswer = document.createElement('div');
      questionBox.className = 'questionBox';
      // animate.css class
      questionBox.classList.add('animate__animated', 'animate__bounceIn');
      questionNumber.className = 'questionNumber';
      questionAnswer.className = 'questionAnswer';
      questionNumber.innerHTML = index + 1;
      questionAnswer.innerHTML = element.ans;
      questionBox.addEventListener('click', () => {
        if (element.correct === true) {
          console.log('element correct true');
          this.points += 100;
          this.currentQuestion++;
          this.start();
        } else {
          this.currentQuestion++;
          // questionBox.classList.add('animate__animated', 'animate__headShake');
          this.start();
        }
      });

      questionBox.appendChild(questionNumber);
      questionBox.appendChild(questionAnswer);

      answerboxElement.appendChild(questionBox);
    });

    // display de Question

    questionElement.innerHTML = decodeURI(question);
  }
}

const createBulletCanvas = () => {
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
 
  bulletContainer.appendChild(canvasElement);
};

export { manejadorPreguntas, retrieveQuestion, idInterval, restoreElements };
