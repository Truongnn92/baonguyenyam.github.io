'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var BNLOGO = '';
var BNICON = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="174px" height="104.5px" viewBox="0 0 174 104.5" enable-background="new 0 0 174 104.5" xml:space="preserve"><path fill="#795E9D" d="M14,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V6c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M56.667,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V46c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M6,96c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H6z"/><path fill="#795E9D" d="M6,56c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H6z"/><path fill="#795E9D" d="M122.667,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V46c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M82,98c0,2.209-1.791,4-4,4l0,0c-2.209,0-4-1.791-4-4V46c0-2.209,1.791-4,4-4l0,0c2.209,0,4,1.791,4,4V98z"/><path fill="#795E9D" d="M114.667,96c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H114.667z"/><path fill="#795E9D" d="M72,56c-2.209,0-4-1.791-4-4l0,0c0-2.209,1.791-4,4-4h52c2.209,0,4,1.791,4,4l0,0c0,2.209-1.791,4-4,4H72z"/></svg>';
var BNQR = '<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect shape-rendering="optimizeSpeed" x="0" y="0" width="200" height="200" fill="white"/><rect shape-rendering="optimizeSpeed" x="13" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="13" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="19" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="25" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="31" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="37" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="43" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="49" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="55" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="55" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="55" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="61" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="67" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="73" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="79" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="85" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="91" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="97" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="103" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="109" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="115" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="121" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="127" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="55" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="133" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="169" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="139" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="145" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="151" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="157" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="121" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="181" y="163" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="91" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="103" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="157" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="169" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="97" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="109" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="127" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="133" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="145" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="163" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="175" y="175" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="13" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="19" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="25" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="31" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="37" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="43" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="49" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="61" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="67" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="73" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="79" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="85" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="115" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="139" y="181" width="6" height="6" fill="black"/><rect shape-rendering="optimizeSpeed" x="151" y="181" width="6" height="6" fill="black"/></svg>';
var BNSIGN = '<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="174px" height="104.5px" viewBox="0 0 174 104.5" enable-background="new 0 0 174 104.5" xml:space="preserve"><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M2,101.944c0,0,31.333-16,32-55.667s0-13,0-13s-3,34-2,66.333c0,0-13.904-59.727-3.333-78.667c15.239-27.302,33.803,8.589,13.362,36.4c-1.021,1.39-5.235,5.185-7.922,6.215c-1.947,0.746-9.036,2.394-6.719,1.718c7.954-2.32,21.28-11.45,29.613-32.45s4-30.045,2.667-22.689c-1.333,7.356-3.333,35.59-0.667,47.531s0.667-5.842,0.667-13.842c0-8.307,0.637-18.651,1.667-7.667c1,10.667,1.667,15,1.667,1.333s0.333-12.216,0.5-5.883c0.123,4.677,4,12.667,4.667,7.667c0.667-5,3.056,1.773,3.167-5.117c0.167-10.383,3,8.333,2.333-1C73,23.827,74.167,14.444,75,4.827c0.738-8.512-5.977,26.481,1,31.333c4.481,3.117,6.001-2.076,6.001-12.41S77.436,24.191,80,28.16s12.667-2.667,47.333-10.333S158,14.493,158,14.493"/><path fill="none" stroke="#000000" stroke-miterlimit="10" d="M48.979,76.957c0,0,63.333-44.784,123-53.117"/></svg>';

// READY ////////////////////////////////////////////
$(document).ready(function () {

    // Welcome title App
    console.log('%cBAONGUYEN', 'font-size:50px;color:#fff;text-shadow:0 1px 0#ccc,0 2px 0 #c9c9c9 ,0 3px 0 #bbb ,0 4px 0 #b9b9b9 ,0 5px 0 #aaa ,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);');
    console.log('%c BN APP ' + '%c - Mobile: 0.96.96.89.89.3 ', 'border-radius: 2px; padding: 3px; background: #795d9c; color: #FFF', 'color: #795d9c');

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
!function () {
    var q = null;window.PR_SHOULD_USE_CONTINUATION = !0;
    (function () {
        function S(a) {
            function d(e) {
                var b = e.charCodeAt(0);if (b !== 92) return b;var a = e.charAt(1);return (b = r[a]) ? b : "0" <= a && a <= "7" ? parseInt(e.substring(1), 8) : a === "u" || a === "x" ? parseInt(e.substring(2), 16) : e.charCodeAt(1);
            }function g(e) {
                if (e < 32) return (e < 16 ? "\\x0" : "\\x") + e.toString(16);e = String.fromCharCode(e);return e === "\\" || e === "-" || e === "]" || e === "^" ? "\\" + e : e;
            }function b(e) {
                var b = e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),
                    e = [],
                    a = b[0] === "^",
                    c = ["["];a && c.push("^");for (var a = a ? 1 : 0, f = b.length; a < f; ++a) {
                    var h = b[a];if (/\\[bdsw]/i.test(h)) c.push(h);else {
                        var h = d(h),
                            l;a + 2 < f && "-" === b[a + 1] ? (l = d(b[a + 2]), a += 2) : l = h;e.push([h, l]);l < 65 || h > 122 || (l < 65 || h > 90 || e.push([Math.max(65, h) | 32, Math.min(l, 90) | 32]), l < 97 || h > 122 || e.push([Math.max(97, h) & -33, Math.min(l, 122) & -33]));
                    }
                }e.sort(function (e, a) {
                    return e[0] - a[0] || a[1] - e[1];
                });b = [];f = [];for (a = 0; a < e.length; ++a) {
                    h = e[a], h[0] <= f[1] + 1 ? f[1] = Math.max(f[1], h[1]) : b.push(f = h);
                }for (a = 0; a < b.length; ++a) {
                    h = b[a], c.push(g(h[0])), h[1] > h[0] && (h[1] + 1 > h[0] && c.push("-"), c.push(g(h[1])));
                }c.push("]");return c.join("");
            }function s(e) {
                for (var a = e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), c = a.length, d = [], f = 0, h = 0; f < c; ++f) {
                    var l = a[f];l === "(" ? ++h : "\\" === l.charAt(0) && (l = +l.substring(1)) && (l <= h ? d[l] = -1 : a[f] = g(l));
                }for (f = 1; f < d.length; ++f) {
                    -1 === d[f] && (d[f] = ++x);
                }for (h = f = 0; f < c; ++f) {
                    l = a[f], l === "(" ? (++h, d[h] || (a[f] = "(?:")) : "\\" === l.charAt(0) && (l = +l.substring(1)) && l <= h && (a[f] = "\\" + d[l]);
                }for (f = 0; f < c; ++f) {
                    "^" === a[f] && "^" !== a[f + 1] && (a[f] = "");
                }if (e.ignoreCase && m) for (f = 0; f < c; ++f) {
                    l = a[f], e = l.charAt(0), l.length >= 2 && e === "[" ? a[f] = b(l) : e !== "\\" && (a[f] = l.replace(/[A-Za-z]/g, function (a) {
                        a = a.charCodeAt(0);return "[" + String.fromCharCode(a & -33, a | 32) + "]";
                    }));
                }return a.join("");
            }for (var x = 0, m = !1, j = !1, k = 0, c = a.length; k < c; ++k) {
                var i = a[k];if (i.ignoreCase) j = !0;else if (/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                    m = !0;j = !1;break;
                }
            }for (var r = { b: 8, t: 9, n: 10, v: 11,
                f: 12, r: 13 }, n = [], k = 0, c = a.length; k < c; ++k) {
                i = a[k];if (i.global || i.multiline) throw Error("" + i);n.push("(?:" + s(i) + ")");
            }return RegExp(n.join("|"), j ? "gi" : "g");
        }function T(a, d) {
            function g(a) {
                var c = a.nodeType;if (c == 1) {
                    if (!b.test(a.className)) {
                        for (c = a.firstChild; c; c = c.nextSibling) {
                            g(c);
                        }c = a.nodeName.toLowerCase();if ("br" === c || "li" === c) s[j] = "\n", m[j << 1] = x++, m[j++ << 1 | 1] = a;
                    }
                } else if (c == 3 || c == 4) c = a.nodeValue, c.length && (c = d ? c.replace(/\r\n?/g, "\n") : c.replace(/[\t\n\r ]+/g, " "), s[j] = c, m[j << 1] = x, x += c.length, m[j++ << 1 | 1] = a);
            }var b = /(?:^|\s)nocode(?:\s|$)/,
                s = [],
                x = 0,
                m = [],
                j = 0;g(a);return { a: s.join("").replace(/\n$/, ""), d: m };
        }function H(a, d, g, b) {
            d && (a = { a: d, e: a }, g(a), b.push.apply(b, a.g));
        }function U(a) {
            for (var d = void 0, g = a.firstChild; g; g = g.nextSibling) {
                var b = g.nodeType,
                    d = b === 1 ? d ? a : g : b === 3 ? V.test(g.nodeValue) ? a : d : d;
            }return d === a ? void 0 : d;
        }function C(a, d) {
            function g(a) {
                for (var j = a.e, k = [j, "pln"], c = 0, i = a.a.match(s) || [], r = {}, n = 0, e = i.length; n < e; ++n) {
                    var z = i[n],
                        w = r[z],
                        t = void 0,
                        f;if (typeof w === "string") f = !1;else {
                        var h = b[z.charAt(0)];
                        if (h) t = z.match(h[1]), w = h[0];else {
                            for (f = 0; f < x; ++f) {
                                if (h = d[f], t = z.match(h[1])) {
                                    w = h[0];break;
                                }
                            }t || (w = "pln");
                        }if ((f = w.length >= 5 && "lang-" === w.substring(0, 5)) && !(t && typeof t[1] === "string")) f = !1, w = "src";f || (r[z] = w);
                    }h = c;c += z.length;if (f) {
                        f = t[1];var l = z.indexOf(f),
                            B = l + f.length;t[2] && (B = z.length - t[2].length, l = B - f.length);w = w.substring(5);H(j + h, z.substring(0, l), g, k);H(j + h + l, f, I(w, f), k);H(j + h + B, z.substring(B), g, k);
                    } else k.push(j + h, w);
                }a.g = k;
            }var b = {},
                s;(function () {
                for (var g = a.concat(d), j = [], k = {}, c = 0, i = g.length; c < i; ++c) {
                    var r = g[c],
                        n = r[3];if (n) for (var e = n.length; --e >= 0;) {
                        b[n.charAt(e)] = r;
                    }r = r[1];n = "" + r;k.hasOwnProperty(n) || (j.push(r), k[n] = q);
                }j.push(/[\S\s]/);s = S(j);
            })();var x = d.length;return g;
        }function v(a) {
            var d = [],
                g = [];a.tripleQuotedStrings ? d.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : a.multiLineStrings ? d.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : d.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]);a.verbatimStrings && g.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);var b = a.hashComments;b && (a.cStyleComments ? (b > 1 ? d.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : d.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), g.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, q])) : d.push(["com", /^#[^\n\r]*/, q, "#"]));a.cStyleComments && (g.push(["com", /^\/\/[^\n\r]*/, q]), g.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q]));if (b = a.regexLiterals) {
                var s = (b = b > 1 ? "" : "\n\r") ? "." : "[\\S\\s]";g.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + b + "])(?:[^/\\x5B\\x5C" + b + "]|\\x5C" + s + "|\\x5B(?:[^\\x5C\\x5D" + b + "]|\\x5C" + s + ")*(?:\\x5D|$))+/") + ")")]);
            }(b = a.types) && g.push(["typ", b]);b = ("" + a.keywords).replace(/^ | $/g, "");b.length && g.push(["kwd", RegExp("^(?:" + b.replace(/[\s,]+/g, "|") + ")\\b"), q]);d.push(["pln", /^\s+/, q, ' \r\n\t ']);b = "^.[^\\s\\w.$@'\"`/\\\\]*";a.regexLiterals && (b += "(?!s*/)");g.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", RegExp(b), q]);return C(d, g);
        }function J(a, d, g) {
            function b(a) {
                var c = a.nodeType;if (c == 1 && !x.test(a.className)) {
                    if ("br" === a.nodeName) s(a), a.parentNode && a.parentNode.removeChild(a);else for (a = a.firstChild; a; a = a.nextSibling) {
                        b(a);
                    }
                } else if ((c == 3 || c == 4) && g) {
                    var d = a.nodeValue,
                        i = d.match(m);if (i) c = d.substring(0, i.index), a.nodeValue = c, (d = d.substring(i.index + i[0].length)) && a.parentNode.insertBefore(j.createTextNode(d), a.nextSibling), s(a), c || a.parentNode.removeChild(a);
                }
            }function s(a) {
                function b(a, c) {
                    var d = c ? a.cloneNode(!1) : a,
                        e = a.parentNode;if (e) {
                        var e = b(e, 1),
                            g = a.nextSibling;e.appendChild(d);for (var i = g; i; i = g) {
                            g = i.nextSibling, e.appendChild(i);
                        }
                    }return d;
                }for (; !a.nextSibling;) {
                    if (a = a.parentNode, !a) return;
                }for (var a = b(a.nextSibling, 0), d; (d = a.parentNode) && d.nodeType === 1;) {
                    a = d;
                }c.push(a);
            }for (var x = /(?:^|\s)nocode(?:\s|$)/, m = /\r\n?|\n/, j = a.ownerDocument, k = j.createElement("li"); a.firstChild;) {
                k.appendChild(a.firstChild);
            }for (var c = [k], i = 0; i < c.length; ++i) {
                b(c[i]);
            }d === (d | 0) && c[0].setAttribute("value", d);var r = j.createElement("ol");
            r.className = "linenums";for (var d = Math.max(0, d - 1 | 0) || 0, i = 0, n = c.length; i < n; ++i) {
                k = c[i], k.className = "L" + (i + d) % 10, k.firstChild || k.appendChild(j.createTextNode(' ')), r.appendChild(k);
            }a.appendChild(r);
        }function p(a, d) {
            for (var g = d.length; --g >= 0;) {
                var b = d[g];F.hasOwnProperty(b) ? D.console && console.warn("cannot override language handler %s", b) : F[b] = a;
            }
        }function I(a, d) {
            if (!a || !F.hasOwnProperty(a)) a = /^\s*</.test(d) ? "default-markup" : "default-code";return F[a];
        }function K(a) {
            var d = a.h;try {
                var g = T(a.c, a.i),
                    b = g.a;
                a.a = b;a.d = g.d;a.e = 0;I(d, b)(a);var s = /\bMSIE\s(\d+)/.exec(navigator.userAgent),
                    s = s && +s[1] <= 8,
                    d = /\n/g,
                    x = a.a,
                    m = x.length,
                    g = 0,
                    j = a.d,
                    k = j.length,
                    b = 0,
                    c = a.g,
                    i = c.length,
                    r = 0;c[i] = m;var n, e;for (e = n = 0; e < i;) {
                    c[e] !== c[e + 2] ? (c[n++] = c[e++], c[n++] = c[e++]) : e += 2;
                }i = n;for (e = n = 0; e < i;) {
                    for (var p = c[e], w = c[e + 1], t = e + 2; t + 2 <= i && c[t + 1] === w;) {
                        t += 2;
                    }c[n++] = p;c[n++] = w;e = t;
                }c.length = n;var f = a.c,
                    h;if (f) h = f.style.display, f.style.display = "none";try {
                    for (; b < k;) {
                        var l = j[b + 2] || m,
                            B = c[r + 2] || m,
                            t = Math.min(l, B),
                            A = j[b + 1],
                            G;if (A.nodeType !== 1 && (G = x.substring(g, t))) {
                            s && (G = G.replace(d, "\r"));A.nodeValue = G;var L = A.ownerDocument,
                                o = L.createElement("span");o.className = c[r + 1];var v = A.parentNode;v.replaceChild(o, A);o.appendChild(A);g < l && (j[b + 1] = A = L.createTextNode(x.substring(t, l)), v.insertBefore(A, o.nextSibling));
                        }g = t;g >= l && (b += 2);g >= B && (r += 2);
                    }
                } finally {
                    if (f) f.style.display = h;
                }
            } catch (u) {
                D.console && console.log(u && u.stack || u);
            }
        }var D = window,
            y = ["break,continue,do,else,for,if,return,while"],
            E = [[y, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],
            M = [E, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
            N = [E, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],
            O = [N, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],
            E = [E, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
            P = [y, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
            Q = [y, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
            W = [y, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],
            y = [y, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
            R = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,
            V = /\S/,
            X = v({ keywords: [M, O, E, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", P, Q, y], hashComments: !0, cStyleComments: !0, multiLineStrings: !0, regexLiterals: !0 }),
            F = {};p(X, ["default-code"]);p(C([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]);p(C([["pln", /^\s+/, q, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]);p(C([], [["atv", /^[\S\s]+/]]), ["uq.val"]);p(v({ keywords: M, hashComments: !0, cStyleComments: !0, types: R }), ["c", "cc", "cpp", "cxx", "cyc", "m"]);p(v({ keywords: "null,true,false" }), ["json"]);p(v({ keywords: O, hashComments: !0, cStyleComments: !0, verbatimStrings: !0, types: R }), ["cs"]);p(v({ keywords: N, cStyleComments: !0 }), ["java"]);p(v({ keywords: y, hashComments: !0, multiLineStrings: !0 }), ["bash", "bsh", "csh", "sh"]);p(v({ keywords: P, hashComments: !0, multiLineStrings: !0, tripleQuotedStrings: !0 }), ["cv", "py", "python"]);p(v({ keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", hashComments: !0, multiLineStrings: !0, regexLiterals: 2 }), ["perl", "pl", "pm"]);p(v({ keywords: Q,
            hashComments: !0, multiLineStrings: !0, regexLiterals: !0 }), ["rb", "ruby"]);p(v({ keywords: E, cStyleComments: !0, regexLiterals: !0 }), ["javascript", "js"]);p(v({ keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", hashComments: 3, cStyleComments: !0, multilineStrings: !0, tripleQuotedStrings: !0, regexLiterals: !0 }), ["coffee"]);p(v({ keywords: W, cStyleComments: !0, multilineStrings: !0 }), ["rc", "rs", "rust"]);
        p(C([], [["str", /^[\S\s]+/]]), ["regex"]);var Y = D.PR = { createSimpleLexer: C, registerLangHandler: p, sourceDecorator: v, PR_ATTRIB_NAME: "atn", PR_ATTRIB_VALUE: "atv", PR_COMMENT: "com", PR_DECLARATION: "dec", PR_KEYWORD: "kwd", PR_LITERAL: "lit", PR_NOCODE: "nocode", PR_PLAIN: "pln", PR_PUNCTUATION: "pun", PR_SOURCE: "src", PR_STRING: "str", PR_TAG: "tag", PR_TYPE: "typ", prettyPrintOne: D.prettyPrintOne = function (a, d, g) {
                var b = document.createElement("div");b.innerHTML = "<pre>" + a + "</pre>";b = b.firstChild;g && J(b, g, !0);K({ h: d, j: g, c: b, i: 1 });
                return b.innerHTML;
            }, prettyPrint: D.prettyPrint = function (a, d) {
                function g() {
                    for (var b = D.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : Infinity; i < p.length && c.now() < b; i++) {
                        for (var d = p[i], j = h, k = d; k = k.previousSibling;) {
                            var m = k.nodeType,
                                o = (m === 7 || m === 8) && k.nodeValue;if (o ? !/^\??prettify\b/.test(o) : m !== 3 || /\S/.test(k.nodeValue)) break;if (o) {
                                j = {};o.replace(/\b(\w+)=([\w%+\-.:]+)/g, function (a, b, c) {
                                    j[b] = c;
                                });break;
                            }
                        }k = d.className;if ((j !== h || e.test(k)) && !v.test(k)) {
                            m = !1;for (o = d.parentNode; o; o = o.parentNode) {
                                if (f.test(o.tagName) && o.className && e.test(o.className)) {
                                    m = !0;break;
                                }
                            }if (!m) {
                                d.className += " prettyprinted";m = j.lang;if (!m) {
                                    var m = k.match(n),
                                        y;if (!m && (y = U(d)) && t.test(y.tagName)) m = y.className.match(n);m && (m = m[1]);
                                }if (w.test(d.tagName)) o = 1;else var o = d.currentStyle,
                                    u = s.defaultView,
                                    o = (o = o ? o.whiteSpace : u && u.getComputedStyle ? u.getComputedStyle(d, q).getPropertyValue("white-space") : 0) && "pre" === o.substring(0, 3);u = j.linenums;if (!(u = u === "true" || +u)) u = (u = k.match(/\blinenums\b(?::(\d+))?/)) ? u[1] && u[1].length ? +u[1] : !0 : !1;u && J(d, u, o);r = { h: m, c: d, j: u, i: o };K(r);
                            }
                        }
                    }i < p.length ? setTimeout(g, 250) : "function" === typeof a && a();
                }for (var b = d || document.body, s = b.ownerDocument || document, b = [b.getElementsByTagName("pre"), b.getElementsByTagName("code"), b.getElementsByTagName("xmp")], p = [], m = 0; m < b.length; ++m) {
                    for (var j = 0, k = b[m].length; j < k; ++j) {
                        p.push(b[m][j]);
                    }
                }var b = q,
                    c = Date;c.now || (c = { now: function now() {
                        return +new Date();
                    } });var i = 0,
                    r,
                    n = /\blang(?:uage)?-([\w.]+)(?!\S)/,
                    e = /\bprettyprint\b/,
                    v = /\bprettyprinted\b/,
                    w = /pre|xmp/i,
                    t = /^code$/i,
                    f = /^(?:pre|code|xmp)$/i,
                    h = {};g();
            } };typeof define === "function" && define.amd && define("google-code-prettify", [], function () {
            return Y;
        });
    })();
}();

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
// var owl = $('.owl-carousel');
// owl.on('initialized.owl.carousel', function(event) {
// })

$(document).ready(function () {
    $(".info-page header, .gallery-page header, .coding-page header").addClass('active');
    $('.scrollbar-dynamic, .scrollbar-inner').perfectScrollbar();
});

$(document).on('ps-y-reach-start', function () {
    $(".info-page header, .gallery-page header, .coding-page header").addClass('active');
});
$(document).on('ps-scroll-down', function () {
    $(".info-page header, .gallery-page header, .coding-page header").removeClass('active');
});

$(function () {

    $('[data-typing]').each(function () {
        var dttyping = $(this).attr('data-typing');
        $(this).typed({
            strings: [dttyping],
            typeSpeed: 0
        });
    });
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
if ($('#particles-js').length) {
    var canvasDiv = document.getElementById('particles-js');
    var options = {
        particleColor: '#888',
        // background: 'img/bg.jpg',
        interactive: true,
        speed: 'medium',
        density: 'high'
    };
    var particleCanvas = new ParticleNetwork(canvasDiv, options);
}
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

// var editor = ace.edit("editor");
//    editor.setTheme("ace/theme/monokai");
//    editor.getSession().setMode("ace/mode/javascript");
//    document.getElementById('editor').style.fontSize='16px';

var app = app || {};

app.sublime = function () {

    var activeClass = "active",
        $sublime = $(".sublime"),
        $tabs = $(".sublime-tabs__tab"),
        $links = $(".sublime-tabs__link"),
        $projects = $(".sublime-project"),
        $footer = $(".sublime__footer"),
        $title = $(".sublime__title"),
        titleText = $title.text(),
        $maxi = $(".js-sublime-maximise"),
        $togg = $(".js-sublime-toggle"),
        $mini = $(".js-sublime-minimise");

    $maxi.add($togg).on("click", function () {

        $sublime.css({
            "-webkit-transition-duration": "0",
            "-moz-transition-duration": "0",
            "-ms-transition-duration": "0",
            "transition-duration": "0",
            "opacity": "0",
            "left": "10em",
            "right": "10em",
            "top": "10em",
            "bottom": "10em"
        });

        $sublime.toggleClass("sublime--fullscreen");

        setTimeout(function () {
            $sublime.css({
                "-webkit-transition-duration": "",
                "-moz-transition-duration": "",
                "-ms-transition-duration": "",
                "transition-duration": "",
                "opacity": "",
                "left": "",
                "right": "",
                "top": "",
                "bottom": ""
            });
        }, 10);
    });

    $mini.on("click", function () {

        $sublime.removeClass("sublime--fullscreen");
    });

    $(window).on("sublimetab", function (e, href) {
        console.log(href);

        var $link = $links.filter("[href=" + href.replace("/", "\\/") + "]"),
            $tab = $link.closest(".sublime-tabs__tab");

        $tab.trigger("activateTab", href);
    });

    $tabs.on("activateTab", function (e, href) {

        href = href.split("/");

        var $tab = $(this),
            $project = $projects.filter("[data-project-name=" + href[href.length - 1] + "]");

        // reverse the z-order
        $tabs.each(function (k, v) {
            $(v).css("z-index", $tabs.length - k);
        }).removeClass(activeClass);

        $tab.addClass(activeClass).css("z-index", $tabs.length + 1);

        $projects.removeClass(activeClass);

        $project.addClass(activeClass);

        $title.text($tab.children(".sublime-tabs__link").text() + " - " + titleText);

        $footer.text($tab.children(".sublime-tabs__link").data("type"));
    });

    $tabs.first().trigger("activateTab", $links.first().attr("href"));

    $tabs.on("click", function (e) {
        if ($(this).find(".sublime-tabs__link").attr("href") !== "#") {
            $(window).trigger("sublimetab", $(this).find(".sublime-tabs__link").attr("href"));
        }
    });
};

app.prettify = function () {
    window.prettyPrint();
};

app.perfectScrollbar2 = function () {
    $('ol.linenums').addClass('scrollbar-dynamic');
    $('.scrollbar-dynamic, .scrollbar-inner').perfectScrollbar();
};

app.sublime();
app.prettify();
app.perfectScrollbar2();
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

    // make conversation
    $(".text-replace").typed({
        strings: ["<span class='main'>print</span><span class='text3'>('Hello, I am Bao Nguyen!')</span> ^500 <br><span class='main'>learnAbout</span><span class='text3'>('Js,Sass,Jade,TypeScript,Ps,Ai')</span> ^500 <br><span class='include'>let</span> sessions <span class='text3'>=</span> <span class='main2'>100</span> ^500 <br><span class='include'>let</span> skillsEngineers <span class='text3'>=</span> <span class='main2'>'90%'</span> ^500 <br><span class='include'>let</span> labs <span class='text3'>=</span> <span class='text2'>handsOn</span> ^500 <br><span class='include'>let</span> scholarships <span class='text3'>=</span> <span class='text2'>available</span> ^500 <br><span class='include'>let</span> date <span class='text3'>=</span> <span class='main'>'Aug 16-08-83'</span> ^500 <br><span class='include'>let</span> location <span class='text3'>=</span> <span class='text2'>\"GoCong - Tien Giang\"</span> ^500 <br><span class='include'>let</span> Companies <span class='text3'>></span> <span class='text2'>6</span><br><br><a href='about.html'>readMore();</a><br>..."],
        typeSpeed: 20,
        backDelay: 500,
        loop: false,
        contentType: 'html',
        loopCount: false
    });
});
//# sourceMappingURL=main-app.js.map
