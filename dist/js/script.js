$(function () {

    new WOW().init();

    function is_mobile() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

    function fix100vh() {
        var winHeight = $(window).height();
        if (is_mobile()) {
            $('.burger-menu__body').css('height', `${winHeight - 53}px`);
        }
    }

    fix100vh();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 6200) {
            $('.header').fadeOut();
        } else {
            $('.header').fadeIn();
        }
    });

    $('.about__more').on('click', function () {
        $(this).hide();
        $(this).next().slideDown('300');
    });

    $("a[href^='#']").not('.tab').click(function () {
        const href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(href).offset().top + "px"});
        if ($(this).data("type") == "login") {
        $('.form__tabs a[href="#enter"]').click();
        } else {
        $('.form__tabs a[href="#register"]').click();
        }
        return false;
    });

    $('.header__lang-value').text($('.header__inner > .header__lang .header__lang-item--active').text());


    if (window.innerWidth > 992) {
        $('.header__lang').hover(function () {
            $('.header__lang-drop').slideToggle('300');
        });

        $('.header__menu-item--drop').hover(function () {
            $(this).find('div.header__menu-subitem').slideToggle('300');
        });

        $('.header__lang-item').on('click', function () {
            $(this).parent().siblings().text($(this).text());
        });
    }

    if (window.innerWidth < 992) {

        $('.header__lang-item').on('click', function () {
            $(this).siblings().removeClass('header__lang-item--active');
            $(this).addClass('header__lang-item--active');
        });
    }

    $('.burger-btn').on('click', function () {
        $('.burger-btn').toggleClass('burger-btn--active');
        $('.burger-menu').toggleClass('burger-menu--active');
    });

    $('.header__menu-link, .header__menu-sublink, .header__btn').on('click', function () {
        $('.burger-btn').removeClass('burger-btn--active');
        $('.burger-menu').removeClass('burger-menu--active');
    });

    $('.section__tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $(this).parent().parent().siblings().find('div.tabs-content').removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.form__tab').on('click', function (e) {
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $(this).parent().siblings().removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    }); 

    $(window).on('resize', function (e) {
        // ????????????????????, ???? ?????????????? ???????????? ?????????????? ?????????????? ?????? ??????.
        // ???????????? ???? ?? data
        var init = $(".partner-program__items").data('init-slider');
        // ???????? ??????????????????
        if (window.innerWidth < 1024) {
            // ???????? ?????????????? ???? ??????????????
            if (init != 1) {
                // ?????????????????? ?????????????? ?? ???????????????????? ?? data init-slider = 1
                $('.partner-program__items').slick({
                    slidesToShow: 1,
                    arrows: false,
                    dots: true,
                    variableWidth: true,
                    responsive: [
                        {
                            breakpoint: 500,
                            settings: {
                                //variableWidth: false,
                                centerMode: true,
                            },
                        }
                    ]
                }).data({ 'init-slider': 1 });
            }
        }
        // ???????? ???? ????????????
        else {
            // ???????? ?????????????? ??????????????
            if (init == 1) {
                // ?????????????????? ?????????????? ?? ???????????????????? ?? data init-slider = 0
                $('.partner-program__items').slick('unslick').data({ 'init-slider': 0 });
            }
        }
    }).trigger('resize');

    $(window).on('resize', function (e) {
        var init_2 = $(".prices__cards").data('init-slider');
        if (window.innerWidth < 991) {
            if (init_2 != 1) {
                $('.prices__cards').slick({
                    slidesToShow: 2,
                    arrows: false,
                    autoplaySpeed: 2000,
                    variableWidth: true,
                    responsive: [
                        {
                            breakpoint: 575,
                            settings: {
                                slidesToShow: 1,
                                dots: true,
                                variableWidth: false,
                            },
                        }
                    ]
                }).data({ 'init-slider': 1 });
            }
        }
        else {
            if (init_2 == 1) {
                $('.prices__cards').slick('unslick').data({ 'init-slider': 0 });
            }
        }
    }).trigger('resize');

    $(window).on('resize', function (e) {
        var init_3 = $(".opportunities__slider").data('init-slider');
        if (window.innerWidth < 500) {
            if (init_3 != 1) {
                $('.opportunities__slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button class="tabs-section__slider-btn">????????????????</button>',
                    nextArrow: '<button class="tabs-section__slider-btn tabs-section__slider-btn--next">??????????????</button>',
                    appendArrows: $('.opportunities__tabs'),
                    infinite: false,
                    variableWidth: true,
                    touchThreshold: 10,
                }).data({ 'init-slider': 1 });
            }
        }
        else {
            if (init_3 == 1) {
                $('.opportunities__slider').slick('unslick').data({ 'init-slider': 0 });
            }
        }
    }).trigger('resize');

    $(window).on('resize', function (e) {
        var init_3 = $(".how-it-works__slider").data('init-slider');
        if (window.innerWidth < 500) {
            if (init_3 != 1) {
                $('.how-it-works__slider').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button type="button" class="tabs-section__slider-btn">????????????????</button>',
                    nextArrow: '<button type="button" class="tabs-section__slider-btn tabs-section__slider-btn--next">??????????????</button>',
                    appendArrows: $('.how-it-works__tabs'),
                    infinite: false,
                    variableWidth: true,
                    touchThreshold: 10,
                }).data({ 'init-slider': 1 });
            }
        }
        else {
            if (init_3 == 1) {
                $('.how-it-works__slider').slick('unslick').data({ 'init-slider': 0 });
            }
        }
    }).trigger('resize');

    $('.traders-results__items').slick({
        slidesToShow: 3,
        prevArrow: '<button class="slider-btn traders-results__slider-btn slider-btn--prev"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 7.27393L16.25 7.27393" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.2998 13.2985L1.2498 7.27451L7.2998 1.24951" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="slider-btn traders-results__slider-btn slider-btn--next"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 7.27393L1.75 7.27393" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7002 13.2985L16.7502 7.27451L10.7002 1.24951" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    variableWidth: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    scrollSpeed: 1000,
                    variableWidth: false,
                    slidesToShow: 1,
                    arrows: false,
                },
            }
        ]
    });

    $('.media__items').slick({
        slidesToShow: 5,
        prevArrow: '<button class="slider-btn media__slider-btn slider-btn--prev"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 7.27393L16.25 7.27393" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.2998 13.2985L1.2498 7.27451L7.2998 1.24951" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="slider-btn media__slider-btn slider-btn--next"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 7.27393L1.75 7.27393" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7002 13.2985L16.7502 7.27451L10.7002 1.24951" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        dots: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        scrollSpeed: 1000,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    dots: false,
                },
            }
        ]
    });

    $('.team__slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="slider-btn team__slider-btn team__slider-btn--prev"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 7.27393L16.25 7.27393" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.2998 13.2985L1.2498 7.27451L7.2998 1.24951" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="slider-btn team__slider-btn team__slider-btn--next"><svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.75 7.27393L1.75 7.27393" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.7002 13.2985L16.7502 7.27451L10.7002 1.24951" stroke="#FF3D22" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        dots: true,
        //autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                },
            }
        ]
    });

    

    function validateForms(form) {
        $(form).validate({
            rules: {
                login: "required",
                email: "required",
                password: "required",
                repeat_password: {
                    required: true,
                    equalTo: "#reg_pass",
                }
            },
            submitHandler: function () {
                $(this).find("input").val("");
                $('form').trigger('reset');
            }
        });
    }

    validateForms('#register');
    validateForms('#enter');


    $('form').submit(function (e) {
        e.preventDefault();

        $.ajax({
            type: "POST",
            url: "",
            data: $(this).serialize(),
            success: function () {
                $('.form__input').removeClass('valid');
            },
        });
        return false;
    });

    // Timer
    let deadline = '2021-12-01'; // ???????????? ??????????????

    // ??-?????? ?????????????????????? ??????????????
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), // ?????????????? ?????????? ?????????? ???????????????? ?? ?????????????? ?????????? (?? ????)
            seconds = Math.floor((t / 1000) % 60), // ?????????????????? ???? ?? ?? ?? ?????????????? ???????????????????? ??, ???? ?????????????????? ???? ?????????? ???????????? (1-59 ??)
            minutes = Math.floor((t / 1000 / 60) % 60), // ???????????????????? ??????????, ???? ?????????????????? ???? ???????????? ????????
            hours = Math.floor((t / 1000 / 60 / 60) % 24), // ??????-???? ??????????, ???? ?????????????????? ???? ??????????
            days = Math.floor((t / (1000 * 60 * 60 * 24)));

        // ????????????
        return obj = {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    }

    // A-?????? ?????????????? ?????????????? (id - ?????????? ?????? ?????????? ???????????? ???? ????????????????, endtime - ??????????????)
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            daysGaps = days.querySelector('.days-gaps'),
            daysGap = daysGaps.querySelectorAll('.timer__gap'),
            hours = timer.querySelector('.hours'),
            hoursGaps = hours.querySelector('.hours-gaps'),
            hoursGap = hoursGaps.querySelectorAll('.timer__gap'),
            minutes = timer.querySelector('.minutes'),
            minutesGaps = minutes.querySelector('.minutes-gaps'),
            minutesGap = minutesGaps.querySelectorAll('.timer__gap'),
            seconds = timer.querySelector('.seconds'),
            secondsGaps = seconds.querySelector('.seconds-gaps'),
            secondsGap = secondsGaps.querySelectorAll('.timer__gap'),
            timeInterval = setInterval(updateClock, 1000); // ???????????? ?????????????? ?????????? ?????????????????????? ??-?????? updateClock

        // ???????????? ?????????????? ????????????????????????
        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (obj.days <= 9) {
                daysGap[0].textContent = '0';
                daysGap[1].textContent = t.days.toString();
            } else {
                daysGap[0].textContent = t.days.toString()[0];
                daysGap[1].textContent = t.days.toString()[1];
            }
            if (obj.hours <= 9) {
                hoursGap[0].textContent = '0';
                hoursGap[1].textContent = t.hours.toString();
            } else {
                hoursGap[0].textContent = t.hours.toString()[0];
                hoursGap[1].textContent = t.hours.toString()[1];
            }
            if (obj.minutes <= 9) {
                minutesGap[0].textContent = '0';
                minutesGap[1].textContent = t.minutes.toString();
            } else {
                minutesGap[0].textContent = t.minutes.toString()[0];
                minutesGap[1].textContent = t.minutes.toString()[1];
            }
            if (obj.seconds <= 9) {
                secondsGap[0].textContent = '0';
                secondsGap[1].textContent = t.seconds.toString();
            } else {
                secondsGap[0].textContent = t.seconds.toString()[0];
                secondsGap[1].textContent = t.seconds.toString()[1];
            }
        }
    }
    // ?????????????????? ??-wb. ?? ??????????????????????
    setClock('timer', deadline);


    // ???????????????????????? ??????????????
    function DynamicAdapt(type) {
        this.type = type;
    }

    DynamicAdapt.prototype.init = function () {
        const _this = this;
        // ???????????? ????????????????
        this.??bjects = [];
        this.daClassname = "_dynamic_adapt_";
        // ???????????? DOM-??????????????????
        this.nodes = document.querySelectorAll("[data-da]");

        // ???????????????????? ??bjects ????????????????
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            const data = node.dataset.da.trim();
            const dataArray = data.split(",");
            const ??bject = {};
            ??bject.element = node;
            ??bject.parent = node.parentNode;
            ??bject.destination = document.querySelector(dataArray[0].trim());
            ??bject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
            ??bject.place = dataArray[2] ? dataArray[2].trim() : "last";
            ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
            this.??bjects.push(??bject);
        }

        this.arraySort(this.??bjects);

        // ???????????? ???????????????????? ??????????-????????????????
        this.mediaQueries = Array.prototype.map.call(this.??bjects, function (item) {
            return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
        }, this);
        this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
            return Array.prototype.indexOf.call(self, item) === index;
        });

        // ?????????????????????? ?????????????????? ???? ??????????-????????????
        // ?? ?????????? ?????????????????????? ?????? ???????????? ??????????????
        for (let i = 0; i < this.mediaQueries.length; i++) {
            const media = this.mediaQueries[i];
            const mediaSplit = String.prototype.split.call(media, ',');
            const matchMedia = window.matchMedia(mediaSplit[0]);
            const mediaBreakpoint = mediaSplit[1];

            // ???????????? ???????????????? ?? ???????????????????? ????????????????????????
            const ??bjectsFilter = Array.prototype.filter.call(this.??bjects, function (item) {
                return item.breakpoint === mediaBreakpoint;
            });
            matchMedia.addListener(function () {
                _this.mediaHandler(matchMedia, ??bjectsFilter);
            });
            this.mediaHandler(matchMedia, ??bjectsFilter);
        }
    };

    DynamicAdapt.prototype.mediaHandler = function (matchMedia, ??bjects) {
        if (matchMedia.matches) {
            for (let i = 0; i < ??bjects.length; i++) {
                const ??bject = ??bjects[i];
                ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
                this.moveTo(??bject.place, ??bject.element, ??bject.destination);
            }
        } else {
            for (let i = 0; i < ??bjects.length; i++) {
                const ??bject = ??bjects[i];
                if (??bject.element.classList.contains(this.daClassname)) {
                    this.moveBack(??bject.parent, ??bject.element, ??bject.index);
                }
            }
        }
    };

    // ?????????????? ??????????????????????
    DynamicAdapt.prototype.moveTo = function (place, element, destination) {
        element.classList.add(this.daClassname);
        if (place === 'last' || place >= destination.children.length) {
            destination.insertAdjacentElement('beforeend', element);
            return;
        }
        if (place === 'first') {
            destination.insertAdjacentElement('afterbegin', element);
            return;
        }
        destination.children[place].insertAdjacentElement('beforebegin', element);
    }

    // ?????????????? ????????????????
    DynamicAdapt.prototype.moveBack = function (parent, element, index) {
        element.classList.remove(this.daClassname);
        if (parent.children[index] !== undefined) {
            parent.children[index].insertAdjacentElement('beforebegin', element);
        } else {
            parent.insertAdjacentElement('beforeend', element);
        }
    }

    // ?????????????? ?????????????????? ?????????????? ???????????? ????????????????
    DynamicAdapt.prototype.indexInParent = function (parent, element) {
        const array = Array.prototype.slice.call(parent.children);
        return Array.prototype.indexOf.call(array, element);
    };

    // ?????????????? ???????????????????? ?????????????? ???? breakpoint ?? place 
    // ???? ?????????????????????? ?????? this.type = min
    // ???? ???????????????? ?????? this.type = max
    DynamicAdapt.prototype.arraySort = function (arr) {
        if (this.type === "min") {
            Array.prototype.sort.call(arr, function (a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) {
                        return 0;
                    }

                    if (a.place === "first" || b.place === "last") {
                        return -1;
                    }

                    if (a.place === "last" || b.place === "first") {
                        return 1;
                    }

                    return a.place - b.place;
                }

                return a.breakpoint - b.breakpoint;
            });
        } else {
            Array.prototype.sort.call(arr, function (a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) {
                        return 0;
                    }

                    if (a.place === "first" || b.place === "last") {
                        return 1;
                    }

                    if (a.place === "last" || b.place === "first") {
                        return -1;
                    }

                    return b.place - a.place;
                }

                return b.breakpoint - a.breakpoint;
            });
            return;
        }
    };

    const da = new DynamicAdapt("max");
    da.init();
});



