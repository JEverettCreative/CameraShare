var imageArray = [
  {
    url: "/imgs/cameras1.jpg",
    type: "cameras"
  },
  {
    url: "/imgs/lenses1.jpg",
    type: "lenses"
  },
  {
    url: "/imgs/lights1.jpg",
    type: "lighting"
  },
  {
    url: "/imgs/accessories1.jpg",
    type: "accessories"
  }
];

for (var i = 0; i < 4; i++) {
  var item = $("<img>");
  item.attr({
    class: "item grow",
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
      var itemField = $('<div class="col flex-wrap">');
      var resultCard = $('<div class="card"></div>');
      var cardTitle = $('<h5 class="text-uppercase text-center font-theme"></h5>');
      var checkoutButton = $('<button class="checkout btn btn-primary" ' + 'value=' + index.id + '>Lease Me</button>');
      var description = $("<p>");
      var price = $('<p class="card-text">');
      price.text(index.price);
      description.text(index.description);
      cardTitle.text(index.name);
      resultCard.append(cardTitle, description, price, checkoutButton);
      itemField.append(resultCard);
      for (var i = 0; i < 4; i++) {}
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

// Defunct function to attempt to fill the cart when cart.html loads. Nonfunctional
// function fillCart() {
//   var testDiv = $("<div class='jumbotron'>");
//   var testHeader = $("<h1>").append(cartItem);
//   testDiv.append(testHeader);
//   $("#cart-container").append(testDiv);
// }

// $(document).ready(function(){
//   fillCart();
// });

// $("#view-cart").on("click", function(event){
//   event.preventDefault();
//   $.ajax({
//     type: "get",
//     url: "/api/cart/",
//     data: formData
//   }).then(function(data) {
//     console.log("this is what we got back", data);
//   });
// })

$(document).on("click", ".checkout", function(event) {
  event.preventDefault();
  console.log("Thanks for clicking me, asshole.");
  var cartItem = $(this).val();
  console.log(cartItem);
  window.location.replace("/cart/" + cartItem);
});
