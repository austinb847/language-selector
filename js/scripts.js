$(document).ready(function() {
  $("form#langMatch").submit(function(event) {
    var name = $("input#name").val();
    var microRating = parseInt($("#microRating").val());
    var cheeseSelection = $("input:radio[name=stringCheese]:checked").val();
    var iosSelection = $("input:radio[name=ios]:checked").val();
    var aiSelection = $("input:radio[name=ai]:checked").val();

    console.log(name);
    console.log(microRating);
    console.log(cheeseSelection);
    console.log(iosSelection);
    console.log(aiSelection);

    if (name) {
      if (microRating > 3 && cheeseSelection === "option2") {
        $(".output").html("" +
        "<div class='match'>" +
        "<h2>" + name + "here is your suggested programming language!</h2>" +
        "<p>The Beatutiful C#!</p>" +
        "<img src='img/csharp.jpg'>" +
        "</div>");
      } else if (microRating <= 2 && iosSelection === "yes") {

        
      }


    
    } else {
      alert("Enter your name please");
    }

    event.preventDefault();
  });
});