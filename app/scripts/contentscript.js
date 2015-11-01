'use strict';

console.log('\'Allo \'Allo! Content script');

var oldKeyDown = document.onkeydown;

document.onkeydown = function (e) {
  if (e.keyCode === 13) {
    console.log(e);
    return;
  }
  oldKeyDown(e);
};
//# sourceMappingURL=contentscript.js.map
