$('#contact').hover(function () {
    // over
    $(".contact").slideDown(600)
    $(".operation").css("display", "none")
    $(".infra").css("display", "none")
    $(".structure").css("display", "none")

}, function () {
    $(".contact").slideUp(600)
}
);
$('#operation').hover(function () {
    // over
    $(".operation").slideDown(600)
    $(".contact").css("display", "none")
    $(".infra").css("display", "none")
    $(".structure").css("display", "none")
}, function () {
    // out
    $(".operation").slideUp(600)
}
);
$('#infra').hover(function () {
    // over
    $(".infra").slideDown(600)
    $(".operation").css("display", "none")
    $(".contact").css("display", "none")
    $(".structure").css("display", "none")
}, function () {
    // out
    $(".infra").slideUp(600)
}
);
$('#structure').hover(function () {
    // over
    $(".structure").slideDown(600)
    $(".operation").css("display", "none")
    $(".infra").css("display", "none")
    $(".contact").css("display", "none")
}, function () {
    // out
    $(".structure").slideUp(600)
}
);
