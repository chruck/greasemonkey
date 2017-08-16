// ==UserScript==
// @name        AckTicketIdle
// @namespace   clemson
// @description Script to automatically acknowledge that I notice that I have been idle
// @include https://ithelp.clemson.edu/MRcgi/MRconcurrentTimeoutWarning.pl*
// @version     1
// @grant       none
// ==/UserScript==


aTags = document.getElementsByTagName('a');

for (i = 0; i < aTags.length; ++i) {
        //alert(aTags[i].innerHTML);
        if ("close window" == aTags[i].innerHTML) {
                aTags[i].click();
        }
}
