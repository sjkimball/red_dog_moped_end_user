"use strict";

console.log("Hello bike_forms");

let user = require("./user"),
    db = require("./db-interaction"),
    response = require("./response");

function showBikeForm() {
  let main_content = document.getElementById("main_content");
  main_content.innerHTML =
  `<h3>Add A Bike to Your Account</h3>
  <p class="subheading">New ride? Sweet! Just add it in here to make service simple should you ever need it.
  </p>
    <form>
      <fieldset>
        <legend>Bike Information</legend>
            <div class="form-group">
              <label for="bike-nickname">Nickname</label>
              <input id="bike-nickname" class="form-control" type="text" placeholder="Nickname">
            </div>
            <div class="custom-file">
              <label class="custom-file-label" for="customFile">Upload image of your bike</label>
              <input type="file" class="custom-file-input" id="customFile">
            </div>
            <div class="form-group">
                <label for="bike-year">Year</label>
                <input id="bike-year" class="form-control" type="text" placeholder="Year">
            </div>
            <div class="form-group">
              <label for="bike-make">Make</label>
              <input id="bike-make" class="form-control" type="text" placeholder="Make">
            </div>
            <div class="form-group">
              <label for="bike-model">Model</label>
              <input id="bike-model" class="form-control" type="text" placeholder="Model">
            </div>
            <div class="form-group">
              <label for="bike-comments">Comments</label>
              <textarea id="bike-comments" class="form-control" rows="3" placeholder="Comments"></textarea>
            </div>
      </fieldset>
        <!-- Add Bike/Submit Button -->
          <button type="button" class="btn btn-danger" value="CANCEL">Cancel</button>
          <button type="button" class="btn btn-dark" id="save_bike" value="ADD BIKE">Add Bike</button>
    </form>`;
    let save_button = document.getElementById("save_bike");
    save_button.addEventListener("click", () => {
      db.addBike(db.createBike())
      .then((result) => {
        db.addBikeId(result);
      });
      response.bikeAdded();
      });
}

function showGuestForm() {
  let main_content = document.getElementById("main_content");
  main_content.innerHTML =
  `<h3>Setup Service for your bike</h3>
  <p class="subheading">Just provide us with your contact information and some for your bike and we'll get things going.
  </p>
  <p>Step 1 -> <span>Step 2 -> </span><span class="disabled">Step 3</span></p>
  <form>
      <fieldset>
        <legend>Contact Information</legend>
  <!-- First and Last Name -->
              <div class="form-row">
                <div class="col">
                  <label for="contact-first-name">First Name</label>
                  <input id="contact-first-name" class="form-control" type="text" placeholder="First Name" required>
                </div>
                <div class="col">
                    <label for="contact-last-name">Last Name</label>
                    <input id="contact-last-name" class="form-control" type="text" placeholder="Last Name" required>
                </div>
              </div>
  <!-- Phone Number -->
              <div class="form-row">
                <div class="col-sm-3">
                  <label for="contact-area-code">Area Code</label>
                  <input id="contact-area-code" class="form-control" type="text" placeholder="Area Code" required>
                </div>
                <div class="col">
                  <label for="contact-m-number">Phone Number</label>
                  <input id="contact-m-number" class="form-control" type="text" placeholder="Telephone Number" required>
                </div>
              </div>
  <!-- Email Address -->
              <div class="form-group">
                <label for="contact-email">Email Address</label>
                <input id="contact-email" class="form-control" type="email" placeholder="Email address" required>
              </div>
  <!-- First Line of Address -->
              <div class="form-group">
                <label for="contact-address">Street Address</label>
                <input id="contact-address" class="form-control" type="address" placeholder="Street Address">
              </div>
  <!-- Second Line of Address -->
              <div class="form-group">
                <label for="contact-sec-address">Apt., Suite, Building, etc.</label>
                <input id="contact-sec-address" class="form-control" type="address" placeholder="Apt., Suite, Building, etc.">
              </div>
  <!-- State or Province -->
              <div class="form-row">
                <div class="col">
                  <label for="contact-state">State or Province</label>
                  <input id="contact-state" class="form-control" type="address" placeholder="State or Province">
                </div>
  <!-- Postal Code -->
              <div class="col">
                <label for="contact-postal">ZIP or Postal Code</label>
                <input id="contact-postal" class="form-control" type="address" placeholder="ZIP or Postal Code">
              </div>
            </div>
      </fieldset>
        <hr>
      <fieldset>
        <legend>Bike Information</legend>
            <div class="form-group">
              <label for="bike-nickname">Nickname</label>
              <input id="bike-nickname" class="form-control" type="text" placeholder="Nickname">
            </div>
            <div class="custom-file">
              <label class="custom-file-label" for="customFile">Upload image of your bike</label>
              <input type="file" class="custom-file-input" id="customFile">
            </div>
            <div class="form-group">
                <label for="bike-year">Year</label>
                <input id="bike-year" class="form-control" type="text" placeholder="Year">
            </div>
            <div class="form-group">
              <label for="bike-make">Make</label>
              <input id="bike-make" class="form-control" type="text" placeholder="Make">
            </div>
            <div class="form-group">
              <label for="bike-model">Model</label>
              <input id="bike-model" class="form-control" type="text" placeholder="Model">
            </div>
            <div class="form-group">
              <label for="bike-comments">Comments</label>
              <textarea id="bike-comments" class="form-control" rows="3" placeholder="Comments"></textarea>
            </div>
        </fieldset>
  <!-- Add Bike/Submit Button -->
          <button type="button" class="btn btn-danger" value="CANCEL">Cancel</button>
          <button type="button" id="save_guest_bike" class="btn btn-dark" value="ADD BIKE">Add Bike</button>
      </form>`;
  document.getElementById("save_guest_bike").addEventListener("click", () => {
    db.addBike(db.createBike())
    .then((result) => {
      db.addBikeId(result);     
    });
  });
}

function showTimeForm() {
  let main_content = document.getElementById("main_content");
  main_content.innerHTML = `<h3>Nickname | Year | Make | Model</h3>
  <div class="col-sm-6">
    <img src="images/1976-yellow-puch-maxi-13.jpg" alt="1976 Yellow Puch Maxi" class="img-fluid">
  </div>
  <div class="dropdown col-sm-6">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Dropoff</a>
      <a class="dropdown-item" href="#">Pickup</a>
    </div>
  </div>`;
}

module.exports = {showGuestForm, showBikeForm, showTimeForm};