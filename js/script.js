
$(function(){
    $("button").click(function(){
        $("#box").fadeOut(10);
    });
    //  $("h1").css("background","orange"); //css work

    $("h2,h3,h4").css("border","solid 1px green");

    $("div#container").css("border","1px solid red");

    $("p.lead").css("border","50px dotted orange");

    $("li:first").css("background","green");

    // jQuery selectors

    $(":header").css("background","orange");

    /*----------------------
      JQUERY EVENT METHOD
      ---------------------*/

    $("#box").click(function(){
        alert("you just click the box");
    });

    $("input").blur(function(){
        if($(this).val() == ""){
            $(this).css("border","solid 1px red");
            $("#box").text("forgot to add text?");
        }
    });

    $("input").keydown(function(){
        if($(this).val() == ""){
            $(this).css("border","solid 1px red");
            $("#box").text("Thanks for that !");
        }
    });

    $("#box").hover(function(){
        $(this).text("Yoy hovered !");
    }, function(){
        $(this).text("Yoy hovered out!"); 
    });

    /*-----------------
      JQUERY CHAINING
      -----------------*/
      

        

});

