import { bullet } from './bullet'
import TOKEN from './utils'


class manejadorPreguntas {

    constructor(){

        this.points = 0
        this.time = 0 
        this.currentQuestion = 1 
        this.questionList = null
        this.questionsElement
        
    }

    start(){


        }

    

    answerBlock(){

        
        let currentQuestion = this.questionElement[this.currentQuestion]
        let correctAnswer = currentQuestion['correct_answer'] 
        let arrAnswers=[] //
        let wrongAnswers = currentQuestion['incorrect_answers']
        // we create an object to every answer, we also add a propertie that indicates whether the quesito is True or Not
        arrAnswers.push({
            correct: true ,
            ans: correctAnswer
        })
        
        wrongAnswers.forEeach(element => arrAnswers.push({correct:false,ans:element}))
       

        //we sort the array to not always have the correct anwser in the first place

        arrAnswers =arrAnswers.sort(()=>Math.random()-0.5)

        // we render our questionBox Elements

        arrAnswers.forEach(element=> {

            let questionBox = document.createElement('div')
            let questionNumber = document.createElement('div')
            let questionAnswer = document.createElement('div')
            questionBox.className = 'questionBox'
            questionBox.setAttribute('id',value)
            questionNumber.className = 'questionNumber'
            questionAnswer.className = 'questionAnswer'
            questionAnswer.addEventListener('click',function(){

                if (element.correct===true){

                    this.points++
                } else 
                



            })

        })

        let questionBox = document.createElement('div')
        let questionNumber = document.createElement('div')
        let questionAnswer = document.createElement('div')
        questionBox.className = 'questionBox'
        questionBox.setAttribute('id',value)
        questionNumber.className = 'questionNumber'
        questionAnswer.className = 'questionAnswer'

    }


}

class bulletCanvas {

    constructor(){
        this.currentToUpdate = 1
        this.listBulletsCanvas = []
    }
    
    updateCanvasBullet(orderQuestion){

    //this function will update a bulletCanvas status inside our List
    // status = true => means that our question has been selected
    // update the currentQuestion in the manejadorPreguntas Class

    }


    updateListCanvas() {
        //This function will reneder our List

    }

    createListCanvas(currentQuestion){

        bullet(currentQuestion)
    }


}


const createBulletCanvas  = () => {
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


const retrieveQuestion =  () => {




    const TOKEN = TOKEN ;
    const questionArray
    // Type: multiple // boolean
    // category: is the ID

    // const URI = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${dificult}&type=${type}`
    const URI = 'https://opentdb.com/api.php?amount=10'

    fetch(URI).then(Response=>response.json()).then(questions=>{

        questionArray=questions

        //pongo el contener de block a none





    })
    
} 