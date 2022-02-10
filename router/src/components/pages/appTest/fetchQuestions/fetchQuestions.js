import questions from './questions.json';

const IS_CORRECT = true;

let fetchQuestions = (options) => {
    
    if (IS_CORRECT) {
        options.callback(questions.questions);
    }

}

export default fetchQuestions;