"use strict";

let forms = require("./forms"),
    user= require("./user"),
    $ = require ('jquery');


let main_content = document.getElementById("main_content");

function makeBikeGrid(bikes_data) {
  let keys = Object.keys(bikes_data);
  keys.forEach((item) => {        
    let bike_card = `<div class="card col-sm-6">
    <img class="card-img-top" src="${bikes_data[item].photo}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">"${bikes_data[item].nickname}" | ${bikes_data[item].year} | ${bikes_data[item].make} | ${bikes_data[item].model}</h5>
      <p class="card-text">Repair History</p>
      <div class="list-group">
        <a href="#" class="list-group-item">02/14/2018: Cleaned carberator, new chain, fixed signal</a>
      </div>
      <a href="#" class="btn btn-danger">Delete</a>
      <a href="#" class="btn btn-secondary">Edit</a>
      <a href="#" class="btn btn-dark">Request Service</a>
      </div>
    </div>`;
    document.getElementById("gallery").innerHTML+= bike_card;
  });
}

function showMyBikes(bikes_data) {
  main_content.innerHTML = `<h3>Hey ${user.getCompleteUser().name}. Here are your bikes.</h3>
  <p class="subheading">You can additional bikes or request service for one already associated with your account.</p>
  <button type="button" class="btn btn-dark" id="add_bike">+ Add bike</button>
  <div id="gallery" class="row"></div>`;
  makeBikeGrid(bikes_data);
  let addBike = document.getElementById("add_bike");
  addBike.addEventListener("click", ()=>{
    forms.showBikeForm();
  });
}

module.exports = {showMyBikes};