// ==UserScript==
// @name        TigerTracks
// @namespace   clemson.edu
// @description Login to TigerTracks ticketing system
// @include     https://ithelp.clemson.edu/MRcgi/MRentrancePage.pl*
// @version     1
// @grant       none
// ==/UserScript==

username = "MyUser";
passwd = "MyPassword";

x = document.getElementsByName("USER");

x.item(0).value = username;

x = document.getElementsByName("PASSWORD");

x.item(0).value = passwd;
