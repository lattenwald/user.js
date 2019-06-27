// ==UserScript==
// @name DuckDuckGo - Add Google and Yandex links with current query
// @description:en Adds Google and Yandex links with current query used at DuckDuckGo (for faster and more comfortable way to check alternative search results)
// @match https://duckduckgo.com/?*
// @grant none
// @run-at document-end
// @version 0.1
// @description Adds Google and Yandex links with current query used at DuckDuckGo (for faster and more comfortable way to check alternative search results)
// ==/UserScript==

setTimeout(function() {
  var query = '' + document.forms.x.q.value;
  var ds = document.getElementById('duckbar_static');

  var glink = document.createElement('a');
  glink.innerHTML = 'Google';
  glink.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
  glink.style.verticalAlign = 'top';
  glink.style.fontWeight = "bold";
  glink.style.padding = '0 0.5em';

  var glink2 = glink.cloneNode();
  glink2.innerHTML = 'Google';
  glink2.style.position = 'fixed';
  glink2.style.right = "110px";
  glink2.style.bottom = "20px";
  glink2.style.zIndex = "11";
  glink2.style.fontSize = "xx-large";

  var ylink = document.createElement('a');
  ylink.innerHTML = 'Yandex';
  ylink.href = 'https://yandex.ru/search/?text=' + encodeURIComponent(query);
  ylink.style.verticalAlign = 'top';
  ylink.style.fontWeight = "bold";
  ylink.style.padding = '0 0.5em';

  var ylink2 = ylink.cloneNode();
  ylink2.innerHTML = 'Yandex';
  ylink2.style.position = 'fixed';
  ylink2.style.right = "110px";
  ylink2.style.bottom = "60px";
  ylink2.style.zIndex = "11";
  ylink2.style.fontSize = "xx-large";

  ds.parentNode.appendChild(glink);
  document.body.appendChild(glink2);
  ds.parentNode.appendChild(ylink);
  document.body.appendChild(ylink2);

  function altSearchKey(e) {
    e = e || window.event;
    if (e.keyCode == '220' && !e.shiftKey) {
      document.location.href = glink.href;
    }

    if (e.keyCode == '221' && !e.shiftKey) {
      document.location.href = ylink.href;
    }
  }

  document.onkeydown = altSearchKey;
}, 1000);
