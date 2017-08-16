// ==UserScript==
// @name        StickyControlPanel
// @namespace   tigertracks
// @description This makes the "control panel" (edit/link/subtask) stay at the top when scrolling
// @include     https://ithelp.clemson.edu/MRcgi/MRTicketPage.pl*
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

GM_addStyle( "                          \
#controlPanelHolder {                   \
        position: sticky !important;    \
        top: 0px;                       \
        background-color: #c0c0c0;      \
}                                       \
             ");
