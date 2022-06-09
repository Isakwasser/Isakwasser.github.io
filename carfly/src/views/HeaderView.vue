<template>
    <div class="Header">
        <div class="container py-5">
            <div class="row text-center">
                <div
                    class="col-12 col-md-8 col-xl-7 d-flex flex-column flex-md-row justify-content-center align-items-center Header__links semi24-32">
                    <a href="#services" class="mx-2 mx-lg-4">Услуги</a>
                    <a href="#about" class="mx-2 mx-lg-4">О парковке</a>
                    <a href="#location" class="mx-2 mx-lg-4">Где мы?</a>
                    <a href="#camera" class="mx-2 mx-lg-4">Камеры</a>
                </div>
                <div
                    class="col-12 col-md-4 col-xl-5 d-flex flex-column flex-xl-row justify-content-around align-items-center Header__contacts semi24-32">
                    <a href="https://wa.me/79210000000" target="_blank" class="d-flex align-items-center">
                        <img src="../assets/WhatsApp_green.svg" class="img-fluid me-2" alt="">+7 (921) 000-00-00</a>
                    <a href="tel:88005553535">8 (800) 555-35-35</a>
                </div>
            </div>
        </div>
        <div class="Header__postline"></div>
    </div>
</template>

<script src="../controllers/HeaderController.js"></script>
<style lang="scss" src="../styles/_header.scss"></style>