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
jQuery.extend(jQuery.easing,{easeInOutSine:function(j,i,b,c,d){return -c/2*(Math.cos(Math.PI*i/d)-1)+b}});function ws_domino(j,g,i){$=jQuery;var f=$(this);jQuery.extend(j,{columns:j.columns||5,rows:j.rows||2,centerRow:j.centerRow||2,centerColumn:j.centerColumn||2});var e=$("<div>").addClass("ws_effect").css({position:"absolute",width:"100%",height:"100%",top:0,overflow:"hidden"}).appendTo(i.parent());var c=$("<div>").addClass("ws_zoom").appendTo(e);var h=$("<div>").addClass("ws_parts").appendTo(e);var d=i.find("ul");var a;function b(o,l,m,k,n){if(j.support.transform&&j.support.transition){if(!l.transform){l.transform=""}if(l.left||l.top){l.transform+=" translate3d("+(l.left?l.left:0)+"px,"+(l.top?l.top:0)+"px,0px)"}if(m){l.transition=m+"ms all "+k+"ms cubic-bezier(0.445, 0.050, 0.550, 0.950)"}delete l.left;delete l.top;o.css(l);if(n){setTimeout(n,m+k)}}else{if(n){o.animate(l,m,"easeInOutSine",n)}else{o.css(l)}}}this.go=function(t,s){function u(){h.find("img").stop(1,1);h.empty();c.empty();a=0}u();if(j.fadeOut){d.fadeOut(j.duration)}var x=$(g.get(s)).clone().appendTo(c).css({position:"absolute",width:"100%",height:"100%",top:0,left:0});b(x,{transform:"scale(1)"});var m=e.width();var l=e.height();var r=Math.floor(m/j.columns);var q=Math.floor(l/j.rows);var o=m-r*(j.columns-1);var y=l-q*(j.rows-1);function C(F,E){return Math.random()*(E-F+1)+F}var p=[];for(var w=0;w<j.rows;w++){p[w]=[];for(var v=0;v<j.columns;v++){var n=j.duration*(1-Math.abs((j.centerRow*j.centerColumn-w*v)/(2*j.rows*j.columns)));var z=v<j.columns-1?r:o;var k=w<j.rows-1?q:y;p[w][v]=$("<div>").css({width:z,height:k,position:"absolute",top:w*q,left:v*r,overflow:"hidden"});var B=C(w-2,w+2);var A=C(v-2,v+2);p[w][v].appendTo(h);var D=$(g.get(t)).clone().appendTo(p[w][v]);b(D,{position:"absolute",top:-B*q,left:-A*r,width:m,opacity:0,height:l},n,0)}}setTimeout(function(){if(j.support.transform&&j.support.transition){b(x,{transform:"scale(1.6)"},j.duration,j.duration*0.2)}for(var F=0;F<j.rows;F++){for(var E=0;E<j.columns;E++){b(p[F][E].find("img"),{top:-F*q,left:-E*r,opacity:1},n,0,function(){a++;if(a==j.rows*j.columns){u();d.stop(1,1);f.trigger("effectEnd")}})}}},0)}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"domino",prev:"",next:"",duration:20*100,delay:20*100,width:800,height:600,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:true,loop:false,bullets:true,caption:true,captionEffect:"slide",controls:true,onBeforeStep:0,images:0});