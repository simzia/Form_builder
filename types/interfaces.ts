export interface Question {
  question: string,
  answerType: string,
  options?: optionArray 
  numsArray?: optionArray
  newOptionsArry?: options[]
}

export interface OptionsArry {
  optionArry: options[]
}

export type options = {
  isOptionAdded: boolean,
  option: string
}

type optionArray = string[]
