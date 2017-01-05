/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/**
	 * Created by Victoria on 05.01.2017.
	 */
	'use strict';
	/*
	 let welcome = require('./login');
	 welcome("home");
	 */


	;(function() {

	    window.onload = function() {

	        var loginSymbol = document.getElementsByClassName('login')[0];
	        var logImgSymbol = document.getElementsByClassName('loginImg')[0];
	        var form = document.getElementsByClassName('login-form')[0];
	        var spanLoginSymbol = document.querySelectorAll('span')[3];

	        loginSymbol.onclick = logImgSymbol.onclick = function(event) {
	            var target = event.target;
	            target.classList.toggle('greenBckgr');
	            spanLoginSymbol.classList.toggle('loginImg');
	            spanLoginSymbol.classList.toggle('changeSymbol');
	            form.classList.toggle('hide');
	        };

	        var sidebar = document.getElementsByClassName('sidebar')[0];
	        var buttonSidebar = sidebar.lastElementChild.lastElementChild;
	        var imgSidebar = sidebar.firstElementChild;
	        var textOnImg = sidebar.childNodes[3];

	        buttonSidebar.onclick = function(event) {
	            buttonSidebar.innerHTML = 'I liked';
	            buttonSidebar.classList.toggle('onclickButtonA');
	            buttonSidebar.classList.toggle('onclickButtonBeforeA');
	            imgSidebar.classList.toggle('onclickButtonImg');
	            textOnImg.classList.toggle('hide');
	        }
	    };

	}());


/***/ }
/******/ ]);