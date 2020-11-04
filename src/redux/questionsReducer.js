const SET_QUESTION = 'NEXT_QUESTION';

let initialState = {
  questions: [
    { question: 'Сколько будет 2 + 2?', questionImg: '', answers: ['2', '22', '4', '6'], correctAnswer: '22'},
    { question: 'Самый лучший язык программирования?', questionImg: '', answers: ['JavaScript', 'C#', 'Python', 'Kotlin'], correctAnswer: 'JavaScript'},
    { question: 'Где лучше работать?', questionImg: '', answers: ['Завод', 'IT', 'Продажи', 'Пятерочка'], correctAnswer: 'Пятерочка'},
    { question: 'Лучшая профессия на сегодня?', questionImg: '', answers: ['Фрезеровщик', 'Токарь', 'IT специалист', 'Продавец в пятерочке'], correctAnswer: 'Продавец в пятерочке'}
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