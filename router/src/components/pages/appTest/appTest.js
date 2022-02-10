import fetchQuestions from './fetchQuestions/fetchQuestions';
import Vue from 'vue';

export default {
  name: "appTest",
  data() {
    return {
      questions: undefined,
      currentQuestionIndex: undefined,
      isQuestionShowed: false,
    };
  },
  methods: {
    renderQuestion() {
      this.isQuestionShowed = true;
    },
    chooseOption(answerIndex) {
      if (this.questions[this.currentQuestionIndex].options[answerIndex].isCorrect) {
        alert('Верно!');
      } else {
        this.actionOnFail(answerIndex);
      }
    },
    actionOnFail(i) {
      this.$refs.options[i].classList.remove('fail-choose');
      this.$refs.options[i].offsetHeight;
      this.$refs.options[i].classList.add('fail-choose');
    },
    fetchData() {
      let callback = (answer) => {
        Vue.set(this, 'questions', answer);
      };
      let options = {
        callback: callback,
      };

      fetchQuestions(options);
    }
  },
  created() {
    this.fetchData();
    this.currentQuestionIndex = 0;
  },
};