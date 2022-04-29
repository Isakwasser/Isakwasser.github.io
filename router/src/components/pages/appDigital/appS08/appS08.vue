<template>
<div class="appDigitalInit">
    <div class="appDigital_S08">
        <h2 class="text-center">Самостоятельная работа №8</h2>

        <div class="step">
            <div class="step__num">
                <div class="num">1</div>
            </div>
            <div class="step__content">
                <div class="step__descryption">
                    <h4>Сигнал</h4>
                </div>
                <div class="step__action">
                    <div class="row mb-3">
                        <label for="fs" class="col-sm-2 col-form-label col-form-label-sm">Частота дискретизации</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control form-control-sm" id="fs" placeholder="Частота дискретизации" disabled v-model="fs">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="sequence" class="col-sm-2 col-form-label col-form-label-sm">Последовательность</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control form-control-sm" id="sequence" placeholder="Последовательность" v-model="sequence">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="step">
            <div class="step__num">
                <div class="num">2</div>
            </div>
            <div class="step__content">
              <button @click="initSignal" class="btn btn-secondary btn-sm">Показать сигнал</button>
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss">
.appDigitalInit {
    padding: 20px;
    height: 100%;
    overflow-y: auto;

    .appDigital_S08 {
        .step {
            display: flex;
            border-top: 1px solid #000;
            padding: 10px 0;

            &__num {
                width: 50px;
                margin-right: 25px;

                .num {
                    border-radius: 50%;
                    height: 50px;
                    border: 1px solid black;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }

            &__content {
                flex-grow: 1;
            }
        }
    }
}
</style>

<script src="./js/appS08.js">
</script>
