<template>
    <div class="Location position-relative pb-5" id="location">
        <div class="container pt-5">
            <div class="row pt-5">
                <div class="col-md-5 mb-4 mb-md-0">
                    <h2 class="mb-4">Где мы находимся</h2>
                    <div class="mb-5">
                        <h3 class="mb-2 extra32">Адрес</h3>
                        <div class="Location__info semi24-32">Пулковское ш., д. 41, лит. ЗИ, Санкт-Петербург</div>
                    </div>
                    <div class="mb-5">
                        <h3 class="mb-2 extra32">Координаты</h3>
                        <div class="Location__info semi24-32">55.58804713; 37.21705019</div>
                    </div>
                    <div class="Location__contacts mb-5">
                        <div class="mb-3">
                            <a href="https://wa.me/79210000000" target="_blank"
                                class="d-flex align-items-center semi24-32">
                                <img src="../assets/WhatsApp.svg" class="img-fluid me-3" alt="">
                                +7(921)000-00-00
                            </a>
                        </div>
                        <div>
                            <a href="tel:88005553535" class="d-flex align-items-center semi24-32">
                                <img src="../assets/phone-call.svg" class="img-fluid me-3" alt="">
                                Тел. 8 (800) 555-35-35</a>
                        </div>
                    </div>
                    <a href="https://yandex.ru/maps/213/moscow/?from=tabbar&ll=37.222044%2C55.587018&mode=search&sll=37.217050%2C55.588047&source=serp_navig&text=55.588047%2C37.217050&z=16"
                        class="Location__action text-button">Найти в Навигаторе</a>
                </div>
                <div class="col-md-7">
                    <div class="h-100 w-100 Location__map text-button">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae1c29bd101038a7f70c06f3b40aa129c95a5de2fe0aa96fe39a7ef35918b3ed4&amp;source=constructor"
                            width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../controllers/LocationController.js"></script>
<style lang="scss" src="../styles/_location.scss"></style>