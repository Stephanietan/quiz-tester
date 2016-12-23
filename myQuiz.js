/*
Create your quiz in this file.
Note the tests will only work if you name your functions accordingly based on the instructions.
*/

//constructor function to create questions
function Question(text,choices,answer) {
  this.text = text;
  this.choices = choices; // array of answers
  this.answer = answer //correct answer from choices
}

var qn1 = new Question('the question', ['answer a', 'answer b', 'answer c', 'answer d'], 0)
var qn2 = new Question('the question', ['answer a', 'answer b', 'answer c', 'answer d'], 0)
var qn3 = new Question('the question', ['answer a', 'answer b', 'answer c', 'answer d'], 0)
var qn4 = new Question('the question', ['answer a', 'answer b', 'answer c', 'answer d'], 0)
var qn5 = new Question('the question', ['answer a', 'answer b', 'answer c', 'answer d'], 0)

//contain scores and number of questions
var quiz = {
  player1score: 0,
  player2score:0,
  playerTurn: 1, // take turn to play
  questions: [qn1,qn2,qn3,qn4,qn5], // array of questions
  questionIndex: 0, //current question
  isGameOver: false //game is not over
}

// It should return an integer that is the number of questions in a game
function numberOfQuestions() {
  return quiz.questions.length
}

numberOfQuestions()

// It should return an integer that is the zero-based index of the current question in the quiz
function currentQuestion() {
  return quiz.questions[quiz.questionIndex]
}

currentQuestion()

// It should return an integer that is the zero-based index the correct answer for the currrent question
function correctAnswer() {
  return quiz.questions[quiz.questionIndex].answer
}

correctAnswer()

// It should return an integer that is the number of choices for the current question
function numberOfAnswers() {
  return quiz.questions[quiz.questionIndex].choices.length
}

numberOfAnswers()

// It should take a single integer, which specifies which choice the current player wants to make.
// It should return a boolean true/false if the answer is correct.
function playTurn(choice) {
  if (choice === quiz.questions[quiz.questionIndex].answer) {
  // if (this.choices[choice] === this.answer && this.choices[choice] === playerTurn)
    if (quiz.playerTurn === 1) {
      playerTurn = 2
    }
    else if (quiz.playerTurn === 2) {
      playerTurn = 1
    }
    return true
  }
  else {
    return false
  }
}

console.log(playTurn(0));

// It should return a true or false if the quiz is over.
function isGameOver() {
  return quiz.isGameOver
}


// It should return 0 if the game is not yet finished.
// Else it should return either 1 or 2 depending on which player won.
// It should return 3 if the game is a draw.
function whoWon() {
  if (!quiz.isGameOver) {
    return 0
  }
  else if (quiz.isGameOver) {
    if (quiz.player1score > quiz.player2score) {
      return 1
    }
    else if (quiz.player2score > quiz.player1score) {
      return 2
    }
  }
  else {
    return 3
  }
}

console.log(whoWon());

// It should restart the game so it can be played again.
function restart() {
  quiz.questionIndex = 0
  quiz.isGameOver = false
  quiz.player1score = 0
  quiz.player2score = 0
  quiz.playerTurn = 1
}

console.log(restart());
