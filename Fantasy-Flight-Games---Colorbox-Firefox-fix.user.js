// ==UserScript==
// @name Fantasy Flight Games - Colorbox Firefox fix
// @namespace Fantasy Flight Games - Colorbox Firefox fix
// @author Laurvin
// @description The Colorbox script does not remove the scrollbars on Firefox by default, covering up part of the images; this fixes that.
// @version 0.2
// @icon http://i.imgur.com/XYzKXzK.png
// @downloadURL https://github.com/Laurvin/Fantasy-Flight-Games---Colorbox-Firefox-fix/raw/master/Fantasy-Flight-Games---Colorbox-Firefox-fix.user.js
// @include https://www.fantasyflightgames.com/en/news/*
// @include https://drafts.fantasyflightgames.com/en/news/*
// @grant none
// @run-at document-idle
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

$(document).ready(function ()
{
	'use strict';

    $('.cboxElement').colorbox({scrolling: false})
});
