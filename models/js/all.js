$.get("/api/camerashare/all", function(data) {
  for (var i = 0; i < data.length; i++) {
    var wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "lease-well-" + i);
    $("#well-section").append(wellSection);
    $("#lease-well-" + i).append(
      "<h2>" + (i + 1) + ". " + data[i].name + "</h2>"
    );
    $("#lease-well-" + i).append("<h3>Category: " + data[i].category + "</h4>");
    $("#lease-well-" + i).append("<h3>Name: " + data[i].name + "</h4>");
    $("#lease-well-" + i).append("<h3>Price: " + data[i].price + "</h4>");
    $("#lease-well-" + i).append(
      "<h3>Description " + data[i].description + "</h4>"
    );
  }
});
