function headerEvent() {
    let header = $('#header');

    //header toogle
    header.mouseenter(function () {
        header.addClass('active');
    })

    header.mouseleave(function () {
        underbar.removeClass('on');
        underbar.css({
            left: 0,
            width: 0
        });
        header.removeClass('active');
        $('.gnb-sub-cont').removeClass('active');
    });

    //sub menu 보여주기, .nav-line 애니메이션
    function gnbSubToggle() {
        let underbar = $('.nav-line');
        let selectedMenu = $('.gnb>li>a');

        selectedMenu.mouseenter(function () {
            let thisMenu = $(this).attr('href');

            $('.gnb-sub').find(thisMenu).addClass('active').siblings().removeClass('active');

            if ($(this).hasClass('empty-sub')) {
                $('.gnb-sub').find('.active').removeClass('active');
            }

            let menuPosition = $(this).offset().left;
            let menuWidth = $(this).width();

            underbar.addClass('on');
            underbar.css({
                left: menuPosition + 'px',
                width: menuWidth + 'px'
            });
        });

        selectedMenu.mouseleave(function () {
            $('.gnb-sub').find('.active').removeClass('active');
            underbar.removeClass('on');
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

function siteMapScrollTop() {
    $('.sitemap-table').offset({
        top: 150
    });
}


//run!

$(document).ready(function () {
    headerEvent();
    hamburger();

    $('a[href="#"]').click(function (event) {
        event.preventDefault();
    });
});