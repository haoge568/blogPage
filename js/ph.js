// //飘花特效
// const getCookie = (key) => {
//   var arr1 = document.cookie.split("; ");
//   for (var i = 0; i < arr1.length; i++) {
//     var arr2 = arr1[i].split("="); //通过=截断，把name=Jack截断成[name,Jack]数组；
//     if (arr2[0] == key) {
//       return decodeURI(arr2[1]);
//     }
//   }
// }
// var styleVal = getCookie('style');
// if (styleVal) {
//   let styleScr = document.createElement('script');
//   styleScr.src = "https://www.haoge.plus/almighty/module_js/" + styleVal + '.js';
//   document.querySelector('#app').appendChild(styleScr);
// }