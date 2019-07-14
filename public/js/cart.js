$(document).ready(function(){
    var cartItem = localStorage.getItem("id");
    // Send ajax request to api route for database info
    $.ajax({
        type: "get",
        url: "/api/cart/" + cartItem
    }).then(function(data) {
        console.log(data);
        $("#item-name").text(data.name);
        $("#item-rate").text(data.price);
        $("#item-description").text(data.description); 
    });
});