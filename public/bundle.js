(()=>{var e={266:(e,t,r)=>{"use strict";function a(e,t){var r=figma.createFrame();return r.resize(e,t),r}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"NONE",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"CENTER",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"CENTER";e.layoutMode=t,e.primaryAxisAlignItems=r,e.counterAxisAlignItems=a,e.layoutAlign="STRETCH"}function o(e,t,r){switch(r){case"center":e.x=(t.width-e.width)/2,e.y=(t.height-e.height)/2;break;case"left":e.x=0;break;case"right":e.x=t.width-e.width}t.appendChild}r.r(t),r.d(t,{align:()=>o,createFrame:()=>a,createFrameWithAutoLayout:()=>i})}},t={};function r(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=r(266),t=e.createFrame,a=e.createFrameWithAutoLayout,i=e.align;figma.showUI(__html__,{width:420,height:840});var o={};figma.ui.onmessage=function(e){if("submit"===e.type)try{(r=e.data).forEach((function(e){if("createFrame"===e.action){var r=t(parseFloat(e.width)||0,parseFloat(e.height)||0);figma.currentPage.appendChild(r),o[e.id]=r}})),r.forEach((function(e){if("align"===e.action||"createFrameWithAutoLayout"===e.action){var t=o[e.id];if(!t)return;if("createFrameWithAutoLayout"===e.action&&a(t,e.layoutMode,e.primaryAxisAlignItems,e.counterAxisAlignItems),e.parentId){var r=o[e.parentId];r&&e.alignment&&i(t,r,e.alignment)}}}))}catch(e){console.error("Error processing commands:",e),figma.ui.postMessage({type:"error",text:"Error processing commands. Please check the format of your input."})}var r}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bkIwQyxFQUFRQyxRQUNWcEQsRUFBMEJTLEVBQVMwQyxFQUFRbEQsV0FBWWtELEVBQVE5QyxzQkFBdUI4QyxFQUFRN0MsdUJBRzVGNkMsRUFBUUssU0FBVSxDQUNwQixJQUFJOUMsRUFBU2lDLEVBQVdRLEVBQVFLLFVBQzVCOUMsR0FBVXlDLEVBQVF4QyxXQUNwQkgsRUFBTUMsRUFBU0MsRUFBUXlDLEVBQVF4QyxVQUVuQyxDQUNGLENBQ0YsR0FqQ0UsQ0FBRSxNQUFPOEMsR0FDUEMsUUFBUUQsTUFBTSw2QkFBOEJBLEdBQzVDM0QsTUFBTThDLEdBQUdlLFlBQVksQ0FBRVosS0FBTSxRQUFTYSxLQUFNLHFFQUM5QyxDQUlKLElBQXlCWixDQUZ6QixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvdXRpbHMvYXV0b0xheW91dFV0aWxzLmpzIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGVzdC1wbHVnaW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g0K3QutGB0L/QvtGA0YLQuNGA0YPQtdC8INGE0YPQvdC60YbQuNC4INC00LvRjyDRgNCw0LHQvtGC0Ysg0YEgYXV0byBsYXlvdXQg0LIgRmlnbWFcclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKHdpZHRoLCBoZWlnaHQpIHtcclxuICAvLyDQodC+0LfQtNCw0LXQvCDRhNGA0LXQudC8INC4INGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INC10LPQviDRgNCw0LfQvNC10YDRi1xyXG4gIGNvbnN0IGZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcclxuICBmcmFtZS5yZXNpemUod2lkdGgsIGhlaWdodCk7XHJcbiAgcmV0dXJuIGZyYW1lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWVXaXRoQXV0b0xheW91dChmcmFtZSwgbGF5b3V0TW9kZSA9ICdOT05FJywgcHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gJ0NFTlRFUicsIGNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9ICdDRU5URVInKSB7XHJcbiAgLy8g0J3QsNGB0YLRgNC+0LnQutCwINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC+0LPQviDQstGL0YDQsNCy0L3QuNCy0LDQvdC40Y8g0LTQu9GPINGE0YDQtdC50LzQsFxyXG4gIGZyYW1lLmxheW91dE1vZGUgPSBsYXlvdXRNb2RlO1xyXG4gIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IHByaW1hcnlBeGlzQWxpZ25JdGVtcztcclxuICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBjb3VudGVyQXhpc0FsaWduSXRlbXM7XHJcbiAgZnJhbWUubGF5b3V0QWxpZ24gPSAnU1RSRVRDSCc7IC8vINCS0YvRgtGP0LPQuNCy0LDQtdC8INGE0YDQtdC50LwsINGH0YLQvtCx0Ysg0L7QvSDQt9Cw0L3QuNC80LDQuyDQstGB0Y4g0LTQvtGB0YLRg9C/0L3Rg9GOINGI0LjRgNC40L3RgyDQsiDRgNC+0LTQuNGC0LXQu9C1XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGlnbihlbGVtZW50LCBwYXJlbnQsIGFsaWdubWVudCkge1xyXG4gIC8vINCS0YvRgNCw0LLQvdC40LLQsNC90LjQtSDRjdC70LXQvNC10L3RgtCwINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QviDQtdCz0L4g0YDQvtC00LjRgtC10LvRj1xyXG4gIHN3aXRjaCAoYWxpZ25tZW50KSB7XHJcbiAgICBjYXNlICdjZW50ZXInOlxyXG4gICAgICAvLyDQptC10L3RgtGA0LjRgNC+0LLQsNC90LjQtSDRjdC70LXQvNC10L3RgtCwINC/0L4g0L7QsdC10LjQvCDQvtGB0Y/QvFxyXG4gICAgICBlbGVtZW50LnggPSAocGFyZW50LndpZHRoIC0gZWxlbWVudC53aWR0aCkgLyAyO1xyXG4gICAgICBlbGVtZW50LnkgPSAocGFyZW50LmhlaWdodCAtIGVsZW1lbnQuaGVpZ2h0KSAvIDI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgIC8vINCS0YvRgNCw0LLQvdC40LLQsNC90LjQtSDRjdC70LXQvNC10L3RgtCwINC/0L4g0LvQtdCy0L7QvNGDINC60YDQsNGOINGA0L7QtNC40YLQtdC70Y9cclxuICAgICAgZWxlbWVudC54ID0gMDtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdyaWdodCc6XHJcbiAgICAgIC8vINCS0YvRgNCw0LLQvdC40LLQsNC90LjQtSDRjdC70LXQvNC10L3RgtCwINC/0L4g0L/RgNCw0LLQvtC80YMg0LrRgNCw0Y4g0YDQvtC00LjRgtC10LvRj1xyXG4gICAgICBlbGVtZW50LnggPSBwYXJlbnQud2lkdGggLSBlbGVtZW50LndpZHRoO1xyXG4gICAgICBicmVhaztcclxuICAgIC8vINCc0L7QttC90L4g0LTQvtCx0LDQstC40YLRjCDQtNC+0L/QvtC70L3QuNGC0LXQu9GM0L3Ri9C1INC60LXQudGB0Ysg0LLRi9GA0LDQstC90LjQstCw0L3QuNGPINC/0L4g0LzQtdGA0LUg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0LhcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0Y3Qu9C10LzQtdC90YIg0Log0LXQs9C+INGA0L7QtNC40YLQtdC70Y5cclxuICBwYXJlbnQuYXBwZW5kQ2hpbGRcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgeyBjcmVhdGVGcmFtZSwgY3JlYXRlRnJhbWVXaXRoQXV0b0xheW91dCwgYWxpZ24gfSA9IHJlcXVpcmUoJy4vdXRpbHMvYXV0b0xheW91dFV0aWxzJyk7XHJcblxyXG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDQyMCwgaGVpZ2h0OiA4NDAgfSk7XHJcblxyXG5sZXQgZnJhbWVPZmZzZXQgPSAwO1xyXG5sZXQgZnJhbWVzQnlJZCA9IHt9O1xyXG5cclxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcclxuICBpZiAobXNnLnR5cGUgPT09ICdzdWJtaXQnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb21tYW5kcyA9IG1zZy5kYXRhO1xyXG4gICAgICBwcm9jZXNzQ29tbWFuZHMoY29tbWFuZHMpO1xyXG4gICAgICBmcmFtZU9mZnNldCA9IDA7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcHJvY2Vzc2luZyBjb21tYW5kczpcIiwgZXJyb3IpO1xyXG4gICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGU6ICdlcnJvcicsIHRleHQ6ICdFcnJvciBwcm9jZXNzaW5nIGNvbW1hbmRzLiBQbGVhc2UgY2hlY2sgdGhlIGZvcm1hdCBvZiB5b3VyIGlucHV0LicgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0NvbW1hbmRzKGNvbW1hbmRzKSB7XHJcbiAgY29tbWFuZHMuZm9yRWFjaChjb21tYW5kID0+IHtcclxuICAgIGlmIChjb21tYW5kLmFjdGlvbiA9PT0gXCJjcmVhdGVGcmFtZVwiKSB7XHJcbiAgICAgIGxldCBlbGVtZW50ID0gY3JlYXRlRnJhbWUocGFyc2VGbG9hdChjb21tYW5kLndpZHRoKSB8fCAwLCBwYXJzZUZsb2F0KGNvbW1hbmQuaGVpZ2h0KSB8fCAwKTtcclxuICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgIGZyYW1lT2Zmc2V0Kys7XHJcbiAgICAgIGZyYW1lc0J5SWRbY29tbWFuZC5pZF0gPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb21tYW5kcy5mb3JFYWNoKGNvbW1hbmQgPT4ge1xyXG4gICAgaWYgKGNvbW1hbmQuYWN0aW9uID09PSBcImFsaWduXCIgfHwgY29tbWFuZC5hY3Rpb24gPT09IFwiY3JlYXRlRnJhbWVXaXRoQXV0b0xheW91dFwiKSB7XHJcbiAgICAgIGxldCBlbGVtZW50ID0gZnJhbWVzQnlJZFtjb21tYW5kLmlkXTtcclxuICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcbiAgICAgIFxyXG4gICAgICBpZiAoY29tbWFuZC5hY3Rpb24gPT09IFwiY3JlYXRlRnJhbWVXaXRoQXV0b0xheW91dFwiKSB7XHJcbiAgICAgICAgY3JlYXRlRnJhbWVXaXRoQXV0b0xheW91dChlbGVtZW50LCBjb21tYW5kLmxheW91dE1vZGUsIGNvbW1hbmQucHJpbWFyeUF4aXNBbGlnbkl0ZW1zLCBjb21tYW5kLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGlmIChjb21tYW5kLnBhcmVudElkKSB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGZyYW1lc0J5SWRbY29tbWFuZC5wYXJlbnRJZF07XHJcbiAgICAgICAgaWYgKHBhcmVudCAmJiBjb21tYW5kLmFsaWdubWVudCkge1xyXG4gICAgICAgICAgYWxpZ24oZWxlbWVudCwgcGFyZW50LCBjb21tYW5kLmFsaWdubWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUZyYW1lIiwid2lkdGgiLCJoZWlnaHQiLCJmcmFtZSIsImZpZ21hIiwicmVzaXplIiwiY3JlYXRlRnJhbWVXaXRoQXV0b0xheW91dCIsImxheW91dE1vZGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJwcmltYXJ5QXhpc0FsaWduSXRlbXMiLCJjb3VudGVyQXhpc0FsaWduSXRlbXMiLCJsYXlvdXRBbGlnbiIsImFsaWduIiwiZWxlbWVudCIsInBhcmVudCIsImFsaWdubWVudCIsIngiLCJ5IiwiYXBwZW5kQ2hpbGQiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJleHBvcnRzIiwibW9kdWxlIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImQiLCJkZWZpbml0aW9uIiwia2V5IiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsIm9iaiIsInByb3AiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsIl9yZXF1aXJlIiwicmVxdWlyZSIsInNob3dVSSIsIl9faHRtbF9fIiwiZnJhbWVzQnlJZCIsInVpIiwib25tZXNzYWdlIiwibXNnIiwidHlwZSIsImNvbW1hbmRzIiwiZGF0YSIsImZvckVhY2giLCJjb21tYW5kIiwiYWN0aW9uIiwicGFyc2VGbG9hdCIsImN1cnJlbnRQYWdlIiwiaWQiLCJwYXJlbnRJZCIsImVycm9yIiwiY29uc29sZSIsInBvc3RNZXNzYWdlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=