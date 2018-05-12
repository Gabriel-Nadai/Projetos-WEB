
var sliderwidth="1600px"

var sliderheight="190px"

var slidespeed=3

slidebgcolor="#EAEAEA"


var leftrightslide=new Array()
var finalslide=''
leftrightslide[0]='<a href="products/vingadores1.html"><img src="images/hq 01.jpg" style=" border: 1px solid black;"></a>' 
leftrightslide[1]='<a href="products/mulher52.html"><img src="images/hq 02.jpg" style=" border: 1px solid black;"></a>' 
leftrightslide[2]='<a href="products/versus4.html"><img src="images/hq 03.jpg" style=" border: 1px solid black;"></a>' 
leftrightslide[3]='<a href="products/guardioes6.html"><img src="images/hq 04.jpg" style=" border: 1px solid black;"></a>' 
leftrightslide[4]='<a href="products/promocaosuperman.html"><img src="images/hq 05.jpg" style=" border: 1px solid black;"></a>' 
leftrightslide[5]='<a href="products/gold17.html"><img src="images/Manga 01.jpg" style=" border: 1px solid black;"></a>' 
leftrightslide[6]='<a href="products/gold14.html"><img src="images/Manga 02.jpg" style=" border: 1px solid black;"></a>'
leftrightslide[7]='<a href="products/onejump.html"><img src="images/Manga 03.jpg" style=" border: 1px solid black;"></a>'
leftrightslide[8]='<a href="products/one44.html"><img src="images/Manga 04.jpg" style=" border: 1px solid black;"></a>'
leftrightslide[9]='<a href="products/reborn27.html"><img src="images/Manga 05.jpg" style=" border: 1px solid black;"></a>'
leftrightslide[10]='<a href="products/doutoract.html"><img src="images/Action 01.jpg" style=" border: 1px solid black;"></a>'
leftrightslide[11]='<a href="products/batmanact.html"><img src="images/Action 02.jpg" style=" border: 1px solid black;"></a>'
leftrightslide[12]='<a href="products/deadact.html"><img src="images/Action 03.jpg" style=" border: 1px solid black;"></a>'
leftrightslide[13]='<a href="products/capitaoact.html"><img src="images/Action 04.jpg" style=" border: 1px solid black;"></a>'
leftrightslide[14]='<a href="products/ironmanact.html"><img src="images/Action 05.jpg" style=" border: 1px solid black;"></a>'


var imagegap=" "


var slideshowgap=1



var copyspeed=slidespeed
leftrightslide='<nobr>'+leftrightslide.join(imagegap)+'</nobr>'
var iedom=document.all||document.getElementById
if (iedom)
document.write('<span id="temp" style="visibility:hidden;position:absolute;top:-100px;left:-9000px">'+leftrightslide+'</span>')
var actualwidth=''
var cross_slide, ns_slide

function fillup(){
if (iedom){
cross_slide=document.getElementById? document.getElementById("test2") : document.all.test2
cross_slide2=document.getElementById? document.getElementById("test3") : document.all.test3
cross_slide.innerHTML=cross_slide2.innerHTML=leftrightslide
actualwidth=document.all? cross_slide.offsetWidth : document.getElementById("temp").offsetWidth
cross_slide2.style.left=actualwidth+slideshowgap+"px"
}
else if (document.layers){
ns_slide=document.ns_slidemenu.document.ns_slidemenu2
ns_slide2=document.ns_slidemenu.document.ns_slidemenu3
ns_slide.document.write(leftrightslide)
ns_slide.document.close()
actualwidth=ns_slide.document.width
ns_slide2.left=actualwidth+slideshowgap
ns_slide2.document.write(leftrightslide)
ns_slide2.document.close()
}
lefttime=setInterval("slideleft()",30)
}
window.onload=fillup

function slideleft(){
if (iedom){
if (parseInt(cross_slide.style.left)>(actualwidth*(-1)+8))
cross_slide.style.left=parseInt(cross_slide.style.left)-copyspeed+"px"
else
cross_slide.style.left=parseInt(cross_slide2.style.left)+actualwidth+slideshowgap+"px"

if (parseInt(cross_slide2.style.left)>(actualwidth*(-1)+8))
cross_slide2.style.left=parseInt(cross_slide2.style.left)-copyspeed+"px"
else
cross_slide2.style.left=parseInt(cross_slide.style.left)+actualwidth+slideshowgap+"px"

}
else if (document.layers){
if (ns_slide.left>(actualwidth*(-1)+8))
ns_slide.left-=copyspeed
else
ns_slide.left=ns_slide2.left+actualwidth+slideshowgap

if (ns_slide2.left>(actualwidth*(-1)+8))
ns_slide2.left-=copyspeed
else
ns_slide2.left=ns_slide.left+actualwidth+slideshowgap
}
}


if (iedom||document.layers){
with (document){
document.write('<table border="0" cellspacing="0" cellpadding="0"><td>')
if (iedom){
write('<div style="position:relative;width:'+sliderwidth+';height:'+sliderheight+';overflow:hidden">')
write('<div style="position:absolute;width:'+sliderwidth+';height:'+sliderheight+';background-color:'+slidebgcolor+'" onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed">')
write('<div id="test2" style="position:absolute;left:0px;top:0px"></div>')
write('<div id="test3" style="position:absolute;left:-1000px;top:0px"></div>')
write('</div></div>')
}
else if (document.layers){
write('<ilayer width='+sliderwidth+' height='+sliderheight+' name="ns_slidemenu" bgColor='+slidebgcolor+'>')
write('<layer name="ns_slidemenu2" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('<layer name="ns_slidemenu3" left=0 top=0 onMouseover="copyspeed=0" onMouseout="copyspeed=slidespeed"></layer>')
write('</ilayer>')
}
document.write('</td></table>')
}
}