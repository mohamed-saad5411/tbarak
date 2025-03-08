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

$('#contact a').hover(function () {
    // over
}
);
$('#contact').hover(function () {
    // over
}
);

$('#openNav').click(function () {
    $("#navList").fadeToggle(600);
    document.getElementById('navList').classList.replace('d-none','d-block')
}
);

$('#closeNav').click(function () {
    $("#navList").fadeToggle(1000);
    document.getElementById('navList').classList.replace('d-block','d-none')
}
);


// $(selector).click(function (e) { 
//     e.preventDefault();
    
// });

$('#contact a').click(function () { 
    $("#contact ul").slideToggle(600)
    $("#operation ul").slideUp(600)
    $("#infra ul").slideUp(600)
    $("#structure ul").slideUp(600)
    
});
$('#operation a').click(function () { 
    $("#operation ul").slideToggle(600)
    $("#contact ul").slideUp(600)
    $("#infra ul").slideUp(600)
    $("#structure ul").slideUp(600)
});
$('#infra a').click(function () { 
    $("#infra ul").slideToggle(600)
    $("#contact ul").slideUp(600)
    $("#operation ul").slideUp(600)
    $("#structure ul").slideUp(600)
});
$('#structure a').click(function () { 
    $("#structure ul").slideToggle(600)
    $("#contact ul").slideUp(600)
    $("#infra ul").slideUp(600)
    $("#operation ul").slideUp(600)
});


