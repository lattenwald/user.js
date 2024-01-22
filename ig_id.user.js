// ==UserScript==
// @name         Instagram get user id
// @namespace    q.alexander.igid
// @version      0.3
// @description  Copy instagram user id or userid with username to clipboard
// @author       Q
// @match        https://www.instagram.com/*
// @grant        none
// @require https://code.jquery.com/jquery-3.7.1.min.js
// ==/UserScript==

function copyToClipboard(text) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();
}

(function() {
  'use strict';

  jQuery(document).keypress(function(e){
    if(e.keyCode == 105) {
      var id = document.body.textContent.match(/"id":"(?<id>\d+)"/)[1];
      copyToClipboard(id)
      alert("userid copied to clipboard")
    } else if(e.keyCode == 113) {
      var id = document.body.textContent.match(/"id":"(?<id>\d+)"/)[1];
      var username = document.body.textContent.match(/"username":"([^"]+)"/)[1]
      var str = "{<<\"" + id + "\">>, <<\"" + username + "\">>}"
      copyToClipboard(str);
      alert("userid with userlogin in erlang format copied to clipboard");
    }
  });
})();
