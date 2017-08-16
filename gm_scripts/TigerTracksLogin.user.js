// ==UserScript==
// @name        tigertracks
// @namespace   tigertracks
// @description Login to tigertracks ticketing system
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
