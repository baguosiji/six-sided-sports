function autoBox() {
    var width = $(window).width();
    if (width >= 750) {
        width = 750;
    }
    if (width <= 320) {
        width = 320;
    }
    var auto = Number(width) * 100 / 375;
    $('html').css('font-size', auto);
}
autoBox();
$(window).resize(function() {
    autoBox();
});
