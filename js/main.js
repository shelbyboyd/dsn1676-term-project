var $nav = $('nav');
var $navBtn = $ ('.nav-button');

$navBtn.on ('click', function () {
    $nav.toggleClass ('nav-show');
});