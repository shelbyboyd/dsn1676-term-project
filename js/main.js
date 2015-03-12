var $arrow = $('.arrow');
var $navBtn = $ ('.nav-button');

$navBtn.on ('click', function () {
    $arrow.toggleClass ('nav-show');
});