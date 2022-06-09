<template>
    <div class="Form py-5">
        <div class="container pt-4 pb-5">
            <div class="row pb-5 mb-3">
                <div class="col-md-6 pe-0">
                    <h2 class="pb-md-5 mb-4">Парковка в&nbsp;Пулково с&nbsp;трансфером в&nbsp;аэропорт</h2>
                    <div class="Form__mini d-flex">
                        <div class="py-4 pe-4">
                            <div class="Form__duration semi24-32">1-2 дня</div>
                            <div class="Form__price extra24-32">350 рублей</div>
                        </div>
                        <div class="py-4 px-4">
                            <div class="Form__duration semi24-32">3-7 дней</div>
                            <div class="Form__price extra24-32">250 рублей</div>
                        </div>
                        <div class="py-4 ps-4">
                            <div class="Form__duration semi24-32">7-14 дней</div>
                            <div class="Form__price extra24-32">200 рублей</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 d-flex flex-column p-0">
                    <img src="../assets/form_img.svg" alt="" class="img-fluid mt-auto Form__usersImage">
                </div>
            </div>
            <form action="#" @submit="submit" class="row pb-4 semi16-24">
                <div class="col-md-6 col-lg-4 mb-2">
                    <label for="inDate">Дата и время въезда (вылет - 3 часа)</label>
                    <div class="input">
                        <input required type="date" placeholder="ДД/ММ/ГГ" v-model="startDate">
                        <input required type="time" v-model="startTime">
                        <div class="dividerBlock"></div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <label for="outDate">Дата и время выезда (прилет + 1 час)</label>
                    <div class="input">
                        <input required type="date" placeholder="ДД/ММ/ГГ" v-model="endDate">
                        <input required type="time" v-model="endTime">
                        <div class="dividerBlock"></div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <label for="s">&nbsp;</label>
                    <div class="text-button">
                        <button class="Form__success w-100">Найти место</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script src="../controllers/FormController.js"></script>
<style lang="scss" src="../styles/_form.scss"></style>