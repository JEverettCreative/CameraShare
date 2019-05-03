$.get("/api/camerashare/cameras", function(data) {
  for (var i = 0; i < data.length; i++) {
    var wellSection = $("<div>");
    wellSection.addClass("well");
    wellSection.attr("id", "camera-well-" + i);
    $("#well-section").append(wellSection);
    $("#camera-well-" + i).append(
      "<h2>" + (i + 1) + ". " + data[i].category + "</h2>"
    );
    $("#camera-well-" + i).append("<h3>Name: " + data[i].name + "</h4>");
    $("#camera-well-" + i).append("<h3>Price: " + data[i].price + "</h4>");
    $("#camera-well-" + i).append(
      "<h3>Description: " + data[i].description + "</h4>"
    );
  }
});
