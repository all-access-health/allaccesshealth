

//contact form menu handler


$("#contact-form-button").click(){
	// show cotact orm hide others
	$("#contact-us-form").show();  // change to display block
	$("#contact-us-form").styles("border-bottom:1px solid #000"); // change to add border style color 	
	
	$("#subscribe-form").hide(); // change to display none
	$("#subscribe-form").styles("border-bottom:none"); // border to none
	
	$("#chat-form").hide(); // change to display none
	$("#chat-form").styles("border-bottom:none"); // border to none
}