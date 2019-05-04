$(document).on("load", function() {
  $(".category-button").on("click", function(event) {
    event.preventDefault();

    //   var categorySearched = $("#category-search")
    //     .val()
    //     .trim();

    //   $.get("/api/" + categorySearched, function(data) {
    //     console.log(data);
    //     renderitem(data);
    //   });
    $.ajax({
      type: "get",
      url: "/api/categories"
    }).then(function(data) {
      console.log("this is what we got back", data);
    });
    console.log("you got clicked");
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

  function testFunction() {
    console.log("hit in the face");
    res.render("/");
  }
  // Click function for doing the post operation off the form submit on posting.html
  $("#submit-rental").on("click", function(event) {
    event.preventDefault();

    var rental = {
      price: $("#rental-price")
        .val()
        .trim(),
      description: $("#rental-description")
        .val()
        .trim(),
      name: $("#rental-name")
        .val()
        .trim(),
      category: $("#rental-category").val()
    };

    $.post("/api/rentals", rental, testFunction);
  });
});
