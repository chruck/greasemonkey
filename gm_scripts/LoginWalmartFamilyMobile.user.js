// ==UserScript==
// @name        LoginWalmartFamilyMobile
// @namespace   eckard.com
// @include     https://www.myfamilymobile.com/Login/login.aspx?rc=&dest=https%3a%2f%2fwww.myfamilymobile.com%3a443%2fdefault.aspx#
// @version     1
// @grant       none
// ==/UserScript==
phone1="AAA";  // Area code
phone2="XXX";  // CO Exchange code
phone3="NNNN"; // Subscriber number
passwd=mypassword;  // Walmart Family Mobile website password

addAttrib=" value=$passwd";

id="MKBLogin_txtPassword";

addAttrib=" value=$phone1";
id="MKBLogin_txtMSISDN1";
addAttrib=" value=$phone2";
id="MKBLogin_txtMSISDN2";
addAttrib=" value=$phone3";
id="MKBLogin_txtMSISDN3";
