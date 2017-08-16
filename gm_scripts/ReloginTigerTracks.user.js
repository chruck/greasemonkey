// ==UserScript==
// @name        Relogintigertracks
// @namespace   tigertracks
// @description Clicks "Click here to log in again" on Tiger Tracks refresh page
// @include     https://ithelp.clemson.edu/*
// @version     1
// @grant       none
// ==/UserScript==

aTags = document.getElementsByTagName('a');

for (i = 0; i < aTags.length; ++i) {
        //alert(aTags[i].innerHTML);
        if ("Click here to log in again" == aTags[i].innerHTML) {
                aTags[i].click();
        }
}
