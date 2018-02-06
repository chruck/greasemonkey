// ==UserScript==
// @name        StickyControlPanel
// @namespace   tigertracks
// @description This makes the "control panel" (edit/link/subtask) stay at the top when scrolling
// @include     https://ithelp.clemson.edu/MRcgi/MRTicketPage.pl*
// @version     3
// @grant       GM_addStyle
// @author	Jas Eckard
// ==/UserScript==

/*
GM_addStyle( "                          \
#controlPanelHolder, #StaticAreaDiv {   \
        position: sticky !important;    \
        top: 0px;                       \
        background-color: black;        \
        z-index: 10;                    \
}                                       \
#StaticAreaDiv {                        \
        float: right;                   \
}                                       \
             ");
*/

function addGlobalStyle(css)
{
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

(function()
{
    'use strict';

    // Your code here...

    addGlobalStyle('#controlPanelHolder, #StaticAreaDiv { '
                   +     'position: sticky !important; '
                   +     'top: 0px; '
                   +     'background-color: black; '
                   +     'z-index: 10; '
                   + '} '
                   + '#StaticAreaDiv { '
                   +     'float: right; '
                   + '}'
                  );
})();
