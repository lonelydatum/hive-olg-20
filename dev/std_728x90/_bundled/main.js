(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {
	var time = .5;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	TweenMax.from(".bg", 7, { x: 0 });
	tl.add("t1", "+=.1");
	tl.from(".t1a", time, { x: "-=50", opacity: 0, ease: Power4.easeOut }, "t1+=.1");
	tl.from(".t1b", time, { x: "-=50", opacity: 0, ease: Power4.easeOut }, "t1+=.7");

	tl.add("t1_out", "+=2.3");
	tl.to(".t1a", time, { x: "+=50", opacity: 0, ease: Power4.easeOut }, "t1_out");
	tl.to(".t1b", time, { x: "+=50", opacity: 0, ease: Power4.easeOut }, "t1_out+=.1");

	tl.add("t2", "-=.3");
	tl.from(".t2a", time, { x: "-=50", opacity: 0, ease: Power4.easeOut }, "t2+=.1");

	tl.to(".logoSmall", time, { opacity: 0, ease: Sine.easeOut }, "t2_out+=.1");

	tl.from(".t3", time, { opacity: 0, ease: Sine.easeOut });

	tl.from([".footer", ".logoBig"], time, { opacity: 0, ease: Sine.easeOut }, "+=.3");
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map
