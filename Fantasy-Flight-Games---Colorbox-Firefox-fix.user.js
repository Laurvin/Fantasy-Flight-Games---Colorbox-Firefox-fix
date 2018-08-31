// ==UserScript==
// @name Fantasy Flight Games - Colorbox Firefox fix
// @namespace 
// @author Laurvin
// @description The Colorbox script does not remove the scrollbars on Firefox by default, covering up part of the images; this fixes that.
// @version 0.1
// @icon http://i.imgur.com/XYzKXzK.png
// @include https://www.fantasyflightgames.com/en/news/*
// @grant none
// @run-at document-idle
// ==/UserScript==

this.$ = this.jQuery = jQuery.noConflict(true);

$(document).ready(function ()
{
	'use strict';

    $('.cboxElement').colorbox({scrolling: false})
});
