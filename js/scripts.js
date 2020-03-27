$(document).ready(function() {
  $("form#langMatch").submit(function(event) {
    var name = $("input#name").val();
    var microRating = parseInt($("#microRating").val());
    var cheeseSelection = $("input:radio[name=stringCheese]:checked").val();
    var iosSelection = $("input:radio[name=ios]:checked").val();
    var aiSelection = $("input:radio[name=ai]:checked").val();

    if (name) {
      if (microRating > 3 && cheeseSelection === "option2") {
        $(".output").html("" +
        "<div class='match'>" +
        "<h2>" + name + " here is your suggested programming language!</h2>" +
        "<p>The Beatutiful C#!</p>" +
        "<img src='img/csharp.jpg'>" +
        "</div>");
      } else if (microRating <= 2 && iosSelection === "yes") {
        $(".output").html("" +
        "<div class='match'>" +
        "<h2>" + name + " here is your suggested programming language!</h2>" +
        "<p>The Beatutiful Swift!</p>" +
        "<img src='img/swift.jpg'>" +
        "</div>");
 
      } else if (aiSelection === "yes" && iosSelection === "yes") {
        $(".output").html("" +
        "<div class='match'>" +
        "<h2>" + name + " here is your suggested programming language!</h2>" +
        "<p>The Beatutiful Python!</p>" +
        "<img src='img/python.png'>" +
        "</div>");
      } else {
        $(".output").html("" +
        "<div class='match'>" +
        "<h2>" + name + " we couldn't find a match for you... maybe coding isn't for you.</h2>" +
        "<img src='img/sad.jpg'>" +
        "</div>");

      }   
    } else {
      alert("Enter your name please");
    }

    event.preventDefault();
  });
});