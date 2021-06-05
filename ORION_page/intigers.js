function intiger()
{


var number1= document.getElementById("number1").value;
var number2= document.getElementById("number2").value;
var content1 = "";
var content2 = "";

if(number1>number2)
{
	//var variab = number1;
//	number1 = number2;
	//number2 = variab;
	
	for(;number1>=number2;number1--)
	{
		
		 content1 = content1 + number1;
		 
	}
	document.getElementById("container").innerHTML = content1;  
}
else if (number2>=number1)
{
	for(;number1<=number2;number1++)
	{
		
		 content2 = content2 + number1;
	}
	document.getElementById("container").innerHTML = content2;  
}
else
{
	document.getElementById("container").innerHTML = "wrong value!!!!";
}


}


