/*
* Copyright (c) 2019 vbvbv.com All rights reserved.
* Url: http://www.svip.tech/
* Url: http://www.vbvbv.com/
*/

//控制pace.js进度条加载时间上限，自动隐藏
function hidepacejs(){ 
var pacediv = document.getElementsByClassName("pace")[0];
pacediv.style.display="none";
} 
//重复执行某个方法 
var pacet1 = window.setInterval(hidepacejs,7000); 
var pacet2 = window.setInterval("hidepacejs()",7000); 
//window.clearInterval(pacet1); 
//window.clearInterval(pacet2); 
