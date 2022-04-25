// ==UserScript==
// @name         Instagram get user id
// @namespace    q.alexander.igid
// @version      0.2
// @description  Copy instagram user id or userid with username to clipboard
// @author       Q
// @match        https://www.instagram.com/*
// @grant        none
// @require https://code.jquery.com/jquery-3.4.1.min.js
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
      var user = window._sharedData.entry_data.ProfilePage[0].graphql.user;
      copyToClipboard(user.id)
      alert("userid copied to clipboard")
    } else if(e.keyCode == 113) {
      var user = window._sharedData.entry_data.ProfilePage[0].graphql.user;
      var str = "{<<\"" + user.id + "\">>, <<\"" + user.username + "\">>}"
      copyToClipboard(str);
      alert("userid with userlogin in erlang format copied to clipboard");
    }
  });
})();
