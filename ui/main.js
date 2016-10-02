	var button = document.getElementById('counter');

	button.onclick = function (){
		var request = new XMLHTTPRequest();
		
		request.onreadystatechange = function(){
		if (request.readystate == XMLHTTPRequest.Done) 
		 {
		   if (request.status ==200)
			{
			  var counter;
			  counter = request.responseText;
			  var span = document.getElementById('span');
			  span.innerHTML = counter.tostring();
			}	   
		
		 } 
		
		}
	request.open('Get','hhtp//culritesh.imad.hasura-app.io',true);
	request.send(null);
	};