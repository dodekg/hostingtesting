/*var runScript = function(){


var change = document.getElementById("changeForm");
document.getElementById("changeText").innerHTML = change.innerHTML; 



}*/

function runScript(){
		document.getElementById("difference").innerHTML = " bull shit ";
	}

	var chF = document.getElementById("changeForm");
	var chT = document.getElementById("changeText");

	var runComment = function(){
		chT.innerHTML = chF.innerHTML;
	}


function unless(test, then) {
  if (!test) then();
}


function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(10, n => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});