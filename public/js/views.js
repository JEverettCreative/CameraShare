var imageArray = [
  {
    url:
      "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    type: "cameras"
  },
  {
    url:
      "https://cdn.pixabay.com/photo/2013/07/13/11/41/camera-158471_960_720.png",
    type: "lenses"
  },
  {
    url:
      "https://images-na.ssl-images-amazon.com/images/I/61KazbOZmJL._SX425_.jpg",
    type: "lighting"
  },
  {
    url: "https://www.samys.com/images/categorypage/gimbal_category.jpg",
    type: "accesories"
  }
];

for (var i = 0; i < 4; i++) {
  var item = $("<img>");
  item.attr({
    class: "item",
    src: imageArray[i].url,
    category: imageArray[i].type
  });

  $(".items").append(item);
}

$(document).on("click", ".item", function(event) {
  event.preventDefault();
  console.log("we got clicked");
  $.ajax({
    type: "get",
    url: "/api/categories/" + $(this).attr("category")
  }).then(function(data) {
    console.log("this is what we got back", data);
    $(".result").empty();
    for (var i = 0; i < 4; i++) {
      var item = $("<div>");
      var description = $("<p>");
      var price = $("<p>");
      price.text(data[i].price);
      description.text(data[i].description);
      item.text(data[i].name);
      item.append(description, price);

      $(".result").append(item);
    }
  });

  console.log("you got clicked");
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

// function rendercategory(data) {
//   if (data.length !== 0) {
//     $("#stats").empty();
//     $("#stats").show();

//     for (var i = 0; i < data.length; i++) {
//       var div = $("<div>");

//       div.append("<h2>" + data[i].category + "</h2>");
//       div.append("<p>name: " + data[i].name + "</p>");
//       div.append("<p>price: " + data[i].price + "</p>");
//       div.append("<p>description: " + data[i].description + "</p>");
//       div.append(
//         "<button class='delete' data-id='" +
//           data[i].id +
//           "'>DELETE category</button>"
//       );

//       $("#stats").append(div);
//     }

//     $(".delete").click(function() {
//       $.ajax({
//         method: "DELETE",
//         url: "/api/category/" + $(this).attr("data-id")
//       }).then(function() {
//         console.log("Deleted Successfully!");
//       });

//       $(this)
//         .closest("div")
//         .remove();
//     });
//   }
// }
