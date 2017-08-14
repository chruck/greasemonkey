// ==UserScript==
// @name          Office 365 Outlook Web Access - Tighter interface
// @namespace     http://userstyles.org
// @description	  * Tightens up the mail list so that you can fit around 40% more e-mails on one screen.
// @author        Matti Jääaro
// @homepage      https://userstyles.org/styles/100720
// @include       http://outlook.office365.com/*
// @include       https://outlook.office365.com/*
// @include       http://*.outlook.office365.com/*
// @include       https://*.outlook.office365.com/*
// @run-at        document-start
// @version       0.20140423102801
// ==/UserScript==
(function() {var css = [
	"._lv_J {",
	"font: 13px \'Segoe UI WPC\',\'Segoe UI\',Tahoma,\'Microsoft Sans Serif\',Verdana,sans-serif;",
	"color: #000000;",
	"font-weight: bold;",
	"}",
	"._lv_h3 {",
	"font: 13px \'Segoe UI WPC\',\'Segoe UI\',Tahoma,\'Microsoft Sans Serif\',Verdana,sans-serif;",
	"color: #000000;",
	"font-weight: bold;",
	"}",
	"",
	"",
	"._lv_v ._lv_J {",
	"font: 13px \'Segoe UI WPC Semilight\',\'Segoe UI Semilight\',\'Segoe UI\',Tahoma,\'Microsoft Sans Serif\',Verdana,sans-serif!important;",
	"color: #000!important;",
	"}",
	"._lv_63 ._lv_h3 {",
	"font: 13px \'Segoe UI WPC Semilight\',\'Segoe UI Semilight\',\'Segoe UI\',Tahoma,\'Microsoft Sans Serif\',Verdana,sans-serif!important;",
	"color: #000!important;",
	"}",
	"    ",
	"",
	"._lv_v ._lv_K {",
	"font: 12px \'Segoe UI WPC\',\'Segoe UI\',Tahoma,\'Microsoft Sans Serif\',Verdana,sans-serif!important;",
	"color: #8D8D8D!important;",
	"}",
	"._lv_63 ._lv_i3{",
	"font: 12px \'Segoe UI WPC\',\'Segoe UI\',Tahoma,\'Microsoft Sans Serif\',Verdana,sans-serif!important;",
	"color: #8D8D8D!important;",
	"}",
	"  ",
	"",
	"._lv_t {",
	"height:42px;",
	"}",
	"._lv_43 {",
	"height:42px;",
	"}",
	" ",
	"._lv_y {",
	"height:42px;",
	"width:8px;",
	"}",
	"._lv_83 {",
	"height:42px;",
	"width:8px;",
	"}",
	"    ",
	"._lv_E {",
	"height:16px;",
	"}",
	"._lv_c3 {",
	"height:16px;",
	"}",
	"",
	"._lv_b1 {",
	"display:none !important;",
	"}",
	"._lv_E3 {",
	"display:none !important;",
	"}",
	"",
	"._n_F2 {",
	"display:none !important;",
	"}",
	"",
	".pivotNavClassical {",
	"top:45px!important;",
	"}",
	"",
	"._n_w2 {",
	"top:76px!important;  ",
	"}",
	"  ",
	"._n_37 {",
	"padding:0px;",
	"}",
	"._n_67 {",
	"padding:0px;",
	"}",
	"",
	"._n_d2 ._n_92{",
	"background-color:#EEEEEE;",
	"  }",
	"",
	"",
	"._rp_Z3{",
	"background-color:#EEEEEE;",
	"  }",
	"",
	"",
	".folderPaneGradient {",
	"top:50px!important;",
	"}",
	"",
	"._n_16 {",
	"padding-top:0px;",
	"padding-bottom:0px;",
	"border:0px       ",
	"}",
	"",
	"._n_e2 {",
	"padding-left: 0px;",
	"margin-left: 10px;",
	"margin-top: 10px;",
	"margin-right: 5px;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
