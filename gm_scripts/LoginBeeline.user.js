// ==UserScript==
// @name        LoginBeeline
// @namespace   beeline
// @description login to beeline
// @include     https://origin.beeline.com/stateofsc/Security/Login.aspx*
// @version     1
// @grant       none
// ==/UserScript==

username="MyUsername";
passwd="MyPassword";

beelineForm_userNameText.value=username;
beelineForm_passwordText.value=passwd;
