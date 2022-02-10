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
      if (!this.questions[this.currentQuestionIndex].options[answerIndex].wasClicked) {
        Vue.set(this.questions[this.currentQuestionIndex].options[answerIndex], 'wasClicked', true)
      }
    },
    goBackQuestion() {
      this.resetAnimationDuration();
      if (this.currentQuestionIndex) {
        this.currentQuestionIndex--;
        this.$refs.goForward.removeAttribute('disabled');
      }
      this.updateButtons();      
    },
    goForwardQuestion() {
      this.resetAnimationDuration();
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.$refs.goBack.removeAttribute('disabled');
      }
      this.updateButtons();
    },
    updateButtons() {
      if (this.questions.length > 1) {
          this.$refs.goForward.removeAttribute('disabled');
          this.$refs.goBack.removeAttribute('disabled');

        if (this.currentQuestionIndex == this.questions.length - 1) {
          this.$refs.goForward.setAttribute('disabled', 'disabled');
        }
        if (this.currentQuestionIndex == 0) {
          this.$refs.goBack.setAttribute('disabled', 'disabled');
        }
      }
    },
    resetAnimationDuration() {
      this.questions[this.currentQuestionIndex].options.forEach(el => {
        if (el.wasClicked) {
          el.animationDuration = '0s';
        }
      });
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
  mounted() {
      this.updateButtons();
  }
};