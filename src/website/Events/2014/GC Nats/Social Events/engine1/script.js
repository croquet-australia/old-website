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
function ws_stack_vertical(e,a,b){var f=jQuery;var h=f(this);var d=f("li",b);var g=f("<div>").addClass("ws_effect").css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}).appendTo(b.parent());function c(m,j,k,i,l){if(e.support.transform&&e.support.transition){if(!j.transform){j.transform=""}if(j.top){j.transform+=" translate3d(0,"+(j.top?j.top:0)+"px,0)"}delete j.top;j.transition=k+"ms all "+i+"ms cubic-bezier(0.770, 0.000, 0.175, 1.000)";m.css(j);if(l){setTimeout(l,k+i)}}else{if(l){m.animate(j,k,"easeInOutExpo",l)}else{m.css(j)}}}this.go=function(n,k,q,p){var j=(n-k+1)%d.length;if(Math.abs(p)>=1){j=(p>0)?0:1}j=!!j^!!e.revers;var l=(e.revers?1:-1)*b.height();d.each(function(r){if(j&&r!=k){this.style.zIndex=(Math.max(0,this.style.zIndex-1))}});var m=f("ul",b);var i=f(d.get(j?n:k)).find("img").clone().css({position:"absolute","z-index":4,width:"100%",top:0}),o=f(d.get(j?k:n)).find("img").clone().css({position:"absolute","z-index":4,width:"100%",top:0});c(i,{top:(j?l:0)},e.duration,0);o.css("transform","translate3d(0,"+(j?0:-l*0.5)+"px,0)");if(j){o.appendTo(g);i.appendTo(g)}else{i.insertAfter(m);o.insertAfter(m)}if(!j){m.stop(true,true).hide().css({left:-n+"00%"});if(e.fadeOut){m.fadeIn(e.duration)}else{m.show()}}else{if(e.fadeOut){m.fadeOut(e.duration)}}setTimeout(function(){c(i,{top:(j?0:l)},e.duration,e.duration*(j?0:0.1),function(){h.trigger("effectEnd");i.remove();o.remove()});c(o,{top:(j?2:0)*b.height()*0.5},e.duration,e.duration*(j?0.1:0))},0)}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 6.1
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"stack_vertical",prev:"",next:"",duration:20*100,delay:20*100,width:700,height:700,autoPlay:true,autoPlayVideo:false,playPause:false,stopOnHover:true,loop:false,bullets:true,caption:true,captionEffect:"slide",controls:true,onBeforeStep:0,images:[{src:"./img_1169.jpg",title:"IMG_1169"},{src:"./img_1188.jpg",title:"IMG_1188"},{src:"./img_1174.jpg",title:"IMG_1174"},{src:"./img_1176.jpg",title:"IMG_1176"},{src:"./img_1177.jpg",title:"IMG_1177"},{src:"./img_1178.jpg",title:"IMG_1178"},{src:"./img_1179.jpg",title:"IMG_1179"},{src:"./img_1180.jpg",title:"IMG_1180"},{src:"./img_1181.jpg",title:"IMG_1181"},{src:"./img_1193.jpg",title:"IMG_1193"},{src:"./img_1194.jpg",title:"IMG_1194"},{src:"./img_1183.jpg",title:"IMG_1183"},{src:"./img_1184.jpg",title:"IMG_1184"},{src:"./img_1186.jpg",title:"IMG_1186"},{src:"./img_1207.jpg",title:"IMG_1207"},{src:"./img_1191.jpg",title:"IMG_1191"},{src:"./img_1172.jpg",title:"IMG_1172"},{src:"./img_1153.jpg",title:"IMG_1153"},{src:"./img_1166.jpg",title:"IMG_1166"},{src:"./img_1200.jpg",title:"IMG_1200"},{src:"./img_1201.jpg",title:"IMG_1201"},{src:"./img_1209.jpg",title:"IMG_1209"},{src:"./img_1152.jpg",title:"IMG_1152"},{src:"./img_1150.jpg",title:"IMG_1150"},{src:"./img_1196.jpg",title:"IMG_1196"},{src:"./img_1149.jpg",title:"IMG_1149"}]});