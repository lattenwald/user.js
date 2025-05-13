// ==UserScript==
// @name         Instagram get user id
// @namespace    q.alexander.igid
// @version      0.7.1
// @description  Copy instagram user id or userid with username to clipboard
// @author       Q
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    function() {
      console.log("Async: Copying to clipboard was successful!");
    },
    function(err) {
      console.error("Async: Could not copy text: ", err);
    },
  );
}

(function() {
  "use strict";

  document.onkeydown = function(e) {
    if (e.key == "w") {
      var id = document.body.textContent.match(/"user_id":"(?<id>\d+)"/)[1];
      copyToClipboard(id);
      alert("userid copied to clipboard");
    } else if (e.key == "q") {
      var id = document.body.textContent.match(/"user_id":"(?<id>\d+)"/)[1];
      var username = document.body.textContent.match(/{"query":{"username":"([^"]+)"/)[1];
      var str = "./cirq-add -i " + id + " -n " + username + " --cirqs both";
      copyToClipboard(str);
      alert("userid with userlogin in rust format copied to clipboard");
    }
  };
})();
