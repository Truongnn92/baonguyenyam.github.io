/*
 ////////////////////////////////////////////////////////
 // Bao Nguyen Apps
 // @version v1.0
 // @link https://baonguyenyam.github.io
 // @license MIT
 // @Coding by Bao Nguyen - 0969689893 - 0933112900
 // @baonguyenyam@gmail.com
 ////////////////////////////////////////////////////////
*//*
 ////////////////////////////////////////////////////////
 // Bao Nguyen Apps
 // @version v1.0
 // @link https://baonguyenyam.github.io
 // @license MIT
 // @Coding by Bao Nguyen - 0969689893 - 0933112900
 // @baonguyenyam@gmail.com
 ////////////////////////////////////////////////////////
*/var saveAs=saveAs||function(e){"use strict";if(!(void 0===e||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var t=function(){return e.URL||e.webkitURL||e},n=e.document.createElementNS("http://www.w3.org/1999/xhtml","a"),o="download"in n,r=function(e){var t=new MouseEvent("click");e.dispatchEvent(t)},a=/constructor/i.test(e.HTMLElement)||e.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent),d=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},f=function(e){setTimeout(function(){"string"==typeof e?t().revokeObjectURL(e):e.remove()},4e4)},s=function(e,t,n){for(var o=(t=[].concat(t)).length;o--;){var r=e["on"+t[o]];if("function"==typeof r)try{r.call(e,n||e)}catch(e){d(e)}}},u=function(e){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob([String.fromCharCode(65279),e],{type:e.type}):e},c=function(d,c,l){l||(d=u(d));var p,v=this,w="application/octet-stream"===d.type,m=function(){s(v,"writestart progress write writeend".split(" "))};if(v.readyState=v.INIT,o)return p=t().createObjectURL(d),void setTimeout(function(){n.href=p,n.download=c,r(n),m(),f(p),v.readyState=v.DONE});!function(){if((i||w&&a)&&e.FileReader){var n=new FileReader;return n.onloadend=function(){var t=i?n.result:n.result.replace(/^data:[^;]*;/,"data:attachment/file;");e.open(t,"_blank")||(e.location.href=t),t=void 0,v.readyState=v.DONE,m()},n.readAsDataURL(d),void(v.readyState=v.INIT)}p||(p=t().createObjectURL(d)),w?e.location.href=p:e.open(p,"_blank")||(e.location.href=p),v.readyState=v.DONE,m(),f(p)}()},l=c.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(e,t,n){return t=t||e.name||"download",n||(e=u(e)),navigator.msSaveOrOpenBlob(e,t)}:(l.abort=function(){},l.readyState=l.INIT=0,l.WRITING=1,l.DONE=2,l.error=l.onwritestart=l.onprogress=l.onwrite=l.onabort=l.onerror=l.onwriteend=null,function(e,t,n){return new c(e,t||e.name||"download",n)})}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!==define.amd&&define("FileSaver.js",function(){return saveAs});