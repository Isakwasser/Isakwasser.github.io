$(document).ready(function () {
/* взаимодействие с aside */
    $('.aside_popup').click(function () {
        $(this).toggleClass('aside_popup_up');
    })

/* Скроллинг для якорных ссылок */
    $('nav a[href^="#"], a[href="#main"').click(function () {
        let valHref = $(this).attr("href");

        /* проверка на непустую якорную ссылку */
        if (valHref != '#') {
            $('html, body').animate({ scrollTop: $(valHref).offset().top - $('header').outerHeight() + "px" });
        
        /* При скроллинге до обратного звонка поле ввода становится активным */
        if (valHref == '#callback') {
                setTimeout(function () {
                    $('#footerName').focus();
                    // console.log(valHref);
                }, 500);
            };
        };
        

    });

/* Управление верхним меню (минимизироваить/расширить) */
    let scrollPos = 0;
    $(window).scroll(function () {
        /* уменьшение шапки при скролле вниз */
        // var st = $(this).scrollTop();
        // if(st > scrollPos) {
        //     if ($(window).scrollTop() > 70)
        //         $('.header__scrollAction').addClass('minimized');
        // } else {
        //     $('.header__scrollAction').removeClass('minimized');
        // }
        // scrollPos = st;

        /* при появлении горизонтальной прокрутки шапка так же прокручивается */
        $('.header').css('left', -$(window).scrollLeft());

        /* прокрутка элементов рекламы при скролле */
        // $('.advert').each((i, el) => {
        //     // console.log($(el).find('.advert__item:eq(0)'));
        //     // $(el).find('.advert__item:eq(0)').css('margin-left', Math.floor(-$(window).scrollTop()/3));

        //     // $(el).find('.advert__item:eq(0)').animate({
        //     //     marginLeft: Math.floor(-$(window).scrollTop() / 3)
        //     // }, 50);
        //     $(el).find('.advert__item').css('transform', `translateX(-${$(window).scrollTop()/5}px)`)
        // });
        $('.advert').children().css('transform', `translateX(-${$(window).scrollTop() / 5}px)`);

        if ($(window).scrollTop() + $(window).height() >= $('footer').offset().top +300) {
            $('.advert').children().css('transition', `all 0s`);
        } else {
            $('.advert').children().css('transition', `all 1s`);

        }
    });

/* Настройка выпадающего меню в шапке */
    /* размеры на 15 пикселей слева/справа больше */
    $('.header__arrowDown').each((i, el) => {
        let width = $(el).parent().innerWidth();
        width = Math.floor(width + 30) + 'px';
        $(el).width(width);
    });

/* При нажатии на input */
    /* удаление label */
    $('input:not(.checkbox), textarea').each((i, el) => {
        $(el).keyup(function () {
            $(el).parent().removeClass('incorrectInput');
            if ($(el).val()) {
                $(el).parent().find('label').css('visibility', 'hidden');
            } else {
                $(el).parent().find('label').css('visibility', 'visible');
            }
        });
    });

    /* проверка поля ввода почты или телефона */
    $('.checkTel.checkEmail').each((i, el) => {
        $(el).change(function () {
            $(el).parent().addClass('incorrectInput');
            if (isCorrectTel($(el).val()) || isCorrectEmail($(el).val())) {
                $(el).parent().removeClass('incorrectInput');
            }
        });
    });

    /* проверка поля ввода телефона */
    $('.checkTel').each((i, el) => {
        $(el).change(function () {
            $(el).parent().addClass('incorrectInput');
            if (isCorrectTel($(el).val())) {
                $(el).parent().removeClass('incorrectInput');
            }
        });
    });

/* смена кадров на главном экране */
    // ввод данных в формате ['Название', 'ссылка на видео', 'ссылка на страницу']
    let types = [['HIP-HOP', "forMainSlidebar/hip.mp4",'track_hip-hop.html'],
        ['DANCEHALL','forMainSlidebar/dancehall.mp4', 'track_dancehall.html'],
        ['AEROBICS','forMainSlidebar/aerobics.mp4', 'track_aerobics.html'],
        ['VOGUE','forMainSlidebar/vogue.mp4', 'track_vogue.html'],
        ['JAZZ_FUNK','forMainSlidebar/jazz.mp4', 'track_jazz-funk.html'],
        ['HOUSE DANCE', 'forMainSlidebar/house.mp4', 'track_house-dance.html']];

    let currentType = 0;

    $('#firsScreen__cartPhoto').attr('autoplay', 'true');
    

    let changeGifsByTime = setInterval(function () {
        $(`#firstscreen_type_${currentType}`).prop('checked',false);
        currentType++;
        if (currentType >= types.length) {
            currentType = 0;
        }
                    
        $(`#firstscreen_type_${currentType}`).prop('checked', true);
        $('#firsScreen__cartPhoto').fadeOut(500, function () {
            $('#firsScreen__cartPhoto').attr('src', types[currentType][1]).fadeIn(500);
        });
        $('#firstScreen__typeName').fadeOut(500, function () {
            $('#firstScreen__typeName').text(types[currentType][0]).fadeIn(500);
        });

        $('#track__link').attr('href', types[currentType][2]);
    }, 6800);

    $('.firstscreen__array').each((i, el) => {
        $(el).click(function () {
            if ($(el).attr('data-direction') == 'Right') {
                if (currentType < types.length - 1) {
                    $(`#firstscreen_type_${currentType}`).prop('checked',false);
                    currentType++;
                    
                    $(`#firstscreen_type_${currentType}`).prop('checked',true);
                    $('#firsScreen__cartPhoto').fadeOut(500, function () {
                        $('#firsScreen__cartPhoto').attr('src', types[currentType][1]).fadeIn(500);
                    });
                    $('#firstScreen__typeName').fadeOut(500, function () {
                        $('#firstScreen__typeName').text(types[currentType][0]).fadeIn(500);
                    });

                    $('#track__link').attr('href', types[currentType][2]);
                }
                clearInterval(changeGifsByTime);

                changeGifsByTime = setInterval(function () {
                    $(`#firstscreen_type_${currentType}`).prop('checked', false);
                    currentType++;
                    if (currentType >= types.length) {
                        currentType = 0;
                    }
                    
                    $(`#firstscreen_type_${currentType}`).prop('checked', true);
                    $('#firsScreen__cartPhoto').fadeOut(500, function () {
                        $('#firsScreen__cartPhoto').attr('src', types[currentType][1]).fadeIn(500);
                    });
                    $('#firstScreen__typeName').fadeOut(500, function () {
                        $('#firstScreen__typeName').text(types[currentType][0]).fadeIn(500);
                    });

                    $('#track__link').attr('href', types[currentType][2]);
                }, 6800);
            };

            if ($(el).attr('data-direction') == 'Left') {
                if (currentType > 0) {
                    $(`#firstscreen_type_${currentType}`).prop('checked',false);
                    
                    currentType--;
                    $(`#firstscreen_type_${currentType}`).prop('checked',true);
                    $('#firsScreen__cartPhoto').fadeOut(500, function () {
                        $('#firsScreen__cartPhoto').attr('src', types[currentType][1]).fadeIn(500);
                    });
                    $('#firstScreen__typeName').fadeOut(500, function () {
                        $('#firstScreen__typeName').text(types[currentType][0]).fadeIn(500);
                    });

                    $('#track__link').attr('href', types[currentType][2]);
                }
                clearInterval(changeGifsByTime);

                changeGifsByTime = setInterval(function () {
                    $(`#firstscreen_type_${currentType}`).prop('checked', false);
                    currentType++;
                    if (currentType >= types.length) {
                        currentType = 0;
                    }
                    
                    $(`#firstscreen_type_${currentType}`).prop('checked', true);
                    $('#firsScreen__cartPhoto').fadeOut(500, function () {
                        $('#firsScreen__cartPhoto').attr('src', types[currentType][1]).fadeIn(500);
                    });
                    $('#firstScreen__typeName').fadeOut(500, function () {
                        $('#firstScreen__typeName').text(types[currentType][0]).fadeIn(500);
                    });

                    $('#track__link').attr('href', types[currentType][2]);
                }, 6800);
            };

            $('#firstScreen__cartNum').find('span').text(`0${currentType + 1}`);

        }); 
    });

    $('input[name="firstscreen__type"]+label').click(function () {
        // let val = $('input[name="firstscreen__type"]:checked').attr('id');        
        let val = $(this).attr('for');
        // console.log(this);

                    
        currentType = val.split('firstscreen_type_')[1];
        // console.log(currentType);
        $('#firsScreen__cartPhoto').fadeOut(500, function () {
            $('#firsScreen__cartPhoto').attr('src', types[currentType][1]).fadeIn(500);
        });
        $('#firstScreen__typeName').fadeOut(500, function () {
            $('#firstScreen__typeName').text(types[currentType][0]).fadeIn(500);
        });

        $('#track__link').attr('href', types[currentType][2]);

        return true;
    });

   

/* Увеличение чисел в секции Преимучества */
    /* Intersection Observer Poshel Lesom Thanks To Designer */
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(increaseNumber, options);
    let elements = $('.increasingNumber');
    
    elements.each((i, el) => {
        observer.observe(el);
    });

/* Отложенная анимация появления для тега section (посмотрим как выглядит)*/
    /* делаем невидимым */ //Не работают модальные окна. Нужно переделать на классы
    // $('section').css('opacity', '0');

    // $('section').css('transition', 'all 1s');

    // let options = { threshold: [0.1] };
    // let observer = new IntersectionObserver((entry) => {
    //     entry.forEach(change => {
    //         if (change.isIntersecting) {

    //             $(change.target).css('opacity', '1');

    //     }   
    // });

    // }, options);
    // let elements = $('section');
    
    // elements.each((i, el) => {
    //     observer.observe(el);
    // });

/* скроллинг по нажатию кнопок в секции Преподаватели */
    /* Это тоже переделали :( */
    let teachersCurrentScroll = 0;

    $('.teachers__buttonChange').each((i, el) => {
        $(el).click(function () {
            if ($(el).hasClass('teachers__toLeft')) {
                teachersCurrentScroll += 500;
                // $('.teacher__cart:eq(0)').css('marginLeft', teachersCurrentScroll + 'px');
                $('.teacher__cart:eq(0)').animate({ marginLeft: teachersCurrentScroll + 'px' }, 300);

            };

            if ($(el).hasClass('teachers__toRight')) {
                teachersCurrentScroll -= 500;
                // $('.teacher__cart:eq(0)').css('marginLeft', teachersCurrentScroll + 'px');
                $('.teacher__cart:eq(0)').animate({ marginLeft: teachersCurrentScroll + 'px' }, 300);

            };
        });
    });

/* нажатие на "Читать полностью" */
    $('.reviews__textDescription, .reviewsPage__reviewText').find('.accent').click(function () {
        $(this).css('display', 'none');
        $(this).parent().find('.reviews__text_more').css('display', 'inline');
    })


/* выполнение события "показатьскрыть пароль" */
    $('.password_eye').click(function () {
        if ($(this).parent().find('input').attr('type') == 'password') {
           $(this).parent().find('input').attr('type', 'text')
        } else {
           $(this).parent().find('input').attr('type', 'password')      
       }
    });

/* Переходы в личном кабинете по аттрибуту data-goTo */
    $('[data-goTo]').click(function () {
        $('video').each((i, el) => {
            el.pause();
        });


        $('[data-goTo]').removeClass('aside__menuItem_active');

        $(this).addClass('aside__menuItem_active');


        $('section.main').each((i, el) => {
            $(el).css('display', 'none');
        });

        $($(this).attr('data-goTo')).css('display', 'block');
    });

/* переходы для модальных окон по аттрибуту data-aimModal */
    let isModalActive = false;

    $('[data-aimModal]').click(function () {
        isModalActive = true;

        // $(`[data-target="${$(this).attr('data-aimModal')}"]`).css('display', 'block');
        $(`[data-target="${$(this).attr('data-aimModal')}"]`).show(200);

        $('body').css('overflow', 'hidden');
        $('body').css('margin-right', '15px');

    });
    $('.modal')
        .click(function () {
            $('body').css('overflow', 'auto');
        $('body').css('margin-right', '0px');


            $(this).hide(200);

        isModalActive = false;

        })
        .children()
        .click(e => {
            e.stopPropagation();
        });
    $('.modal__close').click(function () {
        let current = $(this);
        while (!current.hasClass('modal')) {
            current = current.parent();
        }
        current.hide(200);
        $('body').css('overflow', 'auto');
        $('body').css('margin-right', '0px');


        isModalActive = false;

    });

    $(document).keydown(function(eventObject){
        if( eventObject.which == 27 ){	
            $('.modal').hide(200);

            $('body').css('overflow', 'auto');
            $('body').css('margin-right', '0px');
	};
});

/* при нажатии на получить пробный период запоминаем в куки файлы */
    /* достаем куки файлы,
        заодним вводим булевскую переменную, которая показывает работу куки */
    // let isStorageSupport = true;
    // let isGetTrialLine = true;

    // try {
    //     isGetTrialLine = localStorage.getItem("isGetTrialLine");
    // } catch (err) {
    //     isStorageSupport = false;
    // }

    // /* засовываем в куки историю при переходе на другую ссылку */
    // $('a').click(function () {
    //     if (isStorageSupport && $(this).attr('href')) {
            
            
    //         isGetTrialLine.push('231');
    //         localStorage.setItem('isGetTrialLine', hiisGetTrialLinestory);
    //     }
        
    // });
    

/* открытие окна при нажатии на картинку в блоке о нас */
    $('[data-achievePhotoSrc]').click(function () {
        $('[data-target="photoContainer"]').find('img').attr('src', $(this).attr('data-achievePhotoSrc'));
        $('[data-target="photoContainer"]').show(200);
        $('body').css('overflow', 'hidden');
        $('body').css('margin-right', '15px');
    });

    $('[data-target="photoContainer"]').click(function () {
        $('body').css('overflow', 'block');
        $('body').css('margin-right', '0px');

        $(this).hide(200);
    });

    $('.aboutPage__achieveButton').click(function () {
        let currentOffset = parseInt($('.aboutPage__achievesContainer .aboutPage__achieveItem:eq(0)').css('margin-left'));
        
        

        if ($(this).attr('data-achieveDirection') == 'Left') {
            currentOffset += 500;

            $('.aboutPage__achievesContainer .aboutPage__achieveItem:eq(0)')
                .animate({ marginLeft: `${currentOffset}px` }, 500);
        } else {
            currentOffset -= 500;
 
            $('.aboutPage__achievesContainer .aboutPage__achieveItem:eq(0)')
                .animate({ marginLeft: `${currentOffset}px` }, 500);
        }
    });

    $('.info__save').click(function () {
        let isCorrectSave = true;
        /* ЗДЕСЬ ЧТО_ТО ПРОИСХОДИТ */

        setTimeout(function () {
            if (isCorrectSave) alert('Изменения сохранены!');
        }, 200);
    });

    $('.settings__save').click(function () {
        let isCorrectSave = true;
        /* ЗДЕСЬ ЧТО_ТО ПРОИСХОДИТ */

        setTimeout(function () {
            if (isCorrectSave) alert('Изменения сохранены!');
        }, 200);
    });

/* появление второко инпута в блоке оплаты */
    $("#buyPage__promoButton").on('click', function (e) {
        $(this).hide(200);
        $(this).parent().find('.buyPage__option__promo_add').delay(300).show(200);
    })


});

function increaseNumber (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {

            let finalNumber = +change.target.innerHTML;

            if (change.target.classList.contains('increasingNumber')) {
                change.target.innerHTML = '0';
                increaseNumberTime(change, finalNumber);
                change.target.classList.remove('increasingNumber');
            }
            change.target.classList.remove('increasingNumber');   
        }   
    });


}

function increaseNumberTime(el, finalNumber) {
    
    let increment = 1;    
    if (finalNumber >= 2500) increment = 10;
    if (finalNumber >= 25000) increment = 100;
    if (finalNumber >= 250000) increment = 100;

    let timeOfChange = 2000 / finalNumber * increment;
    
    setTimeout(function() {
        el.target.innerHTML = +el.target.innerHTML + increment + '';
        
        changeToUntrim(el,finalNumber);

        if (+el.target.innerHTML < finalNumber) increaseNumberTime(el, finalNumber);
    }, timeOfChange);
}

function changeToUntrim(el, finalNumber) {
    if (finalNumber <= 9) return
    else if (finalNumber <= 99) {
        if (+el.target.innerHTML < 10) {
            el.target.innerHTML = '0' + el.target.innerHTML;
        }
        return
    } else if (finalNumber <= 999) {
        if (+el.target.innerHTML < 10) {
            el.target.innerHTML = '00' + el.target.innerHTML;
        } else if (+el.target.innerHTML < 100) {
            el.target.innerHTML = '0' + el.target.innerHTML;
        }
        return
    } else if (finalNumber <= 9999) {
        if (+el.target.innerHTML < 10) {
            el.target.innerHTML = '000' + el.target.innerHTML;
        } else if (+el.target.innerHTML < 100) {
            el.target.innerHTML = '00' + el.target.innerHTML;
        } else if (+el.target.innerHTML < 1000) {
            el.target.innerHTML = '0' + el.target.innerHTML;
        }
        return
    } else if (finalNumber <= 99999) {
        if (+el.target.innerHTML < 10000) {
            el.target.innerHTML = '0' + el.target.innerHTML;
        }
        return
    }
}

function isCorrectTel(str) {
    if (!str.length || !isNaN(str)) {
        return true;
    }
    else {
        return false;
    }
}

function isCorrectEmail(str) {
    if (!str.length || str.indexOf('@') != -1) {
        return true;
    }
    else {
        return false;
    }
}

function changeAgreement(el) {
    if (el.checked) {
        // console.log($(el));
        $(el).removeClass('incorrectAgreement');
    } else {
        $(el).addClass('incorrectAgreement');
    }
}

/* для дебагинга личного кабинета */
function pointTypeOfPrivateRoom(e) {



    let type = prompt('Введите тип личного кабинета куда зайти:\n"1" - зайти в пробный кабинет\n"2" - зайти в кабинет с полным тарифом\n"3" - зайти в кабинет без проверки');

    switch (type) {
        case '1':
            if (confirm('Хотите зайти в пробный кабинет?')) {
                window.location = "private.html";
            }
            break;
        case '2':
            if (confirm('Хотите зайти в кабинет с полным тарифом?')) {
                window.location = "privateFull.html";
            }
            break;
        case '3':
            if (confirm('Хотите зайти в кабинет без проверки?')) {
                window.location = "private_withoutCheck.html";
            }
            break;
        default:
            return false;
    }
}