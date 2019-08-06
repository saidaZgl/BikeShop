var express = require("express");
var router = express.Router();

var dataBike = [
  {
    name: "BIKE065",
    url: "/images/bike-1.jpg",
    price: 679
  },
  {
    name: "ZOOK7",
    url: "/images/bike-2.jpg",
    price: 799
  },
  {
    name: "LIKO089",
    url: "/images/bike-3.jpg",
    price: 839
  },
  {
    name: "GEWO",
    url: "/images/bike-4.jpg",
    price: 1206
  },
  {
    name: "TITAN5",
    url: "/images/bike-5.jpg",
    price: 989
  },
  {
    name: "AMIG39",
    url: "/images/bike-6.jpg",
    price: 599
  }
];

var dataCardBike = [
  {
    name: "BIKO45",
    url: "/images/bike-1.jpg",
    price: 679,
    quantity: 1
  },
  {
    name: "ZOOK7",
    url: "/images/bike-2.jpg",
    price: 779,
    quantity: 1
  }
];

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { dataBike });
});

router.get("/shop", function(req, res, next) {
  res.render("shop", { dataCardBike });
});

module.exports = router;
