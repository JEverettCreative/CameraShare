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
    var dataArray = data.map(function(index) {
      console.log("what is the index?? ====>", index.price);
      var itemField = $("<div>");
      var description = $("<p>");
      var price = $("<p>");
      price.text(index.price);
      description.text(index.description);
      itemField.text(index.name);
      itemField.append(description, price);
      // for (var i = 0; i < 4; i++) {
      //  }
      $(".result").append(itemField);
    });
  });

  console.log("you got clicked");
});

function acquireFormData() {
  return {
    price: $("#rental-price")
      .val()
      .trim(),
    description: $("#rental-description")
      .val()
      .trim(),
    name: $("#rental-name")
      .val()
      .trim(),
    category: $("#rental-category")
      .val()
      .trim()
  };
}

function postFormData(formData) {
  $.ajax({
    type: "post",
    url: "/api/posting/",
    data: formData
  }).then(function(data) {
    console.log("this is what we got back", data);
  });
}

$("#rental-submit").on("click", function(event) {
  event.preventDefault();
  var formData = acquireFormData();
  console.log(formData);
  postFormData(formData);
  location.reload();
});
