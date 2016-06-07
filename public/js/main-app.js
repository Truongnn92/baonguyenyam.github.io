'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var BNLOGO = '';
var BNICON = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="174px" height="104.5px" viewBox="0 0 174 104.5" enable-background="new 0 0 174 104.5" xml:space="preserve"><path fill="#795E9D" d="M14,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V6c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M56.667,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V46c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M6,96c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H6z"/><path fill="#795E9D" d="M6,56c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H6z"/><path fill="#795E9D" d="M122.667,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V46c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M82,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V46c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M114.667,96c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H114.667z"/><path fill="#795E9D" d="M72,56c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H72z"/></svg>';
var BNQR = '<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect shape-rendering="optimizeSpeed" x="0" y="0" width="200" height="200" fill="white"/><rect shape-rendering="optimizeSpeed" x="13" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="55" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="55" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="55" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="181" width="6" height="6" fill="black"/></svg>';
var BNSIGN = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="174px" height="104.5px" viewBox="0 0 174 104.5" enable-background="new 0 0 174 104.5" xml:space="preserve"><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M2,101.944c0,0,31.333-16,32-55.667s0-13,0-13s-3,34-2,66.333c0,0-13.904-59.727-3.333-78.667c15.239-27.302,33.803,8.589,13.362,36.4c-1.021,1.39-5.235,5.185-7.922,6.215c-1.947,0.746-9.036,2.394-6.719,1.718c7.954-2.32,21.28-11.45,29.613-32.45s4-30.045,2.667-22.689c-1.333,7.356-3.333,35.59-0.667,47.531s0.667-5.842,0.667-13.842c0-8.307,0.637-18.651,1.667-7.667c1,10.667,1.667,15,1.667,1.333s0.333-12.216,0.5-5.883c0.123,4.677,4,12.667,4.667,7.667c0.667-5,3.056,1.773,3.167-5.117c0.167-10.383,3,8.333,2.333-1C73,23.827,74.167,14.444,75,4.827c0.738-8.512-5.977,26.481,1,31.333c4.481,3.117,6.001-2.076,6.001-12.41S77.436,24.191,80,28.16s12.667-2.667,47.333-10.333S158,14.493,158,14.493"/><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M48.979,76.957c0,0,63.333-44.784,123-53.117"/></svg>';

// READY ////////////////////////////////////////////
$(document).ready(function () {

    // Welcome title App
    console.log('%cBaoNguyen', 'font-size:50px;color:#fff;text-shadow:0 1px 0#ccc,0 2px 0 #c9c9c9 ,0 3px 0 #bbb ,0 4px 0 #b9b9b9 ,0 5px 0 #aaa ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
    console.log('%c BN APP ' + '%c - Bao Nguyen App ', 'border-radius: 2px; padding: 3px; background: #795d9c; color: #FFF', 'color: #795d9c');

    $('[bn-icon]').html(BNICON);
    $('[bn-sign]').html(BNSIGN);
    $('[bn-qr]').html(BNQR);
});

// LOAD ////////////////////////////////////////////
$(window).load(function () {});

// SCROLL ////////////////////////////////////////////
$(window).scroll(function () {});

// RESIZE ////////////////////////////////////////////
$(window).resize(function () {});

// ONTIME ////////////////////////////////////////////
$(function () {});
// // set up the base pattern
var pattern = Trianglify({
    height: $(window).height(),
    width: $(window).width(),
    // variance: "1",
    seed: 'mcryp',
    x_colors: 'PRGn',
    cell_size: 60 + Math.random() * 30
});

$('.bgset').html(pattern.svg());

// setInterval(function() {
//     var pattern = Trianglify({
//         height: $(window).innerHeight(),
//         width: $(window).innerWidth(),
//         // variance: "1",
//         seed: 'mcryp',
//         x_colors: 'PRGn',
//         cell_size: 60 + Math.random() * 30
//     })

//     $('.bgset2').fadeOut(500).html(pattern.svg()).fadeIn(500);

// }, 3000);
var initPhotoSwipeFromDOM = function initPhotoSwipeFromDOM(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function parseThumbnailElements(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };

            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function onThumbnailsClick(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
            return el.tagName && el.tagName.toUpperCase() === 'FIGURE';
        });

        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }

            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }

        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function photoswipeParseHash() {
        var hash = window.location.hash.substring(1),
            params = {};

        if (hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function openPhotoSwipe(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function getThumbBoundsFn(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0],
                    // find thumbnail
                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            }

        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');

$(function () {
    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.brick',
        animate: true,
        cellW: 150,
        cellH: 'auto',
        onResize: function onResize() {
            wall.fitWidth();
        }
    });
    var images = wall.container.find('.brick');
    images.find('img').load(function () {
        wall.fitWidth();
    });
    wall.fitWidth();
    $(window).trigger("resize");
});

$(document).ready(function () {

    // How it works
    if ($('.home-sliders').length) {
        $('.home-sliders .owl-carousel').owlCarousel({
            animateOut: 'fadeOut',
            animateInClass: 'fadeIn',
            items: 1,
            loop: true,
            center: true,
            margin: 0,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: false,
            callbacks: true
        });
    }
});
$(document).ready(function () {

    // How it works
    if ($('.home-howitworks').length) {
        $('.home-howitworks .owl-carousel').owlCarousel({
            // animateOut: 'fadeOut',
            // animateInClass: 'fadeIn',
            items: 1,
            loop: true,
            center: true,
            margin: 10,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            // autoHeight:true,
            // smartSpeed:1000
            callbacks: true,
            responsive: {
                992: {
                    // mouseDrag: false,
                    // touchDrag: false,
                    dots: true,
                    nav: true
                }
            }
        });
        $(".home-howitworks .owl-carousel").on('changed.owl.carousel', function (event) {
            if (event.page.index < 0) {
                var tmpgetValOWL = event.item.index - 1 - event.relatedTarget._clones.length / 2;
                if (tmpgetValOWL == 2) {
                    var getValOWL = tmpgetValOWL - 1;
                } else if (tmpgetValOWL == -2) {
                    var getValOWL = tmpgetValOWL + 5;
                } else {
                    var getValOWL = tmpgetValOWL + 2;
                }
            } else {
                var getValOWL = event.page.index + 1;
            }
            $('.boxright').find('.goowl').removeClass('active');
            $('.boxright').find('.goowl[slider=' + getValOWL + ']').addClass('active');
        });

        $('a.goowl').on('click', function () {
            var inputValOWL = parseInt($(this).attr('slider')) - 1;
            $(".home-howitworks .owl-carousel").trigger('to.owl.carousel', [inputValOWL, 500]);
            $(this).parents('.boxright').find('.goowl').removeClass('active');
            $('.boxright').find('.goowl[slider=' + (inputValOWL + 1) + ']').addClass('active');
        });

        // $(".owl-carousel").on('initialized.owl.carousel', function(event) {
        //     $('.boxright').find('.goowl').removeClass('active');
        //     $('.boxright').find('.goowl[slider=1]').addClass('active');
        // });
    }
});

$(document).ready(function () {

    if ($('.home-testimonials').length) {
        $('.home-testimonials .owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            center: true,
            margin: 10,
            navText: ['<i class="mdi mdi-chevron-left"></i>', '<i class="mdi mdi-chevron-right"></i>'],
            nav: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            callbacks: true,
            responsive: {
                992: {
                    dots: true,
                    nav: false
                }
            }
        });
    }
});

$(function () {
    Pace.on("done", function () {
        $("body").fadeIn(1000);
    });
});

$(function () {

    $('[bg-img]').each(function () {
        var bgimg = $(this).attr('bg-img');
        $(this).css({
            "background-image": "url(" + bgimg + ")",
            "background-position": "center center",
            "background-size": "cover"
        });
    });

    $('[bg-img-responsive]').each(function () {
        var bgimg = $(this).attr('bg-img-responsive');
        var bgimgsm = $(this).attr('bg-img-responsive-sm');
        if ($(window).width() < 992) {
            $(this).css({
                "background-image": "url(" + bgimgsm + ")",
                "background-position": "center center",
                "background-size": "cover"
            });
        } else {
            $(this).css({
                "background-image": "url(" + bgimg + ")",
                "background-position": "center center",
                "background-size": "cover"
            });
        }
    });

    $('[img-src-responsive]').each(function () {
        var bgimg = $(this).attr('img-src-responsive');
        var bgimgsm = $(this).attr('img-src-responsive-sm');
        if ($(window).width() < 992) {
            $(this).attr({
                "src": "" + bgimgsm + ""
            });
        } else {
            $(this).css({
                "src": "" + bgimg + ""
            });
        }
    });
});
$(document).ready(function () {

    if ($(this).scrollTop() > 56) {
        $(".info-page header").removeClass('active');
    } else {
        $(".info-page header").addClass('active');
    }
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 56) {
        $(".info-page header").removeClass('active');
    } else {
        $(".info-page header").addClass('active');
    }
});
$(document).ready(function () {

    if ($('.devmode').length) {
        $('.devmode-show a').on('click', function (event) {
            $(this).parent().toggleClass('active');
            $('.devmode').toggleClass('active');
        });
        $('.hidegrid').on('click', function (event) {
            $(this).parents('.devmode').toggleClass('hidegrid');
        });
        $('.hidebg').on('click', function (event) {
            $(this).parents('.devmode').toggleClass('hidebg');
        });
        $('.closedev').on('click', function (event) {
            $(this).parents('.devmode').toggleClass('active');
            $('.devmode-show').toggleClass('active');
        });
    }
});
$(document).ready(function () {

    var favicon = new Favico({
        animation: 'slide'
    });
    favicon.badge(9);
});
(function ($) {

    $(document).ready(function () {
        $('.toggle-nav').on('click', function () {
            toggleNavigation($(this), $('.nav-pane'));
            changeLetters($(this));
        });

        function toggleNavigation(btn, nav) {
            btn.toggleClass('open');
            nav.toggleClass('open');
        }

        function changeLetters(btn) {
            var m = $('.toggle-nav span.m');
            var e = $('.toggle-nav span.e');
            var n = $('.toggle-nav span.n');
            var u = $('.toggle-nav span.u');

            e.toggleClass('btn-close');

            if (btn.hasClass('open')) {
                m.text("E");
                n.text("I");
                u.text("T");
            } else {
                m.text("M");
                n.text("N");
                u.text("U");
            }
        }
    });
})(jQuery);
$(document).ready(function () {
    var allAreas = $(".areas").find(".item");
    toggleAreas(null, allAreas.first());
});

function toggleAreas(from, to) {
    function next() {
        var nextTo;
        if (to.is(":last-child")) {
            nextTo = to.closest(".areas").find(".item").first();
        } else {
            nextTo = to.next();
        }
        to.fadeIn(500, function () {
            setTimeout(function () {
                toggleAreas(to, nextTo);
            }, 2000);
        });
    }

    if (from) {
        from.fadeOut(500, next);
    } else {
        next();
    }
}
// particlesJS.load('particles-js', './particles.json', function() {
//     // console.log('callback - particles.js config loaded');
// });

// particle.min.js hosted on GitHub
// Scroll down for initialisation code

!function (a) {
    var b = "object" == (typeof self === 'undefined' ? 'undefined' : _typeof(self)) && self.self === self && self || "object" == (typeof global === 'undefined' ? 'undefined' : _typeof(global)) && global.global === global && global;
    "function" == typeof define && define.amd ? define(["exports"], function (c) {
        b.ParticleNetwork = a(b, c);
    }) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = a(b, {}) : b.ParticleNetwork = a(b, {});
}(function (a, b) {
    var c = function c(a) {
        this.canvas = a.canvas, this.g = a.g, this.particleColor = a.options.particleColor, this.x = Math.random() * this.canvas.width, this.y = Math.random() * this.canvas.height, this.velocity = {
            x: (Math.random() - .5) * a.options.velocity,
            y: (Math.random() - .5) * a.options.velocity
        };
    };
    return c.prototype.update = function () {
        (this.x > this.canvas.width + 20 || this.x < -20) && (this.velocity.x = -this.velocity.x), (this.y > this.canvas.height + 20 || this.y < -20) && (this.velocity.y = -this.velocity.y), this.x += this.velocity.x, this.y += this.velocity.y;
    }, c.prototype.h = function () {
        this.g.beginPath(), this.g.fillStyle = this.particleColor, this.g.globalAlpha = .7, this.g.arc(this.x, this.y, 1.5, 0, 2 * Math.PI), this.g.fill();
    }, b = function b(a, _b) {
        this.i = a, this.i.size = {
            width: this.i.offsetWidth,
            height: this.i.offsetHeight
        }, _b = void 0 !== _b ? _b : {}, this.options = {
            particleColor: void 0 !== _b.particleColor ? _b.particleColor : "#fff",
            background: void 0 !== _b.background ? _b.background : "#1a252f",
            interactive: void 0 !== _b.interactive ? _b.interactive : !0,
            velocity: this.setVelocity(_b.speed),
            density: this.j(_b.density)
        }, this.init();
    }, b.prototype.init = function () {
        if (this.k = document.createElement("div"), this.i.appendChild(this.k), this.l(this.k, {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            "z-index": 1
        }), /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background)) this.l(this.k, {
            background: this.options.background
        });else {
            if (!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background)) return console.error("Please specify a valid background image or hexadecimal color"), !1;
            this.l(this.k, {
                background: 'url("' + this.options.background + '") no-repeat center',
                "background-size": "cover"
            });
        }
        if (!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor)) return console.error("Please specify a valid particleColor hexadecimal color"), !1;
        this.canvas = document.createElement("canvas"), this.i.appendChild(this.canvas), this.g = this.canvas.getContext("2d"), this.canvas.width = this.i.size.width, this.canvas.height = this.i.size.height, this.l(this.i, {
            position: "relative"
        }), this.l(this.canvas, {
            "z-index": "20",
            position: "relative"
        }), window.addEventListener("resize", function () {
            return this.i.offsetWidth === this.i.size.width && this.i.offsetHeight === this.i.size.height ? !1 : (this.canvas.width = this.i.size.width = this.i.offsetWidth, this.canvas.height = this.i.size.height = this.i.offsetHeight, clearTimeout(this.m), void (this.m = setTimeout(function () {
                this.o = [];
                for (var a = 0; a < this.canvas.width * this.canvas.height / this.options.density; a++) {
                    this.o.push(new c(this));
                }this.options.interactive && this.o.push(this.p), requestAnimationFrame(this.update.bind(this));
            }.bind(this), 500)));
        }.bind(this)), this.o = [];
        for (var a = 0; a < this.canvas.width * this.canvas.height / this.options.density; a++) {
            this.o.push(new c(this));
        }this.options.interactive && (this.p = new c(this), this.p.velocity = {
            x: 0,
            y: 0
        }, this.o.push(this.p), this.canvas.addEventListener("mousemove", function (a) {
            this.p.x = a.clientX - this.canvas.offsetLeft, this.p.y = a.clientY - this.canvas.offsetTop;
        }.bind(this)), this.canvas.addEventListener("mouseup", function (a) {
            this.p.velocity = {
                x: (Math.random() - .5) * this.options.velocity,
                y: (Math.random() - .5) * this.options.velocity
            }, this.p = new c(this), this.p.velocity = {
                x: 0,
                y: 0
            }, this.o.push(this.p);
        }.bind(this))), requestAnimationFrame(this.update.bind(this));
    }, b.prototype.update = function () {
        this.g.clearRect(0, 0, this.canvas.width, this.canvas.height), this.g.globalAlpha = 1;
        for (var a = 0; a < this.o.length; a++) {
            this.o[a].update(), this.o[a].h();
            for (var b = this.o.length - 1; b > a; b--) {
                var c = Math.sqrt(Math.pow(this.o[a].x - this.o[b].x, 2) + Math.pow(this.o[a].y - this.o[b].y, 2));
                c > 120 || (this.g.beginPath(), this.g.strokeStyle = this.options.particleColor, this.g.globalAlpha = (120 - c) / 120, this.g.lineWidth = .7, this.g.moveTo(this.o[a].x, this.o[a].y), this.g.lineTo(this.o[b].x, this.o[b].y), this.g.stroke());
            }
        }
        0 !== this.options.velocity && requestAnimationFrame(this.update.bind(this));
    }, b.prototype.setVelocity = function (a) {
        return "fast" === a ? 1 : "slow" === a ? .33 : "none" === a ? 0 : .66;
    }, b.prototype.j = function (a) {
        return "high" === a ? 5e3 : "low" === a ? 2e4 : isNaN(parseInt(a, 10)) ? 1e4 : a;
    }, b.prototype.l = function (a, b) {
        for (var c in b) {
            a.style[c] = b[c];
        }
    }, b;
});

// Initialisation

var canvasDiv = document.getElementById('particles-js');
var options = {
    particleColor: '#888',
    // background: 'img/bg.jpg',
    interactive: true,
    speed: 'medium',
    density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);
$(function () {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeekIndex = new Date().getDay();
    var dayOfWeek = weekdays[dayOfWeekIndex];
    var dayOfWeekPastIndex = Math.floor(weekdays.length * Math.random());
    var dayOfWeekPast;
    var hourOfDay = new Date().getHours();
    var timeOfDay;
    // choose day of week other than current one
    if (dayOfWeekPastIndex == dayOfWeekIndex) {
        dayOfWeekPast = weekdays[(dayOfWeekPastIndex + 1) % weekdays.length];
    } else {
        dayOfWeekPast = weekdays[dayOfWeekPastIndex];
    }
    // assign time of day to the hour
    if (hourOfDay >= 4 && hourOfDay <= 11) {
        timeOfDay = "morning";
    } else if (hourOfDay >= 12 && hourOfDay <= 16) {
        timeOfDay = "afternoon";
    } else {
        timeOfDay = "evening";
    }
    // make conversation
    $(".typing").typed({
        strings: ["Hello! I'm Bao Nguyen.^2000 \nWeb Designer and Web Developer from Vietnam^2000 \nCame here on a " + dayOfWeekPast + " night once.^1000 \nIt was actually pretty crowded.^1000 \nBut on a " + dayOfWeek + " " + timeOfDay + " .^300 .^300 .^1000 \nI guess it's just you^1000 and me.^3000 \Hehe."],
        typeSpeed: 20,
        backDelay: 500,
        loop: false,
        loopCount: false
    });
});
//# sourceMappingURL=main-app.js.map
