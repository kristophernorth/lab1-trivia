import { generateId } from "../utils/GenerateId.js"



export class Question {
  constructor(data) {
    this.id = generateId()
    this.type = data.type
    this.difficulty = data.difficulty
    this.category = data.category
    this.question = data.question
    // this.answered = false 
    // this.answeredCorrectly = false
    this.correctAnswer = data.correct_answer
    this.incorrectAnswer = data.incorrect_answer
  }
}