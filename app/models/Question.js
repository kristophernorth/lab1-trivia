import { generateId } from "../utils/GenerateId.js"



export class Question {
  constructor(data) {
    this.id = generateId()
    // this.type = data.type
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    // this.answered = false 
    // this.answeredCorrectly = false
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answer
    this.answers = 
  }

  get positionNumber() {
    return AppState.questions.findIndex(question => question.id == this.id) + 1
  }

  getquestionCard() {
    return `
    <div class="col-md-6">
      <div>
        <span>Question ${this.positionNumber}: </span><span>${this.difficulty}</span>
      </div>
      <div class="card">
        <p>${this.question}</p>
        <div class="border d-flex flex-wrap">
          Insert answers
        </div>
      </div>
    </div>    
    `
  }

}