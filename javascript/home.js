$(document).ready(function() {
//    alert("hei");
//    $('.relieve-container').imageFrame('sharp');

    $(".test-fondo a").click(function(){
        var fondo = $(this).attr("fondo");
        fondo++;
        if(fondo == 6) fondo=1;
        switch (fondo){
            case 1: 
                $("body").css("background", "transparent url(../images/fondo-andres.png) repeat-x");
                break;
            default: 
                $("body").css("background", "transparent url(../images/fondo-andres" + fondo + ".png) repeat-x");
                break;
        }
        $(".fondo-numero").html(fondo);
        $(this).attr("fondo", fondo);
    });
});