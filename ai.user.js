// ==UserScript==
// @name         Unified New Chat – Ctrl+I (Gemini / Claude / Grok)
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Ctrl+I starts a new chat in Gemini, Claude or Grok – even inside text fields. Perplexity ignored.
// @author       You
// @match        https://gemini.google.com/app*
// @match        https://claude.ai/*
// @match        https://grok.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Capture phase – runs before the page’s own shortcuts
    document.addEventListener('keydown', function (e) {
        // Ctrl + I  (no Alt / Shift / Meta)
        if (e.ctrlKey && e.key === 'i' && !e.altKey && !e.shiftKey && !e.metaKey) {
            e.stopPropagation();   // stop page’s own listeners
            // NO preventDefault() → you can still type the letter “i”

            const host = window.location.hostname;

            // ---------- GEMINI ----------
            if (host === 'gemini.google.com') {
                const btn = document.querySelector(
                    'button[aria-label="New chat"], md-icon-button[aria-label*="new"], [jsname="K3D0ye"] button'
                );
                if (btn) btn.click();

            // ---------- CLAUDE ----------
            } else if (host === 'claude.ai') {
                // Use direct /new URL to create a fresh conversation
                window.location.href = 'https://claude.ai/new';

            // ---------- GROK (grok.com) ----------
            } else if (host === 'grok.com') {
                // Grok creates a fresh conversation via /new
                window.location.href = 'https://grok.com/new';
            }

            // Perplexity is deliberately omitted – nothing happens there
        }
    }, true);   // capture phase
})();
