const SET_QUESTION = 'NEXT_QUESTION';

let initialState = {
  questions: [
    { question: 'Кто ты такой 1?', questionImg: '', answers: ['Верно1', 'Миша', 'Витя', 'Олег'], correctAnswer: 'Верно1'},
    { question: 'Кто ты такой 2?', questionImg: '', answers: ['Верно2', '2', '3', '4'], correctAnswer: 'Верно2'},
    { question: 'Кто вы такие 3?', questionImg: '', answers: ['Верно3', 'Миша', 'Витя', 'Рома'], correctAnswer: 'Верно3'},
    { question: 'Кто ты такой 4?', questionImg: '', answers: ['Верно4', '2', '3', '4'], correctAnswer: 'Верно4'}
  ]
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