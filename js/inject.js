var s = document.createElement('script');
s.src = chrome.extension.getURL('js/confluence.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);
};