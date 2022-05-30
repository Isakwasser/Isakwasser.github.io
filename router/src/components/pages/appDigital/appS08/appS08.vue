<template>
<div class="appDigitalInit">
    <div class="appDigital_S08">
        <h2 class="text-center">Самостоятельная работа №8</h2>

        <!-- Инициализация переменных -->
        <div class="step">
            <div class="step__num">
                <div class="num"></div>
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
                            {{sequence}}
                            <input type="range" min="0" max="9" class="" id="sequence" placeholder="Последовательность" v-model="sequence">
                        </div>
                    </div>
                    <button @click="doAll" class="btn btn-secondary btn-sm">Рассчитать</button>
                </div>
            </div>
        </div>

        <!-- Вывод исходного сигнала -->
        <div class="step">
            <div class="step__num">
                <div class="num"></div>
            </div>
            <div class="step__content container-fluid">
                <h4>Исходный сигнал</h4>
                <button class="btn btn-sm btn-secondary" ref="initSignal__btn">Play</button>
                <div class="row">
                    <div class="col-md-6">
                        <!-- <button @click="initSignal" class="btn btn-secondary btn-sm">Показать сигнал</button> -->
                        <div id="initSignal"></div>
                    </div>
                    <div class="col-md-6">
                        <div id="initSignal__fft"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Прореживание сигнала и его Интерполяция до частоты {{ interpolateTo }} -->
        <div class="step">
            <div class="step__num">
                <div class="num"></div>
            </div>
            <div class="step__content container-fluid">
                <h4>Коэффициент выброса значений: {{thinning_N_low}}</h4>
                <button class="btn btn-sm btn-secondary" ref="thinningSignal_low__btn">Play</button>
                <div class="row">
                    <div class="col-md-6">
                        <!-- <button @click="initSignal" class="btn btn-secondary btn-sm">Показать сигнал</button> -->
                        <div id="thinningSignal_low"></div>
                    </div>
                    <div class="col-md-6">
                        <div id="thinningSignal__fft_low"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="step">
            <div class="step__num">
                <div class="num"></div>
            </div>
            <div class="step__content container-fluid">
                <h4>Интерполяция до частоты {{ interpolateTo }} Гц</h4>
                <button class="btn btn-sm btn-secondary" ref="thinningSignal_low_interpolate__btn">Play</button>
                <div class="row">
                    <div class="col-md-6">
                        <!-- <button @click="initSignal" class="btn btn-secondary btn-sm">Показать сигнал</button> -->
                        <div id="thinningSignal_low_interpolate"></div>
                    </div>
                    <div class="col-md-6">
                        <div id="thinningSignal__fft_low_interpolate"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="step">
            <div class="step__num">
                <div class="num"></div>
            </div>
            <div class="step__content container-fluid">
                <h4>Коэффициент выброса значений: {{thinning_N}}</h4>
                <button class="btn btn-sm btn-secondary" ref="thinningSignal__btn">Play</button>
                <div class="row">
                    <div class="col-md-6">
                        <!-- <button @click="initSignal" class="btn btn-secondary btn-sm">Показать сигнал</button> -->
                        <div id="thinningSignal"></div>
                    </div>
                    <div class="col-md-6">
                        <div id="thinningSignal__fft"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="step">
            <div class="step__num">
                <div class="num"></div>
            </div>
            <div class="step__content container-fluid">
                <h4>Интерполяция до частоты {{ interpolateTo }} Гц</h4>
                <button class="btn btn-sm btn-secondary" ref="thinningSignal_interpolate__btn">Play</button>
                <div class="row">
                    <div class="col-md-6">
                        <!-- <button @click="initSignal" class="btn btn-secondary btn-sm">Показать сигнал</button> -->
                        <div id="thinningSignal_interpolate"></div>
                    </div>
                    <div class="col-md-6">
                        <div id="thinningSignal__fft_interpolate"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="step">
            <div class="step__num">
                <div class="num"></div>
            </div>
            <div class="step__content container-fluid">
                <h4>Коэффициент выброса значений: {{thinning_N_high}}</h4>
                <button class="btn btn-sm btn-secondary" ref="thinningSignal_high__btn">Play</button>
                <div class="row">
                    <div class="col-md-6">
                        <!-- <button @click="initSignal" class="btn btn-secondary btn-sm">Показать сигнал</button> -->
                        <div id="thinningSignal_high"></div>
                    </div>
                    <div class="col-md-6">
                        <div id="thinningSignal__fft_high"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="step">
            <div class="step__num">
                <div class="num"></div>
            </div>
            <div class="step__content container-fluid">
                <h4>Интерполяция до частоты {{ interpolateTo }} Гц</h4>
                <button class="btn btn-sm btn-secondary" ref="thinningSignal_high_interpolate__btn">Play</button>
                <div class="row">
                    <div class="col-md-6">
                        <!-- <button @click="initSignal" class="btn btn-secondary btn-sm">Показать сигнал</button> -->
                        <div id="thinningSignal_high_interpolate"></div>
                    </div>
                    <div class="col-md-6">
                        <div id="thinningSignal__fft_high_interpolate"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Анимации -->
        <div class="step">
            <div class="step__num">
                <div class="num"></div>
            </div>
            <div class="step__content container-fluid">
                <h4>Коэффициент выброса значений: {{animation_N}}</h4>
                <button class="btn btn-sm btn-secondary" @click="animate(1)">Start</button>
                <div class="row">
                    <div class="col-md-6">
                        <!-- <button @click="initSignal" class="btn btn-secondary btn-sm">Показать сигнал</button> -->
                        <div id="thinningSignal__animation"></div>
                    </div>
                    <div class="col-md-6">
                        <div id="thinningSignal__animation__fft"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="step">
            <div class="step__num">
                <div class="num"></div>
            </div>
            <div class="step__content container-fluid">
                <h4>Интерполяция</h4>
                <div class="row">
                    <div class="col-md-6">
                        <div id="thinningSignal__animation__interpolate"></div>
                    </div>
                    <div class="col-md-6">
                        <div id="thinningSignal__animation__fft__interpolate"></div>
                    </div>
                </div>
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
    counter-reset: section; // Установка счетчика

    .step__num .num::before {
        counter-increment: section; // Инкрементирует счётчик
        content: counter(section); // Отображает текущее
    }

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
