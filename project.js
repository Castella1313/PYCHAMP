var sum = 0;
function func(x){
	
	if(x == "correct"){
		sum +=1;
	}
	else{

	}
	
}





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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  $("#score").html(sum);
  if (sum >= 5){
	$("#remark").html("Outstanding");
  } else if (sum >= 3){
	$("#remark").html("Well done");
  }
  else if (sum >= 1){
	$("#remark").html("Good effort");
  } 
  else if (sum == 0){
	$("#remark").html("Try Again?");
  } 
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
	