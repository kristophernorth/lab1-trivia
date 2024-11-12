import { questionsService } from "../services/QuestionsService.js";



export class QuestionsController {
  constructor() {

  }

  async getQuestions() {
    await questionsService.getQuestions()
  }

}