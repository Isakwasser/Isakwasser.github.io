<template>
    <div class="app-Sudoku">
        <div class="container my-5">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <h2 class="text-center">Судоку</h2>
                    <table>
                        <tr v-for="(row,i) in currentTable" :key="i">
                            <td v-for="(el,j) in row" :key="j" class="position-relative">
                                <div class="position-absolute top-0 end-0 text-info pe-none" v-show="showHints">{{ canUseTable[i][j].join(' ')}}</div>
                                <input type="text"
                                    @input="changeTableCell(i,j, $event)"
                                    :value="el"
                                    :disabled="initTable[i][j] != '' && !clearedTable"
                                >
                            </td>
                        </tr>
                    </table>
                    <button class="btn btn-sm btn-secondary mt-2" @click="solve">Решить</button>
                    <button class="btn btn-sm btn-secondary mt-2" @click="showHints = !showHints">{{ showHints? 'Скрыть': 'Показать'}} подсказки</button>
                    <button class="btn btn-sm btn-secondary mt-2" @click="showInit">Вернуться к изначальной</button>
                    <button class="btn btn-sm btn-secondary mt-2" @click="resetTable">Очистить таблицу</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>
<style src="./main.scss" lang="scss"></style>