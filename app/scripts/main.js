//Classes: "thumb"
//IDs: "first" through "fourth" and "bigimage"

$(document).ready(function() {
  // alert("Hello!");
  $(".thumb").click(function() {

    //also fade in / fade out
    $("#bigimage").fadeOut(100);
    $("#bigimage").attr("src", $(this).attr("src"));
    $("#bigimage").fadeIn(300);

    //hide & fade in
    // $("#bigimage").hide();
    // $("#bigimage").attr("src", $(this).attr("src"));
    // $("#bigimage").fadeIn(300);

  });

});//end document.ready
