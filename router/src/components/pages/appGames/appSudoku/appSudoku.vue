<template>
    <div class="app-Sudoku">
        <div class="container my-5">
            <h2 class="text-center">Судоку</h2>
            <table>
                <tr v-for="(row,i) in currentTable" :key="i">
                    <td v-for="(el,j) in row" :key="j"><input type="text" @input="changeTableCell(i,j, $event)" :value="el"></td>
                </tr>
            </table>
            <button class="btn btn-sm btn-secondary mt-2" @click="solve">Решить</button>
        </div>
    </div>
</template>

<script src="./index.js"></script>
<style src="./main.scss" lang="scss"></style>