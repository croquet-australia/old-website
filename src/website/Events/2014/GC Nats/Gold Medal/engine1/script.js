// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fade(c,a,b){var e=jQuery,g=e(this),d=e("ul",b),f=e("<div>").addClass("ws_effect").appendTo(b.parent()),h={position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"};this.go=function(i,j){var k=e(a.get(i)).clone().css(h).hide().appendTo(f);if(!c.noCross){var l=e(a.get(j)).clone().css(h).appendTo(f);l.fadeOut(c.duration,function(){l.remove()})}k.fadeIn(c.duration,function(){g.trigger("effectEnd");k.remove()})}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"fade",prev:"",next:"",duration:20*100,delay:20*100,width:640,height:360,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:true,loop:false,bullets:0,caption:true,captionEffect:"slide",controls:true,onBeforeStep:0,images:0});