function followingNavLine() {
    const header = $('#header');
    const underbar = $('.nav-line');
    const subArea = $('.gnb-sub');

    $('.gnb li a').mouseenter(function () {
        let menuPosition = $(this).offset().left;
        let menuWidth = $(this).width();

        underbar.addClass('on');
        underbar.css({
            left: menuPosition + 'px',
            width: menuWidth + 'px'
        });
        subArea.addClass('active');
    });

    //header mouseleave
    $('#header').mouseleave(function () {
        underbar.removeClass('on');
        underbar.css({
            left: 0,
            width: 0
        });
        subArea.removeClass('active');
    });
}


function gnbSubShow() {

    let selectedMenu = $('.gnb>li>a');

    selectedMenu.mouseenter(function () {
        let thisMenu = $(this).attr('href');
        let subEmpty = String("#");

        //console.log(thisMenu, typeof thisMenu);
        if ($(thisMenu).hasClass('active')) {
            $('.gnb-sub').find(thisMenu).removeClass('active');
        } else {
            $('.gnb-sub').find(thisMenu).addClass('active').siblings().removeClass('active');
        }

        if (thisMenu = #) {
            $('.gnb-sub').find(thisMenu).removeClass('active');
        }
    });

    //selectedMenu.mouseleave(function () {
    //    $('.gnb-sub').find('.gnb-sub-cont').removeClass('active');
    //});
}







//run!

$(document).ready(function () {

    $('a[href="#"]').click(function (event) {
        event.preventDefault();
    });

    followingNavLine();
    gnbSubShow();
});