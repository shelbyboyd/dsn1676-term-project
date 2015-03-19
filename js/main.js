var $nav = $('nav');
var $navBtn = $ ('.nav-button');

$navBtn.on ('click', function () {
    $nav.toggleClass ('nav-show');
});

var $mobile = $('.mobile');
var $mobileBtn = $('.mobile-button');
                   
$mobileBtn.on ('click', function () {
    $mobile.toggleClass ('mobile-show');
});
    
var $email = $('.email');
var $emailBtn = $('.email-button');
                   
$emailBtn.on ('click', function () {
    $email.toggleClass ('email-show');
});
    
var $behance = $('.behance');
var $behanceBtn = $('.behance-button');
                   
$behanceBtn.on ('click', function () {
    $behance.toggleClass ('behance-show');
});
    

    
