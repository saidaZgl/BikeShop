var stripe = Stripe("pk_test_BJeDYihHfBCjkdp2Eq3pcyP7004KHjIFZa");

document.getElementById("checkout").addEventListener("click", function() {
  stripe
    .redirectToCheckout({
      sessionId: sessionStripeID
    })
    .then(function(result) {});
});
