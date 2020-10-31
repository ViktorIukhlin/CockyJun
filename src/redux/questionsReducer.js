const SET_QUESTION = 'NEXT_QUESTION';

let initialState = {
  questions: [
    { question: 'Кто ты такой?', questionImg: '', answers: ['Вася', 'Миша', 'Витя', 'Олег'], correctAnswer: ['Витя']},
    { question: 'Кто вы такие?', questionImg: '', answers: ['Вася', 'Миша', 'Витя', 'Рома'], correctAnswer: ['Рома']}
  ],
  counter: 0,
  scoreCounter: 0,
  numberOfQuestions: 2,
  wrongAnswerNumbers: []
};

const questionsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_QUESTION:
      return{
        ...state,
        questions: action.questions
      }
    default:
      return state;
  }
}

export const setQuestions = (questions) => ({type: SET_QUESTION, questions})

export default questionsReducer;