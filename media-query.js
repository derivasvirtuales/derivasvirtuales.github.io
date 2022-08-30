$(window).resize(function(){

  if ($(window).width() <= 991) {  
    $("body").css("background-image", "url(../assets/img/fondo-derivas.png)");
    $("body").css("background-color", "rgba(0, 16, 48, 0.75)");
    $("body").append("<p>texto añadido al final del párrafo.</p>");

    $(".titulo").css("display", "none");
    $("#menu-container").css("display", "none");
    $(".pop-up-home").css("display", "none");
    $(".iconos-pagina-inicio").css("display", "none");
    $("canvas").css("display", "none");
    $(".pop-up-button-open").css("display", "none");

  }  
  else   {

    $(".titulo").css("display", "block");
    $("#menu-container").css("display", "block");
    $(".pop-up-home").css("display", "block");
    $(".iconos-pagina-inicio").css("display", "block");
    $("canvas").css("display", "block");
    $(".pop-up-button-open").css("display", "block");
  }

});