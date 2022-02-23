let xIconImg = import('@/assets/img/x.jpg');
let oIconImg = import('@/assets/img/0.jpeg');
let xIcon, oIcon;
xIconImg.then(data => {
  xIcon = 'url(' + data + ')';
});
oIconImg.then(data => {
  oIcon = 'url(' + data + ')';
});

export default {
  data() {
    return {
      states: [
        {
          i: 0,
          text: ' ',
          bg: undefined,
          who: '',
        },
        {
          i: 1,
          text: ' ',
          bg: undefined,
          who: '',
        },
        {
          i: 2,
          text: ' ',
          bg: undefined,
          who: '',
        },
        {
          i: 3,
          text: ' ',
          bg: undefined,
          who: '',
        },
        {
          i: 4,
          text: ' ',
          bg: undefined,
          who: '',
        },
        {
          i: 5,
          text: ' ',
          bg: undefined,
          who: '',
        },
        {
          i: 6,
          text: ' ',
          bg: undefined,
          who: '',
        },
        {
          i: 7,
          text: ' ',
          bg: undefined,
          who: '',
        },
        {
          i: 8,
          text: ' ',
          bg: undefined,
          who: '',
        },       
      ],
      nextStepIs: 0,
      winners: {
        x: [],
        o: [],
      }
    }
  },
  methods: {
    selectState(i) {
      if (this.nextStepIs === 0) {
        this.states[i].bg = xIcon;
        // this.states[i].text = "X";
        this.states[i].who = "X";
        // console.log('поставил крестик');
        this.nextStepIs = 1;
      } else if (this.nextStepIs === 1) {
        this.states[i].bg = oIcon;
        // this.states[i].text = "O";
        this.states[i].who = "O";
        // console.log('поставил нолик');
        this.nextStepIs = 0;
      }
      let check = this.checkWinner();
      if (check.winner != 0) {
        this.resetGame();
        if (check.winner == 1) {
          this.winners.x.push(check.items);
        }
        if (check.winner == 2) {
          this.winners.o.push(check.items);
        }
      } else {
        if (this.checkFinal()) {
          alert('Конец текущей игры');
          this.resetGame();
        }
      }
    },
    checkWinner() {
      /*
      return {
        winner: 0 - нет победителя
                1 - победили крестики
                2 - победили нолики
        items: [] - массив победивших индексов
      }
      */
      for (let i = 0; i < 3; i++) {
        // проверка по горизонтали
        if (this.states[3*i].who == this.states[3*i + 1].who && this.states[3*i].who == this.states[3*i + 2].who) {
          if (this.states[3 * i].who == "X")
            return {
              winner: 1,
              items: [3*i, 3*i+1, 3*i+2],
            };
          if (this.states[3 * i].who == "O")
            return {
              winner: 2,
              items: [3*i, 3*i+1, 3*i+2],
            };
        }
        // проверка по вертикали
        if (this.states[i].who == this.states[i + 3].who && this.states[i].who == this.states[i + 6].who) {
          if (this.states[i].who == "X") 
            return {
              winner: 1,
              items: [i, i+3, i+6],
            };
          if (this.states[i].who == "O")
            return {
              winner: 2,
              items: [i, i+3, i+6],
            };
        }
        

        
      }
      // проверка по диагоналям
      if (this.states[0].who == this.states[4].who && this.states[0].who == this.states[8].who) {
        if (this.states[0].who == "X") 
          return {
            winner: 1,
            items: [0, 4, 8],
          };
        if (this.states[0].who == "O")
          return {
            winner: 2,
            items: [0, 4, 8],
          };
      }
      if (this.states[2].who == this.states[4].who && this.states[2].who == this.states[6].who) {
        if (this.states[2].who == "X") 
          return {
            winner: 1,
            items: [2, 4, 6],
          };
        if (this.states[2].who == "O")
          return {
            winner: 2,
            items: [2, 4, 6],
          };
      }
      //если не найдено победителей
        return {
          winner: 0,
        };
    },
    checkFinal() {
      for (let i = 0; i < this.states.length; i++) {
        if (this.states[i].who == '') return false;
      }
      return true;
    },
    resetGame() {
      this.states.forEach(el => {
        el.text = ' ';
        el.bg = undefined;
        el.who = '';
      });
      this.nextStepIs = 0;
    },
    changePlayer(who) {
      if (typeof(who) == 'number') {
        this.nextStepIs = who;
      } else {
        if (this.nextStepIs == 0) {
          this.nextStepIs = 1;
        } else if (this.nextStepIs == 1) {
          this.nextStepIs = 0;
        }
      }
    },
    resetScore() {
      this.winners.x = [];
      this.winners.o = [];
    }
  },
}
