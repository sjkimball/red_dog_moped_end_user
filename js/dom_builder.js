"use strict";

let $ = require("jquery");

$("#guestLogin").click(function(){
    console.log("clicked on Guest Signin");
    forms.showGuestForm();
  });

let contentToDom = (content) => {
  let main_content = document.getElementById("main_content");
  main_content.innerHTML = content;
};

module.exports = {contentToDom};
