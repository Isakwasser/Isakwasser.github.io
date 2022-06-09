<template>
    <div class="Services position-relative pb-5" id="services">
        <div class="container py-5 position-relative" style="z-index: 1">
            <h2 class="text-center my-5">Услуги</h2>
            <div class="Services__tabs text-center mb-md-5 pb-5 extra32">
                <button v-for="(el,i) in tabs" :key="i" class="mx-3 Services__tabtitle border-0 bg-transparent"
                    :class="{ 'active': i==active}" @click="active = i">{{el.title}}</button>
            </div>
            <div class="row Services__info position-relative">
                <div class="col-md-7">
                    <img :src="itemImage" alt="" class="img-fluid">
                </div>
                <div class="col-md-5 Services__ul semi24-32">
                    <div class="Services__li" v-for="(el,i) in tabs[active].text" :key="i">{{el}}</div>
                </div>
            </div>
        </div>
        <div class="overflow-hidden position-absolute top-0 start-0 w-100 h-100">
            <img src="../assets/services_fly.svg" alt="" class="w-50 position-absolute top-50">
            <img src="../assets/services_fly.svg" alt=""
                class="w-25 position-absolute bottom-0 start-50 Services__fly_mini">
        </div>
    </div>
</template>

<script src="../controllers/ServicesController.js"></script>
<style lang="scss" src="../styles/_services.scss"></style>