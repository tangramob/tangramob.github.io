/*global $*/

//Contact Form
var hoverTimes = 0;

$("div.contact-info p a#map:first").hover(function () {
    $("i.fa.fa-map-marker:first").toggleClass("map-marker")
});

$("div.contact-info p a#map:last").hover(function () {
    $("i.fa.fa-map-marker:last").toggleClass("map-marker")
});

$("div.container p a#mail").hover(function() {
    $("i.fa.fa-envelope").toggleClass("mail-marker")
});

$(document).ready(function () {
    if ($(document).width() > 1199) {
        $("#overview").ready(
            function () {
                setTimeout(function () {
                $("#research").toggleClass("clicked_feature");
                $("#research").find("h2").css("color", "rgb(200, 65, 80)");
            }, 3200);
        });
    }
    else {
        $("#imgAnimate").attr("src", "assets/img/portfolio/research.png");
        $(".switcher").removeClass("visible");
        $(".switcher").addClass("visible");
        $(".circleRES").toggleClass("selected_circle");
        $("#research").toggleClass("clicked_feature");
        $("#research").find("h2").css("color", "rgb(200, 65, 80)");
    }
});

$(window).ready(function(){
    if ($(document).width() > 768) return;
    else {
        $("video").attr("poster", "assets/img/poster/poster.png")
    }
});

$(window).resize(function () {
    if ($(document).width() > 1199) return;
    else {
        $("#overview .circle").each(function () {
            $(this).removeClass("selected_circle");
        });
        $(".switcher").removeClass("visible");
        $(".switcher").addClass("visible");
        switch ($(".clicked_feature").attr('id')) {
            case 'research': $(".circleRES").toggleClass("selected_circle"); break;    
            case 'show-pop': $(".circleSHOW").toggleClass("selected_circle"); break; 
            case 'smarthub-deploy': $(".circleSHD").toggleClass("selected_circle"); break; 
            case 'simulation': $(".circleSIM").toggleClass("selected_circle"); break; 
            case 'stats': $(".circleSTAT").toggleClass("selected_circle"); break; 
        }    
    }

});
    
$("#research").on("click", function (e) {
    if ($(document).width() <= 1199) {
        $(this).toggleClass("clicked_feature");
        $("#show-pop").toggleClass("clicked_feature");
        $(".circleRES").toggleClass("selected_circle")
        $(".circleSHOW").toggleClass("selected_circle")
        $("#imgAnimate").attr("src", "assets/img/portfolio/show-pop.png");
        $("#research").find("h2").css("color", "#454d59");
        $("#show-pop").find("h2").css("color", "rgb(200, 65, 80)");
    }
    else {
        $("#imgAnimate").attr("src", "assets/img/portfolio/research.png");
        toggleHighlighting(e);
        $(this).addClass("clicked_feature");
        $(this).find("h2").css("color", "rgb(200, 65, 80)");
    }
});

// //Mobile
// $("#research").on("swipeleft", function (e) {
//     if ($(document).width() <= 1199) {
//         $(this).toggleClass("clicked_feature");
//         $("#show-pop").toggleClass("clicked_feature");
//         $(".circleRES").toggleClass("selected_circle")
//         $(".circleSHOW").toggleClass("selected_circle")
//         $("#imgAnimate").attr("src", "assets/img/portfolio/show-pop.png");
//         $("#research").find("h2").css("color", "#454d59");
//         $("#show-pop").find("h2").css("color", "rgb(200, 65, 80)");
//     }
// });
// //Mobile
// $("#research").on("swiperight", function (e) {
//     if ($(document).width() <= 1199) {
//         $(this).toggleClass("clicked_feature");
//         $("#stats").toggleClass("clicked_feature");
//         $(".circleRES").toggleClass("selected_circle")
//         $(".circleSTAT").toggleClass("selected_circle")
//         $("#imgAnimate").attr("src", "assets/img/portfolio/smi-stats.png");
//         $("#research").find("h2").css("color", "#454d59");
//         $("#stats").find("h2").css("color", "rgb(200, 65, 80)");
//     }
// });


$("#show-pop").on("click", function (e) {
    if ($(document).width() <= 1199) {
        $(this).toggleClass("clicked_feature");
        $("#smarthub-deploy").toggleClass("clicked_feature");
        $(".circleSHOW").toggleClass("selected_circle")
        $(".circleSHD").toggleClass("selected_circle")
        $("#imgAnimate").attr("src", "assets/img/portfolio/smarthub.png");
        $("#show-pop").find("h2").css("color", "#454d59");
        $("#smarthub-deploy").find("h2").css("color", "rgb(200, 65, 80)");
    }
    else {
        $("#imgAnimate").attr("src", "assets/img/portfolio/show-pop.png");
        toggleHighlighting(e);
        $(this).addClass("clicked_feature");
        $(this).find("h2").css("color", "rgb(200, 65, 80)");
    }
});

// //Mobile
// $("#show-pop").on("swipeleft", function (e) {
//     if ($(document).width() <= 1199) {
//         $(this).toggleClass("clicked_feature");
//         $("#smarthub-deploy").toggleClass("clicked_feature");
//         $(".circleSHOW").toggleClass("selected_circle")
//         $(".circleSHD").toggleClass("selected_circle")
//         $("#imgAnimate").attr("src", "assets/img/portfolio/smarthub.png");
//         $("#show-pop").find("h2").css("color", "#454d59");
//         $("#smarthub-deploy").find("h2").css("color", "rgb(200, 65, 80)");
//     }
// });
// //Mobile
// $("#show-pop").on("swiperight", function (e) {
//     if ($(document).width() <= 1199) {
//         $(this).toggleClass("clicked_feature");
//         $("#research").toggleClass("clicked_feature");
//         $(".circleSHOW").toggleClass("selected_circle")
//         $(".circleRES").toggleClass("selected_circle")
//         $("#imgAnimate").attr("src", "assets/img/portfolio/research.png");
//         $("#show-pop").find("h2").css("color", "#454d59");
//         $("#research").find("h2").css("color", "rgb(200, 65, 80)");
//     }
// });


$("#smarthub-deploy").on("click", function (e) {
    if ($(document).width() <= 1199) {
        $(this).toggleClass("clicked_feature");
        $("#simulation").toggleClass("clicked_feature");
        $(".circleSHD").toggleClass("selected_circle")
        $(".circleSIM").toggleClass("selected_circle")
        $("#imgAnimate").attr("src", "assets/img/portfolio/simulation.png");
        $("#smarthub-deploy").find("h2").css("color", "#454d59");
        $("#simulation").find("h2").css("color", "rgb(200, 65, 80)");
    }
    else {  
        $("#imgAnimate").attr("src", "assets/img/portfolio/smarthub.png");
        toggleHighlighting(e);
        $(this).addClass("clicked_feature");
        $(this).find("h2").css("color", "rgb(200, 65, 80)");
    }
});

// //Mobile
// $("#smarthub-deploy").on("swipeleft", function (e) {
//     if ($(document).width() <= 1199) {
//         $(this).toggleClass("clicked_feature");
//         $("#simulation").toggleClass("clicked_feature");
//         $(".circleSHD").toggleClass("selected_circle")
//         $(".circleSIM").toggleClass("selected_circle")
//         $("#imgAnimate").attr("src", "assets/img/portfolio/simulation.png");
//         $("#smarthub-deploy").find("h2").css("color", "#454d59");
//         $("#simulation").find("h2").css("color", "rgb(200, 65, 80)");
//     }
// });
// //Mobile
// $("#smarthub-deploy").on("swiperight", function (e) {
//     if ($(document).width() <= 1199) {
//         $(this).toggleClass("clicked_feature");
//         $("#show-pop").toggleClass("clicked_feature");
//         $(".circleSHD").toggleClass("selected_circle")
//         $(".circleSHOW").toggleClass("selected_circle")
//         $("#imgAnimate").attr("src", "assets/img/portfolio/show-pop.png");
//         $("#smarthub-deploy").find("h2").css("color", "#454d59");
//         $("#show-pop").find("h2").css("color", "rgb(200, 65, 80)");
//     }
// });

$("#simulation").on("click", function (e) {
    if ($(document).width() <= 1199) {
        $(this).toggleClass("clicked_feature");
        $("#stats").toggleClass("clicked_feature");
        $(".circleSIM").toggleClass("selected_circle")
        $(".circleSTAT").toggleClass("selected_circle")
        $("#imgAnimate").attr("src", "assets/img/portfolio/smi-stats.png");
        $("#simulation").find("h2").css("color", "#454d59");
        $("#stats").find("h2").css("color", "rgb(200, 65, 80)");
    }
    else {  
        $("#imgAnimate").attr("src", "assets/img/portfolio/simulation.png");
        toggleHighlighting(e);
        $(this).addClass("clicked_feature");
        $(this).find("h2").css("color", "rgb(200, 65, 80)");
    }
});

// //Mobile
// $("#simulation").on("swipeleft", function (e) {
//     if ($(document).width() <= 1199) {
//         $(this).toggleClass("clicked_feature");
//         $("#stats").toggleClass("clicked_feature");
//         $(".circleSIM").toggleClass("selected_circle")
//         $(".circleSTAT").toggleClass("selected_circle")
//         $("#imgAnimate").attr("src", "assets/img/portfolio/smi-stats.png");
//         $("#simulation").find("h2").css("color", "#454d59");
//         $("#stats").find("h2").css("color", "rgb(200, 65, 80)");
//     }
// });
// //Mobile
// $("#simulation").on("swiperight", function (e) {
//     if ($(document).width() <= 1199) {
//         $(this).toggleClass("clicked_feature");
//         $("#smarthub-deploy").toggleClass("clicked_feature");
//         $(".circleSIM").toggleClass("selected_circle")
//         $(".circleSHD").toggleClass("selected_circle")
//         $("#imgAnimate").attr("src", "assets/img/portfolio/smarthub.png");
//         $("#simulation").find("h2").css("color", "#454d59");
//         $("#smarthub-deploy").find("h2").css("color", "rgb(200, 65, 80)");
//     }
// });

$("#stats").on("click", function (e) {
    if ($(document).width() <= 1199) {
        $(this).toggleClass("clicked_feature");
        $("#research").toggleClass("clicked_feature");
        $(".circleSTAT").toggleClass("selected_circle")
        $(".circleRES").toggleClass("selected_circle")
        $("#imgAnimate").attr("src", "assets/img/portfolio/research.png");
        $("#stats").find("h2").css("color", "#454d59");
        $("#research").find("h2").css("color", "rgb(200, 65, 80)");
    }
    else {
        $("#imgAnimate").attr("src", "assets/img/portfolio/smi-stats.png");
        toggleHighlighting(e);
        $(this).addClass("clicked_feature");
        $(this).find("h2").css("color", "rgb(200, 65, 80)");
    }
});

// //Mobile
// $("#stats").on("swipeleft", function (e) {
//     if ($(document).width() <= 1199) {
//         $(this).toggleClass("clicked_feature");
//         $("#research").toggleClass("clicked_feature");
//         $(".circleSTAT").toggleClass("selected_circle")
//         $(".circleRES").toggleClass("selected_circle")
//         $("#imgAnimate").attr("src", "assets/img/portfolio/research.png");
//         $("#stats").find("h2").css("color", "#454d59");
//         $("#research").find("h2").css("color", "rgb(200, 65, 80)");
//     }
// });
// //Mobile
// $("#stats").on("swiperight", function (e) {
//     if ($(document).width() <= 1199) {
//         $(this).toggleClass("clicked_feature");
//         $("#simulation").toggleClass("clicked_feature");
//         $(".circleSTAT").toggleClass("selected_circle")
//         $(".circleSIM").toggleClass("selected_circle")
//         $("#imgAnimate").attr("src", "assets/img/portfolio/simulation.png");
//         $("#stats").find("h2").css("color", "#454d59");
//         $("#simulation").find("h2").css("color", "rgb(200, 65, 80)");
//     }
// });

function toggleHighlighting(e) {
    $(".clicked_feature").each(function () {
        if (this != e.target) {
            $(this).removeClass("clicked_feature");
            $(this).find("h2").css("color", "#454d59");
        }
    });
}

function toggleHide(e) {
    $(".clicked_feature").each(function () {
        $(this).removeClass("clicked_feature");
        $(this).find("h2").css("color", "#454d59");
    });
    $(".selected_circle").each(function () {
        $(this).removeClass("selected_circle");
    });
}

$(".circleRES").on("click", function (e){
    if (!$(this).hasClass("selected_circle")) {
        $("#imgAnimate").attr("src", "assets/img/portfolio/research.png");
        toggleHide(e);
        $(this).toggleClass("selected_circle");
        $("#research").toggleClass("clicked_feature");
        $("#research").find("h2").css("color", "rgb(200, 65, 80)");
    }
});

$(".circleSHOW").on("click", function (e) {
    if (!$(this).hasClass("selected_circle")) {
        $("#imgAnimate").attr("src", "assets/img/portfolio/show-pop.png");
        toggleHide(e);
        $(this).toggleClass("selected_circle");
        $("#show-pop").toggleClass("clicked_feature");
        $("#show-pop").find("h2").css("color", "rgb(200, 65, 80)");
    }
});

$(".circleSHD").on("click", function (e) {
    if (!$(this).hasClass("selected_circle")) {
        $("#imgAnimate").attr("src", "assets/img/portfolio/smarthub.png");
        toggleHide(e);
        $(this).toggleClass("selected_circle");
        $("#smarthub-deploy").toggleClass("clicked_feature");
        $("#smarthub-deploy").find("h2").css("color", "rgb(200, 65, 80)");
    }
});

$(".circleSIM").on("click", function (e) {
    if (!$(this).hasClass("selected_circle")) {
        $("#imgAnimate").attr("src", "assets/img/portfolio/simulation.png");
        toggleHide(e);
        $(this).toggleClass("selected_circle");
        $("#simulation").toggleClass("clicked_feature");
        $("#simulation").find("h2").css("color", "rgb(200, 65, 80)");
    }
});

$(".circleSTAT").on("click", function (e) {
    if (!$(this).hasClass("selected_circle")) {
        $("#imgAnimate").attr("src", "assets/img/portfolio/smi-stats.png");
        toggleHide(e);
        $(this).toggleClass("selected_circle");
        $("#stats").toggleClass("clicked_feature");
        $("#stats").find("h2").css("color", "rgb(200, 65, 80)");
    }
});

$(".flag-it").on("click", function(e){
    $(".show-en").addClass("hide-en");
    $(".show-en").removeClass("show-en");
    $(".hide-it").addClass("show-it");
    $(".hide-it").removeClass("hide-it");
});

$(".flag-en").on("click", function (e) {
    $(".show-it").addClass("hide-it");
    $(".show-it").removeClass("show-it");
    $(".hide-en").addClass("show-en");
    $(".hide-en").removeClass("hide-en");
});