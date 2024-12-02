// ==UserScript==
// @name         Instagram get user id
// @namespace    q.alexander.igid
// @version      0.6
// @description  Copy instagram user id or userid with username to clipboard
// @author       Q
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function () {
      console.log("Async: Copying to clipboard was successful!");
    },
    function (err) {
      console.error("Async: Could not copy text: ", err);
    },
  );
}

(function () {
  "use strict";

  jQuery(document).keypress(function (e) {
    if (e.keyCode == 105) {
      var id = document.body.textContent.match(/"user_id":"(?<id>\d+)"/)[1];
      copyToClipboard(id);
      alert("userid copied to clipboard");
    } else if (e.keyCode == 113) {
      var id = document.body.textContent.match(/"user_id":"(?<id>\d+)"/)[1];
      var username = document.body.textContent.match(
        /{"query":{"username":"([^"]+)"/,
      )[1];
      var str = "./cirq-add -i " + id + " -n " + username + " --cirqs both";
      copyToClipboard(str);
      alert("userid with userlogin in rust format copied to clipboard");
    }
  });
})();
