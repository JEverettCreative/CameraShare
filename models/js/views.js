$("#search-btn").on("click", function(event) {
  event.preventDefault();

  var categorySearched = $("#category-search")
    .val()
    .trim();

  $.get("/api/" + categorySearched, function(data) {
    console.log(data);
    renderitem(data);
  });
});

$("#name-search-btn").on("click", function() {
  var nameSearched = $("#name-search")
    .val()
    .trim();

  $.get("/api/name/" + nameSearched, function(data) {
    console.log(data);
    rendername(data);
  });
});

function rendercategory(data) {
  if (data.length !== 0) {
    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {
      var div = $("<div>");

      div.append("<h2>" + data[i].category + "</h2>");
      div.append("<p>name: " + data[i].name + "</p>");
      div.append("<p>price: " + data[i].price + "</p>");
      div.append("<p>description: " + data[i].description + "</p>");
      div.append(
        "<button class='delete' data-id='" +
          data[i].id +
          "'>DELETE category</button>"
      );

      $("#stats").append(div);
    }

    $(".delete").click(function() {
      $.ajax({
        method: "DELETE",
        url: "/api/category/" + $(this).attr("data-id")
      }).then(function() {
        console.log("Deleted Successfully!");
      });

      $(this)
        .closest("div")
        .remove();
    });
  }
}
