(()=>{var e={732:()=>{}},i={};function t(a){var r=i[a];if(void 0!==r)return r.exports;var n=i[a]={exports:{}};return e[a](n,n.exports,t),n.exports}(()=>{"use strict";var e=t(732),i={},a=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;i[e]=t,a&&i[a]?i[a].appendChild(t):figma.currentPage.appendChild(t)};figma.showUI(__html__,{width:420,height:840}),figma.ui.onmessage=function(t){if("submit"===t.type)try{t.data.forEach((function(t){var r,n;switch(t.action){case"createFrame":(r=figma.createFrame()).resize(parseFloat(t.width),parseFloat(t.height)),a(t.id,r,t.parentId);break;case"createRectangle":r=(0,e.createRectangle)(parseFloat(t.width),parseFloat(t.height)),a(t.id,r);break;case"applyAutoLayout":n=t.id,function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"NONE",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"CENTER",a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"CENTER",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"AUTO",n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"AUTO";switch(e.layoutMode=i,e.primaryAxisSizingMode=r,e.counterAxisSizingMode=n,e.layoutAlign="STRETCH",i){case"HORIZONTAL":e.primaryAxisAlignItems=t,e.counterAxisAlignItems=a,e.itemSpacing=10;break;case"VERTICAL":e.primaryAxisAlignItems=a,e.counterAxisAlignItems=t,e.itemSpacing=10}}(r=i[n],t.layoutMode,t.alignX,t.alignY,t.primaryAxisSizingMode,t.counterAxisSizingMode);break;case"globalAlign":!function(e,t,a,r){var n=i[e],o=i[t];if(n&&o){switch(a){case"Align Left":n.x=o.x;break;case"Align horizontal centers":n.x=o.x+(o.width-n.width)/2;break;case"Align right":n.x=o.x+o.width-n.width}switch(r){case"Align top":n.y=o.y;break;case"Align vertical centers":n.y=o.y+(o.height-n.height)/2;break;case"Align bottom":n.y=o.y+o.height-n.height}}}(t.childId,t.parentId,t.horizontalAlign,t.verticalAlign)}}))}catch(e){console.error("Error processing commands:",e),figma.ui.postMessage({type:"error",text:"Error processing commands. Please check the format of your input."})}}})()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FDSDRCLEVBQU1FLEVBQUlELEVBQU9DLEVBQUlELEVBQU83QixNQUFRNEIsRUFBTTVCLE1BRzlDLE9BQVEyQixHQUNOLElBQUssWUFDSEMsRUFBTUcsRUFBSUYsRUFBT0UsRUFDakIsTUFDRixJQUFLLHlCQUNISCxFQUFNRyxFQUFJRixFQUFPRSxHQUFLRixFQUFPNUIsT0FBUzJCLEVBQU0zQixRQUFVLEVBQ3RELE1BQ0YsSUFBSyxlQUNIMkIsRUFBTUcsRUFBSUYsRUFBT0UsRUFBSUYsRUFBTzVCLE9BQVMyQixFQUFNM0IsT0FHakQsQ0FDRixDQ0pRK0IsQ0FBV3hCLEVBQVFpQixRQUFTakIsRUFBUWhCLFNBQVVnQixFQUFRa0IsZ0JBQWlCbEIsRUFBUW1CLGVBR3JGLEdBNUJFLENBQUUsTUFBT00sR0FDUEMsUUFBUUQsTUFBTSw2QkFBOEJBLEdBQzVDckMsTUFBTU0sR0FBR2lDLFlBQVksQ0FBRTlCLEtBQU0sUUFBUytCLEtBQU0scUVBQzlDLENBRUosQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtcGx1Z2luL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rlc3QtcGx1Z2luLy4vc3JjL3V0aWxzL3N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90ZXN0LXBsdWdpbi8uL3NyYy91dGlscy9hdXRvTGF5b3V0VXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImV4cG9ydCBjb25zdCBmcmFtZXNCeUlkID0ge307XHJcblxyXG5leHBvcnQgY29uc3QgYWRkRnJhbWUgPSAoaWQsIGZyYW1lLCBwYXJlbnRJZCA9IG51bGwpID0+IHtcclxuICBmcmFtZXNCeUlkW2lkXSA9IGZyYW1lO1xyXG4gIGlmIChwYXJlbnRJZCAmJiBmcmFtZXNCeUlkW3BhcmVudElkXSkge1xyXG4gICAgZnJhbWVzQnlJZFtwYXJlbnRJZF0uYXBwZW5kQ2hpbGQoZnJhbWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChmcmFtZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZyYW1lQnlJZCA9IChpZCkgPT4gZnJhbWVzQnlJZFtpZF07XHJcblxyXG5leHBvcnQgY29uc3QgYWxpZ25GcmFtZSA9IChjaGlsZElkLCBwYXJlbnRJZCwgaG9yaXpvbnRhbEFsaWduLCB2ZXJ0aWNhbEFsaWduKSA9PiB7XHJcbiAgY29uc3QgY2hpbGQgPSBmcmFtZXNCeUlkW2NoaWxkSWRdO1xyXG4gIGNvbnN0IHBhcmVudCA9IGZyYW1lc0J5SWRbcGFyZW50SWRdO1xyXG4gIGlmIChjaGlsZCAmJiBwYXJlbnQpIHtcclxuICAgIHN3aXRjaCAoaG9yaXpvbnRhbEFsaWduKSB7XHJcbiAgICAgIGNhc2UgXCJBbGlnbiBMZWZ0XCI6XHJcbiAgICAgICAgY2hpbGQueCA9IHBhcmVudC54O1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiQWxpZ24gaG9yaXpvbnRhbCBjZW50ZXJzXCI6XHJcbiAgICAgICAgY2hpbGQueCA9IHBhcmVudC54ICsgKHBhcmVudC53aWR0aCAtIGNoaWxkLndpZHRoKSAvIDI7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJBbGlnbiByaWdodFwiOlxyXG4gICAgICAgIGNoaWxkLnggPSBwYXJlbnQueCArIHBhcmVudC53aWR0aCAtIGNoaWxkLndpZHRoO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgc3dpdGNoICh2ZXJ0aWNhbEFsaWduKSB7XHJcbiAgICAgIGNhc2UgXCJBbGlnbiB0b3BcIjpcclxuICAgICAgICBjaGlsZC55ID0gcGFyZW50Lnk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJBbGlnbiB2ZXJ0aWNhbCBjZW50ZXJzXCI6XHJcbiAgICAgICAgY2hpbGQueSA9IHBhcmVudC55ICsgKHBhcmVudC5oZWlnaHQgLSBjaGlsZC5oZWlnaHQpIC8gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcIkFsaWduIGJvdHRvbVwiOlxyXG4gICAgICAgIGNoaWxkLnkgPSBwYXJlbnQueSArIHBhcmVudC5oZWlnaHQgLSBjaGlsZC5oZWlnaHQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVSZWN0YW5nbGUgfSBmcm9tICcuL3V0aWxzL3NoYXBlVXRpbHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVGcmFtZVdpdGhBdXRvTGF5b3V0IH0gZnJvbSAnLi91dGlscy9hdXRvTGF5b3V0VXRpbHMnO1xyXG5pbXBvcnQgeyBhZGRGcmFtZSwgZ2V0RnJhbWVCeUlkLCBhbGlnbkZyYW1lIH0gZnJvbSAnLi91dGlscy9zdGF0ZU1hbmFnZXInO1xyXG5cclxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA0MjAsIGhlaWdodDogODQwIH0pO1xyXG5cclxuZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcclxuICBpZiAobXNnLnR5cGUgPT09ICdzdWJtaXQnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb21tYW5kcyA9IG1zZy5kYXRhO1xyXG4gICAgICBwcm9jZXNzQ29tbWFuZHMoY29tbWFuZHMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHByb2Nlc3NpbmcgY29tbWFuZHM6XCIsIGVycm9yKTtcclxuICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlOiAnZXJyb3InLCB0ZXh0OiAnRXJyb3IgcHJvY2Vzc2luZyBjb21tYW5kcy4gUGxlYXNlIGNoZWNrIHRoZSBmb3JtYXQgb2YgeW91ciBpbnB1dC4nIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NDb21tYW5kcyhjb21tYW5kcykge1xyXG4gIGNvbW1hbmRzLmZvckVhY2goY29tbWFuZCA9PiB7XHJcbiAgICBsZXQgZWxlbWVudDtcclxuICAgIHN3aXRjaCAoY29tbWFuZC5hY3Rpb24pIHtcclxuICAgICAgY2FzZSBcImNyZWF0ZUZyYW1lXCI6XHJcbiAgICAgICAgZWxlbWVudCA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XHJcbiAgICAgICAgZWxlbWVudC5yZXNpemUocGFyc2VGbG9hdChjb21tYW5kLndpZHRoKSwgcGFyc2VGbG9hdChjb21tYW5kLmhlaWdodCkpO1xyXG4gICAgICAgIGFkZEZyYW1lKGNvbW1hbmQuaWQsIGVsZW1lbnQsIGNvbW1hbmQucGFyZW50SWQpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY3JlYXRlUmVjdGFuZ2xlXCI6XHJcbiAgICAgICAgZWxlbWVudCA9IGNyZWF0ZVJlY3RhbmdsZShwYXJzZUZsb2F0KGNvbW1hbmQud2lkdGgpLCBwYXJzZUZsb2F0KGNvbW1hbmQuaGVpZ2h0KSk7XHJcbiAgICAgICAgYWRkRnJhbWUoY29tbWFuZC5pZCwgZWxlbWVudCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJhcHBseUF1dG9MYXlvdXRcIjpcclxuICAgICAgICBlbGVtZW50ID0gZ2V0RnJhbWVCeUlkKGNvbW1hbmQuaWQpO1xyXG4gICAgICAgIGNyZWF0ZUZyYW1lV2l0aEF1dG9MYXlvdXQoZWxlbWVudCwgY29tbWFuZC5sYXlvdXRNb2RlLCBjb21tYW5kLmFsaWduWCwgY29tbWFuZC5hbGlnblksIGNvbW1hbmQucHJpbWFyeUF4aXNTaXppbmdNb2RlLCBjb21tYW5kLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJnbG9iYWxBbGlnblwiOlxyXG4gICAgICAgIGFsaWduRnJhbWUoY29tbWFuZC5jaGlsZElkLCBjb21tYW5kLnBhcmVudElkLCBjb21tYW5kLmhvcml6b250YWxBbGlnbiwgY29tbWFuZC52ZXJ0aWNhbEFsaWduKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlRnJhbWVXaXRoQXV0b0xheW91dChmcmFtZSwgbGF5b3V0TW9kZSA9ICdOT05FJywgYWxpZ25YID0gJ0NFTlRFUicsIGFsaWduWSA9ICdDRU5URVInLCBwcmltYXJ5QXhpc1NpemluZ01vZGUgPSAnQVVUTycsIGNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9ICdBVVRPJykge1xyXG4gIGZyYW1lLmxheW91dE1vZGUgPSBsYXlvdXRNb2RlO1xyXG4gIGZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IHByaW1hcnlBeGlzU2l6aW5nTW9kZTtcclxuICBmcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBjb3VudGVyQXhpc1NpemluZ01vZGU7XHJcbiAgZnJhbWUubGF5b3V0QWxpZ24gPSAnU1RSRVRDSCc7XHJcblxyXG4gIHN3aXRjaCAobGF5b3V0TW9kZSkge1xyXG4gICAgY2FzZSAnSE9SSVpPTlRBTCc6XHJcbiAgICAgIGZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IGFsaWduWDtcclxuICAgICAgZnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gYWxpZ25ZO1xyXG4gICAgICBmcmFtZS5pdGVtU3BhY2luZyA9IDEwO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ1ZFUlRJQ0FMJzpcclxuICAgICAgZnJhbWUucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gYWxpZ25ZO1xyXG4gICAgICBmcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBhbGlnblg7XHJcbiAgICAgIGZyYW1lLml0ZW1TcGFjaW5nID0gMTA7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnTk9ORSc6XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJmcmFtZXNCeUlkIiwiYWRkRnJhbWUiLCJpZCIsImZyYW1lIiwicGFyZW50SWQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcHBlbmRDaGlsZCIsImZpZ21hIiwiY3VycmVudFBhZ2UiLCJzaG93VUkiLCJfX2h0bWxfXyIsIndpZHRoIiwiaGVpZ2h0IiwidWkiLCJvbm1lc3NhZ2UiLCJtc2ciLCJ0eXBlIiwiZGF0YSIsImZvckVhY2giLCJjb21tYW5kIiwiZWxlbWVudCIsImFjdGlvbiIsImNyZWF0ZUZyYW1lIiwicmVzaXplIiwicGFyc2VGbG9hdCIsImNyZWF0ZVJlY3RhbmdsZSIsImxheW91dE1vZGUiLCJhbGlnblgiLCJhbGlnblkiLCJwcmltYXJ5QXhpc1NpemluZ01vZGUiLCJjb3VudGVyQXhpc1NpemluZ01vZGUiLCJsYXlvdXRBbGlnbiIsInByaW1hcnlBeGlzQWxpZ25JdGVtcyIsImNvdW50ZXJBeGlzQWxpZ25JdGVtcyIsIml0ZW1TcGFjaW5nIiwiY3JlYXRlRnJhbWVXaXRoQXV0b0xheW91dCIsImNoaWxkSWQiLCJob3Jpem9udGFsQWxpZ24iLCJ2ZXJ0aWNhbEFsaWduIiwiY2hpbGQiLCJwYXJlbnQiLCJ4IiwieSIsImFsaWduRnJhbWUiLCJlcnJvciIsImNvbnNvbGUiLCJwb3N0TWVzc2FnZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9