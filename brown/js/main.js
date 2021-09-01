// let Cost = {
//     type: {
//         selected: -1,
//         description: 'тип сайта',
//         choise: [{
//             name: 'Тип сайта №1',
//             cost: 1000,
//         },{
//             name: 'Тип сайта №2',
//             cost: 1500,
//         },{
//             name: 'Тип сайта №3',
//             cost: 2000,
//         }]
//     },
//     design: {
//         selected: -1,
//         description: 'дизайн',
//         choise: [{
//             name: 'Тип дизайна №1',
//             cost: 800,
//         },{
//             name: 'Тип дизайна №2',
//             cost: 1600,
//         },{
//             name: 'Тип дизайна №3',
//             cost: 2500,
//         }]
//     },

//     adapt: {
//         selected: -1,
//         description: 'адаптивность',
//         choise: [{
//             name: 'Тип адаптивности №1',
//             cost: 1900,
//         },{
//             name: 'Тип адаптивности №2',
//             cost: 3000,
//         },{
//             name: 'Тип адаптивности №3',
//             cost: 5000,
//         }]
//     },

//     fillField: function (nameOfField) {
//         let selected = 0;
//         let str = `Укажите ${nameOfField.description}:\n`

//         for (let i = 0; i < nameOfField.choise.length; i++) {
//             str += `'${i}' - ${nameOfField.choise[i].name}. Примерная стоимость - ${nameOfField.choise[i].cost} Р.\n`
//         }

//         selected = +prompt(str);
//         str = 'Неверно введено значение! Попробуйте заново.\n' + str;
//         while (Number.isNaN(selected) || selected < 0 || selected >= nameOfField.choise.length) {
//             selected = +prompt(str);
//         }
//         nameOfField.selected = selected;
//     },

//     fillFields: function () {
//          for (let key in this) {
//             if (typeof (this[key]) == 'object' && this[key].hasOwnProperty('selected'))
//                 this.fillField(this[key]);
//         }
//     },

//     calcPrice: function () {
//         let price = 0;

//         for (let key in this) {
//             if (typeof (this[key]) == 'object' && this[key].hasOwnProperty('selected'))
//                 price += this[key].choise[this[key].selected].cost;
//         }
//         return price;
//     }
// };

// Cost.fillFields();
// alert(`Примерная стоимость сайта будет составлять ${Cost.calcPrice()} Р.`);







 
// function checkContactsForm() {
//     let name = document.querySelector('.contacts [name="name"]');
//     let email = document.querySelector('.contacts [name="email"]');
//     let textarea = document.querySelector('.contacts [placeholder="Сообщение"]');

//     name.classList.remove("error");
//     email.classList.remove("error");
//     textarea.classList.remove("error");

//     setTimeout(function () {
//         if (!name.value) {
//             name.classList.add('error');
//             name.focus();
//         }
//         else if (!email.value) {
//             email.classList.add('error');
//             email.focus();
//         }
//         else if (!textarea.value) {
//             textarea.classList.add('error');
//             textarea.focus();
//         }
//         else alert('Отправлено');
//     }, 10)
    

// };

/* jQuery!!! */


$(document).ready(function () {
    
    /* Скроллинг для якорной ссылки */
    $('a[href^="#"]').click(function () {
        let valHref = $(this).attr("href");
        $('html, body').animate({ scrollTop: $(valHref).offset().top - $('header').outerHeight() + "px" });
    });

    /* Активный пункт меню */
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $('.section').each((i, el) => {
            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((e, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });
                $('.nav__item_active:eq(' + i + ')').find('a').addClass('active');
            }
        });
    });

    /* Анимация, отложенная загрузка*/
    //Intersection Observer API
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element_animation');

    elements.each((i, el) => {
        observer.observe(el);
    });

    /* Отложенная загрузка фотографий */
    let optionsPhoto = { threshold: [0.5] };
    let observerPhoto = new IntersectionObserver(onEntryPhoto, optionsPhoto);
    let elementsPhoto = $('img[data-src]');


    elementsPhoto.each((i, el) => {
        observerPhoto.observe(el);
    });

    /* Модальные окна */
    // Используя bootstrap + jQuery
    // Либо используя magnific-popup

    /* Слайдеры */
    // Используя bootstrap
    // Либо fotorama.io
    // Либо Slick Slider
    
});


function onEntry (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element_animation_show')
        }
        
    });
}

function onEntryPhoto (entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.src = change.target.dataset.src
        }
        
    });
}