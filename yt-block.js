// ==UserScript==
// @name         Hide YouTube channels
// @match        https://www.youtube.com/*
// @match        https://m.youtube.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
  // Handles (with @) and/or channel IDs (UC...), case-insensitive. Shorts tiles have no channel link.
  const BLOCKED = ['@djmusicroomofficial'];

  const TILES = [
    'ytd-video-renderer', 'ytd-rich-item-renderer', 'ytd-compact-video-renderer',
    'ytd-grid-video-renderer', 'ytd-reel-item-renderer', 'ytd-playlist-renderer',
    'ytd-channel-renderer', 'yt-lockup-view-model',
    'ytm-rich-item-renderer', 'ytm-video-with-context-renderer', 'ytm-compact-video-renderer',
    'ytm-compact-channel-renderer', 'ytm-shorts-lockup-view-model',
  ];

  const links = BLOCKED.flatMap(b => {
    const path = '/' + (b.startsWith('@') ? encodeURI(b) : 'channel/' + b);
    return [`a[href="${path}" i]`, `a[href^="${path}/" i]`, `a[href^="${path}?" i]`];
  }).join(',');

  const style = document.createElement('style');
  style.textContent = `:is(${TILES.join(',')}):has(${links}) { display: none !important; }`;
  document.documentElement.append(style);
})();
