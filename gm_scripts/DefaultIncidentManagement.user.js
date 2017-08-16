// ==UserScript==
// @name        DefaultIncidentManagement
// @namespace   tigertracks
// @description Once logged into Tiger Tracks, it defaults to "Incident Management", not "Archived"
// @include     https://ithelp.clemson.edu/MRcgi/MRhomepage.pl*
// @version     1
// @grant       none
// ==/UserScript==
document.getElementById('Project').style.display = 'none';
projSelect = document.getElementById('ProjectSelect');
projSelect.style.display = '';

projSelect.replace("selected=\"\"", "");
projSelect.replace("title=\"Incident Management\"", "title=\"Incident Management\" selected=\"\"");

submitChangeProjectForm();

return true;
