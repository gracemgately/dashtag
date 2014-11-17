// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require masonry
//= require jquery_ujs
//= require turbolinks
//= require imagesloaded.pkgd
//= require_tree .

"use strict";

// var app = app || {};

var dashtag = dashtag || {}
var ajaxService = dashtag.ajaxService();
var masonryService = dashtag.masonryService();
var dateHelper = dashtag.dateHelper();
var applicationController = dashtag.applicationController();
var renderPostHelper = dashtag.renderPostHelper();

$(document).on("ready", function(){

	// app.createRunner({
	// 	ajaxService :

	// }).run();


  masonryService.layOutMasonry();

  dateHelper.replaceInitiallyLoadedTimestamps();

  applicationController.setupScroll();

  ajaxService.setup();

  applicationController.setupRenderPost();

  applicationController.setupLoadOlderPosts();
});

