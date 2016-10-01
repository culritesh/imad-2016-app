	var button = document.getElementById('counter');

	button.onclick = function (){
		var request = XMLHTTPRequest;
		
		request.onreadystatechange = function(){
		if (request.readystate == XMLHTTPRequest.done) 
		 {
		   if (request.status ==200)
			{
			  var counter;
			  counter = request.responsetext;
			  span.innerhtml= counter.tostring;
			}	   
		
		 } 
		
		}
	request.open('Get','hhtp//culritesh.imad.hasura-app.io',true);
	request.send(null);
	};