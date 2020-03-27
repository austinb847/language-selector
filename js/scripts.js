$(document).ready(function() {
  $("form#langMatch").submit(function(event) {
    var name = $("input#name").val();
    var microRating = $("#microRating").val();
    var cheeseSelection = $("input:radio[name=stringCheese]:checked").val();
    var iosSelection = $("input:radio[name=ios]:checked").val();
    var aiSelection = $("input:radio[name=ai]:checked").val();

    console.log(name);
    console.log(microRating);
    console.log(cheeseSelection);
    console.log(iosSelection);
    console.log(aiSelection);

    event.preventDefault();
  });
});