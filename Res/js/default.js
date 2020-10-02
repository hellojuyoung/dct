const header = $('#header');
const subArea = $('.gnb-sub');

function headerEvent() {
    let underbar = $('.nav-line');

    $('.gnb li a').mouseenter(function () {
        let menuPosition = $(this).offset().left;
        let menuWidth = $(this).width();

        underbar.addClass('on');
        underbar.css({
            left: menuPosition + 'px',
            width: menuWidth + 'px'
        });
    });

    $('.gnb li a').mouseleave(function () {
        underbar.removeClass('on');
    });

    //header toogle
    $('#header').mouseenter(function () {
        header.addClass('active');
        subArea.addClass('active');
    })

    $('#header').mouseleave(function () {
        underbar.removeClass('on');
        underbar.css({
            left: 0,
            width: 0
        });
        header.removeClass('active');
        subArea.removeClass('active');
        $('.gnb-sub-cont').removeClass('active');
    });


    function gnbSubToggle() {
        let selectedMenu = $('.gnb>li>a');

        selectedMenu.mouseenter(function () {
            let thisMenu = $(this).attr('href');

            $('.gnb-sub').find(thisMenu).addClass('active').siblings().removeClass('active');

            if ($(this).hasClass('empty-sub')) {
                $('.gnb-sub').find('.active').removeClass('active');
            }
        });

    }

    gnbSubToggle();
}


function hamburger() {
    $('#hamburger').click(function () {
        let siteMap = $('.sitemap');

        siteMap.slideToggle();
        if (siteMap.hasClass('active')) {
            siteMap.removeClass('active');
            $(this).removeClass('active');
        } else {
            siteMap.addClass('active');
            $(this).addClass('active');
        }
    });
}


//run!

$(document).ready(function () {
    headerEvent();
    hamburger()

    //$('a[href="#"]').click(function (event) {
    //    event.preventDefault();
    //});
});