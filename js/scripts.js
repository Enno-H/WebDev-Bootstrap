$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        }
        else if($("#carousel-button").children("span").hasClass("fa-play")){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
    });
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
    $("#loginButton").click(function(){
        $('#loginModal').modal('toggle');
    })
})

$(document).ready(function(){
    $("#reserveButton").click(function(){
        $('#reserveModal').modal('toggle');
    })
})