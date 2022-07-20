export interface Question {
  question: string,
  answerType: string,
  options?: optionArray 
}

type optionArray = string[]