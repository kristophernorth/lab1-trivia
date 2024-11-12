import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"


class QuestionsService {
  async getQuestion() {
    const response = await triviaAPI.get(`api.php?amount=10`)
    AppState.questions = response.data.map(questionPOJO => new Question(questionPOJO))

    async answerQuestion(questionId, userAnswer) {
      const question = AppState.questions.find(questions => question.id == question Id)


    }

  }
}

// console.time('fetching');
// let response = await fetch(`api.php?amount=10&category=28&difficulty=easy&type=multiple`)
// let data = await response.json()
// const questions = data.data.map(questionsData => new Question(questionsData))
// AppState.questions = questions



export const questionsService = new QuestionsService()