var sum = 0;
function func(x){
	
	if(x == "correct"){
		sum +=1;
	}
	else{

	}
	
}
function myresult(){
	window.alert("Your score is " + sum);}





	$(document).ready(function() {
		$("#links").hide();
		$("#menu-btn").click(changeNav);
	  
		function changeNav() {
		  $("#links").toggle(200);
		  $("#menu-btn").toggleClass("turn");
		}
	  });





	  setTimeout(
		function()
		{
			$("#o2").show();
		},
		5000
	)
	setTimeout(
		function()
		{
			$("#o3").show();
		},
		10000
	)
	