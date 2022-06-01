import Vue from "vue";

export default {
    name: 'sudoku',
    data() {
        return {
            initTable: [
                ['4', '1', '5', '', '6', '9', '', '7', ''],
                ['', '', '3', '', '', '1', '', '2', ''],
                ['', '', '', '4', '', '3', '5', '', ''],
                ['6', '7', '2', '1', '', '', '', '', '4'],
                ['8', '3', '', '', '', '', '', '5', '7'],
                ['5', '', '', '', '', '8', '', '1', '3'],
                ['2', '8', '', '', '', '7', '1', '', '6'],
                ['', '9', '6', '', '', '', '', '4', '5'],
                ['1', '5', '', '6', '', '', '8', '', ''],
            ],
            currentTable: [],
            showHints: false,
            clearedTable: false,
        }
    },
    methods: {
        /****** Изменение ячейки при клике ******/
        changeTableCell(i, j, event) {
            let cellData = '123456789'.includes(event.data) ? event.data : '';
            this.currentTable[i].splice(j, 1, cellData);
        },
        /****** Получение строки ******/
        getRow(i) {
            return Object.assign([], this.currentTable[i]);
        },
        /****** Получение колонки ******/
        getColumn(i) {
            let ans = [];
            for (let j = 0; j < this.currentTable.length; j++) {
                ans.push(this.currentTable[j][i]);
            }
            return ans;
        },
        /****** Получение квадрата элемента ******/
        getSquare(i, j) {
            let ans = [];
            for (let row = 3 * Math.floor(i / 3); row < 3 * (Math.floor(i / 3) + 1); row++) {
                for (let col = 3 * Math.floor(j / 3); col < 3 * (Math.floor(j / 3) + 1); col++) {
                    if (this.currentTable[row][col] != "") {
                        ans.push(this.currentTable[row][col]);
                    }
                }
            }
            return ans;
        },
        /****** Решение полностью ******/
        solve() {
            if (!this.solve_lastUsed()) {
                alert('Алгоритм неполный, остались пустые ячейки. Попробуйте заполнить одну ячейку и решите еще раз');
            }
        },
        /****** Решение - последний возможный ******/
        solve_lastUsed() {
            let isFull = true;
            let flag = true;
            while (flag) {
                flag = false;
                isFull = true;
                let variants = this.canUseTable;
                for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 9; j++) {
                        if (variants[i][j].length == 1) {
                            this.currentTable[i].splice(j, 1, String(variants[i][j][0]));
                            flag = true;
                        }
                        if (variants[i][j].length) {
                            isFull = false;
                        }
                    }
                }
            }
            return isFull;
        },
        /****** Приведение таблицы к строке ******/
        tableToString(table, onEmpty = '.') {
            let str = '';
            for (let i = 0; i < table.length; i++) {
                for (let j = 0; j < table[i].length; j++) {
                    if (table[i][j]) {
                        str += table[i][j];
                    } else {
                        str += onEmpty;
                    }
                }
            }
            return str
        },
        resetTable() {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    this.currentTable[i].splice(j, 1, '');
                }
            }
            this.clearedTable = true;
        },
        showInit() {
            Vue.set(this, 'currentTable', JSON.parse(JSON.stringify(this.initTable)));
            this.clearedTable = false;
        },
    },
    computed: {
        canUseTable() {
            let ans = [];
            // каждая строка
            for (let i = 0; i < 9; i++) {
                ans.push([]);
                // каждый элемент строки
                for (let j = 0; j < 9; j++) {
                    ans[i].push([]);
                    // Проверка каждого числа если элемент пустой
                    if (!this.currentTable[i][j]) {
                        for (let k = 1; k <= 9; k++) {
                            if (!this.getRow(i).includes(String(k)) &&
                                !this.getColumn(j).includes(String(k)) &&
                                !this.getSquare(i, j).includes(String(k))) {
                                ans[i][j].push(k);
                            }
                        }
                    }
                }
            }
            return ans;
        },
        hints() {
            let ans = this.canUseTable;
            for (let i = 0; i < 9; i++) {}
            return ans
        },
    },
    mounted() {
        this.showInit();
    },
}