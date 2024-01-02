$(document).ready(function () {
$(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
});

  // Add to cart functionality (Sample functionality, not functional without backend)
$("#add-to-cart").on("click", function () {
    let quantity = parseInt($("#quantity").val());
    // Perform actions to add product to cart (could be AJAX call to backend)
    console.log(`Added ${quantity} product(s) to cart.`);
    // Example: Show a confirmation message
    alert(`Added ${quantity} product(s) to cart.`);
});
});
