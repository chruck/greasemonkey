// ==UserScript==
// @name        WorkspacePulldown
// @namespace   clemson
// @description Always have the "You are in the ___ workspace" as a pulldown, not just when the workspace name gets clicked.  (From the 'onclick')
// @include     https://ithelp.clemson.edu/*
// @version     1
// @grant       none
// ==/UserScript==

document.getElementById('Project').style.display = 'none';
document.getElementById('ProjectSelect').style.display = '';
return true;