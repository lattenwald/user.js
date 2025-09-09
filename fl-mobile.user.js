// ==UserScript==
// @name         FetLife Mobile Image Downloader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Download FetLife images with mobile-friendly buttons
// @author       You
// @match        https://fetlife.com/users/*/pictures/*
// @match        https://fetlife.com/pictures/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    // Wait for page to load
    setTimeout(function() {
        addDownloadButton();
    }, 1000);
    
    function addDownloadButton() {
        // Find the image container - FetLife typically uses these selectors
        const imageContainer = document.querySelector('.picture_page_picture img') || 
                              document.querySelector('#picture img') ||
                              document.querySelector('img[data-picture-id]') ||
                              document.querySelector('.center img');
        
        if (!imageContainer) {
            console.log('No image found, retrying...');
            setTimeout(addDownloadButton, 1000);
            return;
        }
        
        // Get image URL and info
        const imageUrl = imageContainer.src;
        const pictureId = imageContainer.getAttribute('data-picture-id') || 'image';
        
        // Extract username from URL
        const urlMatch = window.location.href.match(/users\/([^\/]+)/);
        const username = urlMatch ? urlMatch[1] : 'user';
        
        // Create download button with mobile-friendly styling
        const downloadBtn = document.createElement('button');
        downloadBtn.innerHTML = '📥 Download Image';
        downloadBtn.className = 'fetlife-mobile-download-btn';
        
        // Mobile-optimized CSS styles
        downloadBtn.style.cssText = `
            position: fixed !important;
            bottom: 20px !important;
            right: 20px !important;
            z-index: 9999 !important;
            background: #e74c3c !important;
            color: white !important;
            border: none !important;
            border-radius: 8px !important;
            padding: 15px 20px !important;
            font-size: 16px !important;
            font-weight: bold !important;
            box-shadow: 0 4px 8px rgba(0,0,0,0.3) !important;
            cursor: pointer !important;
            min-width: 120px !important;
            min-height: 50px !important;
            touch-action: manipulation !important;
            user-select: none !important;
            -webkit-tap-highlight-color: transparent !important;
        `;
        
        // Add hover/active states for better mobile interaction
        downloadBtn.addEventListener('touchstart', function() {
            this.style.background = '#c0392b !important';
            this.style.transform = 'scale(0.95) !important';
        });
        
        downloadBtn.addEventListener('touchend', function() {
            this.style.background = '#e74c3c !important';
            this.style.transform = 'scale(1) !important';
        });
        
        // Download functionality
        downloadBtn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadImage(imageUrl, `${username}_${pictureId}.jpg`);
        });
        
        // Add button to page
        document.body.appendChild(downloadBtn);
        
        // Also add inline button near the image for desktop users
        const inlineBtn = downloadBtn.cloneNode(true);
        inlineBtn.innerHTML = '⬇️ Download';
        inlineBtn.style.cssText = `
            display: inline-block !important;
            position: relative !important;
            margin: 10px !important;
            background: #3498db !important;
            color: white !important;
            border: none !important;
            border-radius: 6px !important;
            padding: 12px 18px !important;
            font-size: 14px !important;
            font-weight: bold !important;
            cursor: pointer !important;
            touch-action: manipulation !important;
        `;
        
        inlineBtn.addEventListener('click', function(e) {
            e.preventDefault();
            downloadImage(imageUrl, `${username}_${pictureId}.jpg`);
        });
        
        // Insert inline button after the image
        imageContainer.parentNode.insertBefore(inlineBtn, imageContainer.nextSibling);
    }
    
    function downloadImage(url, filename) {
        // Create temporary anchor element for download
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Show feedback
        showFeedback('Image download started!');
    }
    
    function showFeedback(message) {
        const feedback = document.createElement('div');
        feedback.textContent = message;
        feedback.style.cssText = `
            position: fixed !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            background: rgba(0,0,0,0.8) !important;
            color: white !important;
            padding: 15px 25px !important;
            border-radius: 8px !important;
            font-size: 16px !important;
            z-index: 10000 !important;
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(function() {
            document.body.removeChild(feedback);
        }, 2000);
    }
})();