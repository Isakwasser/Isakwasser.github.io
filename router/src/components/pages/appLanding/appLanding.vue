<template>
    <div class="appLanding">
        <header>
            <div class="container d-flex align-items-center py-3">
                <div class="logo">
                    <img :src="require('@/assets/picomeon/img/logo.svg')" alt="PICOMEON">
                </div>
                <div class="ms-auto d-flex align-items-center">
                    <div class="">
                        <appButtonMain>КУПИТЬ</appButtonMain>
                    </div>
                    <div class="ms-4">
                        <div class="mail mb-2">
                            <a href="mailto:info@picomeon.ru">info@picomeon.ru</a>
                        </div>
                        <div class="tel">
                            <a href="tel:+7(905)000-52-52">+7(905)000-52-52</a>
                        </div>
                    </div>

                </div>
            </div>
            <hr class="m-0"/>
            <div class="container d-flex align-items-center text-uppercase">
                <div>
                    <a href="#" rev="#">О нас</a>
                </div>
                <div class="ms-4">
                    <a href="#">Наши курсы</a>
                </div>
                <div class="ms-4">
                    <a href="#">Прайс</a>
                </div>
                <div class="ms-4">
                    <a href="#">Выгодные предложения</a>
                </div>
                <div class="ms-4">
                    <a href="#">Отзывы</a>
                </div>
                <div class="ms-4">
                    <a href="#">Контакты</a>
                </div>
                <div class="ms-auto">
                    <a class="h-100 px-4 py-3 border-start border-end" href="#">Войти</a>
                </div>
                <div>
                    <label for="tel" class="px-4 d-inline-block">Обратный звонок</label>
                </div>
            </div>
            <hr class="m-0"/>
        </header>
        <router-view></router-view>
        <footer class="mt-auto bg-dark pt-5 pb-4 text-light">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <div>
                            <div class="logo">
                                <img :src="require('@/assets/picomeon/img/logo_light.svg')" alt="PICOMEON">
                            </div>
                            <div class="tel">
                                +7(909)061-98-55
                            </div>
                            <div class="tel">
                                +7(905)000-52-52
                            </div>
                            <div class="mail">
                                info@picomeon.ru
                            </div>
                            <div class="links">
                                <span class="link">
                                    IG
                                </span>
                                <span class="link">
                                    Tg
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="title mb-3">
                            Направления
                        </div>
                        <div class="name mb-1">
                            <a href="#">Hip-Hop</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">DanceHall</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">Aerobics</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">wedding dance</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">Jazz-funk</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">House Dance</a>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="title mb-3">
                            О школе
                        </div>
                        <div class="name mb-1">
                            <a href="#">о нас</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">преподаватели</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">отзывы</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">прайс</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">контакты</a>
                        </div>
                    </div>
                    <div class="col-2">
                        <div class="title mb-3">
                            Личный кабинет
                        </div>
                        <div class="name mb-1">
                            <a href="#">задать вопрос</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">акции</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">бонусная программа</a>
                        </div>
                        <div class="name mb-1">
                            <a href="#">документы</a>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="title mb-3">
                            <form action="#">
                                <div class="row">
                                    <div class="col-6">
                                        <input type="text" placeholder="Имя" class="w-100" id="tel"/>
                                    </div>
                                    <div class="col-6">
                                        <input type="text" placeholder="8(912) 456 78 90" class="w-100"/>
                                    </div>
                                </div>
                                <button>ПЕРЕЗВОНИТЕ МНЕ</button>
                                <div>
                                    <input type="checkbox" id="footer_agree"/>
                                    <label for="footer_agree">Согласен на обработку персональных данных</label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        &copy; 2021 Все права защищены
                    </div>
                    <div class="col-6 text-center">Visa, MasterCard</div>
                    <div class="col-3">
                        ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style src="./scss/main.scss" lang="scss"></style>

<script src="./controllers/index.js"></script>
