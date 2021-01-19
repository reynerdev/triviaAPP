import TOKEN from './utils'



const retrieveQuestion =  () {

    class manejadorPreguntas {

        constructor(){

            
        }


    }


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