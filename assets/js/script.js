$(document).ready(function(){$dir='http://yarids.bkfk-t5yk.accessdomain.com/';$arr1=[];$arr1[0]=$dir+'assets/img/bg/yaridsBG1.jpg';$arr1[1]=$dir+'assets/img/bg/yaridsBG2.jpg';$arr1[2]=$dir+'assets/img/bg/yaridsBG3.jpg';$arr1[3]=$dir+'assets/img/bg/yaridsBG4.jpg';$arr1[4]=$dir+'assets/img/bg/yaridsBG5.jpg';$arr1[5]=$dir+'assets/img/bg/yaridsBG6.jpg';$arr1[6]=$dir+'assets/img/bg/yaridsBG7.jpg';$arr1[7]=$dir+'assets/img/bg/yaridsBG8.jpg';$arr1[8]=$dir+'assets/img/bg/yaridsBG9.jpg';$arr1[9]=$dir+'assets/img/bg/yaridsBG10.jpg';if($('body').hasClass('home')){function changeBG(array,index,timeout){if(index!=2&&index!=5&&index!=8&&index!=9){newtimeout=500;}else if(index==8){newtimeout=2000;}else if(index==9){newtimeout=5000;}else{newtimeout=2000;}

if(index==array.length){index=0}
setTimeout(function(){$('body').css('background-image','url('+array[index]+')');index++;changeBG(array,index,newtimeout);},timeout);}
changeBG($arr1,0,400);$hov=false;if($hov!=true){$(document).mousemove(function(){$('#homeWrap').fadeIn(500);$hov=true;});}}else{$arr1=[];$arr1[0]=$dir+'assets/img/bg/int/yaridsBG1.jpg';$arr1[1]=$dir+'assets/img/bg/int/yaridsBG2.jpg';$arr1[2]=$dir+'assets/img/bg/int/yaridsBG3.jpg';$arr1[3]=$dir+'assets/img/bg/int/yaridsBG4.jpg';$arr1[4]=$dir+'assets/img/bg/int/yaridsBG5.jpg';$arr1[5]=$dir+'assets/img/bg/int/yaridsBG6.jpg';$arr1[6]=$dir+'assets/img/bg/int/yaridsBG7.jpg';$arr1[7]=$dir+'assets/img/bg/int/yaridsBG8.jpg';$arr1[8]=$dir+'assets/img/bg/int/yaridsBG9.jpg';var numRand=Math.floor(Math.random()*9);$('body').css('background-image','url('+$arr1[numRand]+')');}

if($('#contentPrimary.wishlist #slideCont').length>0){$('#contentPrimary.wishlist #slideCont').cycle({fx:'scrollHorz',next:'#next',prev:'#prev',timeout:0,speed:500});}

if($('#contentPrimary.meet #slideCont').length>0){$('#contentPrimary.meet #slideCont').cycle({fx:'scrollHorz',speed:500,timeout:0,pager:'#tabs',pagerAnchorBuilder:function(idx,slide){return'#tabs li:eq('+idx+')';}});$('#direct').click(function(){$('#tabs li:eq(1)').trigger('click');return false;});}

var slidey = $('.banner').unslider(),
data = slidey.data('unslider');

data.start();
data.dots();

});
