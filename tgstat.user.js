// ==UserScript==
// @name         tgstat: copy usernames to clipboard
// @namespace    q.alexander.tgstat
// @version      0.1
// @description  Copy usernames from tgstat page to clipboard
// @author       Q
// @match        https://tgstat.ru/ratings/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  jQuery(document).keypress(function (e) {
    var str = Array.from($('a[href^="https://tgstat.ru/chat/"]'))
      .map((a) => /\/chat\/@([^\/]+)/.exec(a)[1])
      .join("\n");
    navigator.clipboard.writeText(str).then(
      function () {
        console.log("Async: Copying to clipboard was successful!");
      },
      function (err) {
        console.error("Async: Could not copy text: ", err);
      },
    );
    alert("usernames copied to clipboard");
  });
})();
