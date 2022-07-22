export interface Question {
  question: string,
  answerType: string,
  options?: optionArray 
  numsArray?: optionArray
}

type optionArray = string[]
