"use strict";

let dom = require('./dom_builder'),
  content = require('./content');

function makeBikeGrid(bikes_data) {
  let gallery = document.getElementById("gallery");
  console.log("bikes_data", bikes_data);
  let keys = Object.keys(bikes_data);
  console.log("keys?", keys);

  keys.forEach((item) => {  
    console.log("item", item);
      // gallery.innerHTML += content.smallCard(item);
    });
  }

function showMyBikes(bikes_data, user) {
  dom.contentToDom(content.myBikes(user));
  if (!bikes_data) {

  }else {
    makeBikeGrid(bikes_data);
  }
}

let showRequestBike = (bike) => {  
  dom.contentToDom(content.requestService);
  let bikeDetails = document.getElementById("single-bike");
  bikeDetails.innerHTML = content.largeCard(bike);
};

module.exports = {makeBikeGrid, showMyBikes, showRequestBike};
