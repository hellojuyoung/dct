function headerEvent() {
    const header = $('#header');
    const underbar = $('.nav-line');

    //header toogle
    header.mouseenter(function () {
        header.addClass('active');
        gnbSubToggle();
    });

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
        const gnbSubArea = $('.gnb-sub')
        let selectedMenu = $('.gnb>li>a');

        selectedMenu.mouseenter(function () {
            let thisMenu = $(this).attr('href');

            gnbSubArea.find(thisMenu).addClass('active').siblings().removeClass('active');

            if ($(this).hasClass('empty-sub')) {
                gnbSubArea.find('.active').removeClass('active');
            }

            let menuPosition = $(this).offset().left;
            let menuWidth = $(this).width();

            underbar.addClass('on');
            underbar.css({
                left: menuPosition + 'px',
                width: menuWidth + 'px'
            });
        });

        gnbSubArea.mouseleave(function () {
            gnbSubArea.find('.active').removeClass('active');
            underbar.removeClass('on');
        });
    }

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
//sitemap scrollTop
function siteMapScrollTop() {
    $('.sitemap-cont').scrollTop(0);
}

//lang-group toggle
function langSelect() {
    $('.lang-group').slideToggle(200);
}



//run!

$(document).ready(function () {
    headerEvent();
    hamburger();

    $('a[href="#"]').click(function (event) {
        event.preventDefault();
    });
});