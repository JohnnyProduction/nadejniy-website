let nav = $('nav');
let line = $('<div />').addClass('line');
line.appendTo(nav);

let active = nav.find('.active');
let pos = 0;
let wid = 0;

if(active.length) {
    pos = active.position().left;
    wid = active.width();
    line.css({
        left: pos,
        width: wid
    });
}

nav.find('ul li a').click(function (e) {
    e.preventDefault();
    if(!$(this).parent().hasClass('active') && !nav.hasClass('animate')) {
        nav.addClass('animate');

        let _this = $(this);
        nav.find('ul li').removeClass('active');

        let position = _this.parent().position();
        let width = _this.parent().width();

        if(position.left >= pos) {
            line.animate({
                width: ((position.left - pos) + width)
            },300, function () {
                line.animate({
                    width: width,

                    left: position.left
                }, 150, function () {
                    nav.removeClass('animate');
                });
                _this.parent().addClass('active');
            });
        } else {
            line.animate({
                left: position.left,
                width: ((pos - position.left) + wid)
            }, 300, function () {
                line.animate({
                    width: width
                },150, function () {
                    nav.removeClass('animate');
                });
                _this.parent().addClass('active');
            });
        }
        pos = position.left;
        wid = width;
    }
});

// scroll menu

$(document).ready(function () {
    $('#menu').on('click','a', function (e) {
        e.preventDefault();
        let id = $(this).attr('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-80}, 1000);
    })

})

//burger
$(document).ready(function () {
    $('.header__burger').click(function (e) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})
