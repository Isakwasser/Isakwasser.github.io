import Vue from "vue";

export default {
    name: 'sudoku',
    data() {
        return {
            initTable: [
                ['', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', ''],
                ['', '', '', '', '', '', '', '', ''],
            ],
            currentTable: [],
        }
    },
    methods: {
        changeTableCell(i, j, event) {
            let cellData = '123456789'.includes(event.data) ? event.data : '';
            this.currentTable[i].splice(j, 1, cellData);
        },
        solve() {
            let table = this.copyTable(this.currentTable);
            let tableVars = this.getVars(table);
            console.log(tableVars);


        },
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
        checkTable(table) {
            return this.checkTableByRows(table) &&
                this.checkTableByColumns(table) &&
                this.checkTableBySqrs(table) &&
                this.checkTableByFull(table);
        },
        checkTableByRows(table) {
            for (let i = 0; i < 9; i++) {
                let str = '';
                for (let j = 0; j < 9; j++) {
                    if (table[i][j] && str.includes(table[i][j])) {
                        return false;
                    } else {
                        str += table[i][j];
                    }
                }
            }
            return true;
        },
        checkTableByColumns(table) {
            for (let i = 0; i < 9; i++) {
                let str = '';
                for (let j = 0; j < 9; j++) {
                    if (table[j][i] && str.includes(table[j][i])) {
                        return false;
                    } else {
                        str += table[j][i];
                    }
                }
            }
            return true;
        },
        checkTableBySqrs(table) {
            for (let i = 0; i < 6; i += 3) {
                for (let j = 0; j < 6; j += 3) {
                    let str = '';
                    for (let x = 0; x < 3; x++) {
                        for (let y = 0; y < 3; y++) {
                            if (table[i + x][j + y] != '' && str.includes(table[i + x][j + y])) {
                                return false;
                            } else {
                                str += table[i + x][j + y];
                            }
                        }
                    }
                }
            }
            return true;
        },
        checkTableByFull(table) {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    if (table[i][j] == '' || !'123456789'.includes(table[j][i])) {
                        return false;
                    }
                }
            }
            return true;
        },
        copyTable(table) {
            let temp = [];
            for (let i = 0; i < table.length; i++) {
                temp.push([]);
                for (let j = 0; j < table[i].length; j++) {
                    temp[i].push(table[i][j]);
                }
            }
            return temp;
        },
        canIUse(table, num, x, y) {
            for (let i = 0; i < 9; i++) {
                if (table[y][i] == num || table[i][x] == num) {
                    return false;
                }
            }
            return true;
        },
        getVars(table) {
            let ans = [];
            for (let i = 0; i < 9; i++) {
                ans.push([]);
                for (let j = 0; j < 9; j++) {
                    if (table[i][j] != '') {
                        ans[i].push({ value: table[i][j], vars: [] });
                    } else {
                        let vars = [];
                        for (let k = 1; k <= 9; k++) {
                            if (this.canIUse(table, k, i, j)) {
                                vars.push(k);
                            }
                        }
                        if (vars.length == 1) {
                            console.log('1');
                            ans[i].push({ value: vars[0], vars: [] })
                        } else {
                            ans[i].push({ value: '', vars })
                        }
                    }
                }
            }
            return ans;
        },
    },
    mounted() {
        this.currentTable = this.initTable;
    },
}