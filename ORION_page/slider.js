
var number = Math.floor(Math.random()*5)+1;



function changeimage()
{

number++;
if(number>5)number=1;

var file = "<img src=\"images/image"+number+".jpg\"/>";
document.getElementById("content").innerHTML = file;
	
	
	setTimeout("changeimage()",5000);
	
	
}