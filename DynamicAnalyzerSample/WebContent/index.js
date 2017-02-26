
$(document).ready(function () {

//	localStorage.setItem("loggedIn", true);
//	
//	if (localStorage.loggedIn == "true"){
//		$('#loginContainer').hide();
//		$('#echoContainer').show();
//		//$('#logoutButton').show();
//		$('#userWelcomeMessage').text('Welcome ' + localStorage.username);
//		$('#userWelcomeMessage').show();
//	}
//	else{
//		localStorage.loggedIn == false;
//		$('#echoContainer').hide();
//		//$('#logoutButton').hide();
//		$('#userWelcomeMessage').hide();
//	}
//		
//	
//	$('#loginButton').click(function(event){
//		event.preventDefault();
//		var user = $("#user").val();
//		var password = $("#password").val();
//		if (user === 'bob' && password === '1234'){
//			localStorage.setItem("loggedIn", true);
//			localStorage.username = user;
//			$('#loginContainer').hide();
//			$('#echoContainer').show();
//			//$('#logoutButton').show();
//			$('#userWelcomeMessage').text('Welcome ' + user);
//			$('#userWelcomeMessage').show();
//		}
//		else
//			alert("Please enter correct details. (user: bob. password: 123456)");
//						
//	});
	
-



	$('#btnSubmitGet').click(function (event){
		event.preventDefault();	
		
		var sInput = $('#txtInput').val();
		
		$.get( "demo/getForm?input=" + sInput, function( data ) {
			  $('#txtOutput').html(data);
		});
	});	
	
	$('#btnSubmitPost').click(function (event){
		event.preventDefault();
		
		var sInput = $('#txtInput').val();
		
		$.post( "demo/postForm", {input: sInput }, function( data ) {
			  $('#txtOutput').html(data);
		});
	});
	
	
	/* Fading background iamges */
	var body = $('body');
	
	var backgrounds = new Array(
	    'url(images/ski.jpg)'
	  //, 'url(images/sea.jpg)'
	  //, 'url(images/weet.jpg)'
	);
	
	var backgroundElements = [];
	
	for (i = 0; i < backgrounds.length - 1; i++){
		var elem = $(' <div class="backgroundImage"></div> ');
		elem.css('background-image', backgrounds[i]);
		elem.addClass('invisible');
		backgroundElements.push(elem);
		body.append(elem);
	};
	
	// last element
	var elem = $(' <div class="backgroundImage"></div> ');
	elem.css('background-image', backgrounds[backgrounds.length - 1]);
	backgroundElements.push(elem);
	body.append(elem);
	    
	var current = backgrounds.length - 1;
	var last = backgrounds.length - 1;

	function nextBackground() {
		backgroundElements[last].toggleClass('transitionEffect');
		
		last = current;
	    current++;
	    current = current % backgroundElements.length;
	    backgroundElements[current].removeClass('invisible');
	    backgroundElements[current].addClass('transitionEffect');
	    backgroundElements[last].addClass('invisible');
	}
	//setInterval(nextBackground, 5000);

});
