<template>
    <div class="buttonMain">
        <button><slot /></button>
    </div>
</template>

<script>
export default {
    props:['actionClick'],
}
</script>

<style lang="scss">
.buttonMain {
    font-family: 'Yanone Kaffeesatz';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.07em;
    button {
        background: #CCEC0A;
        border: none;
        width: 180px;
        height: 50px;
        color: #1E1D1D;
        &:hover {
            background: #D6F418;
        }
        &:active {
            background: #C2DE13;
        }
    }
}
</style>
