var Face = 
{
	
	ATR: 3,		//Number of face attributes which can be found in each folder
	POS: [	-250, 
		-227, 
		-210],	//Relative positions of the face Attributes in pixels
	Features:[	document.getElementById('eyesArea'), 
			document.getElementById('noseArea'), 
			document.getElementById('mouthArea')] //All face feature areas in which the random face parts will be placed
	
}



/*
	ATTENTION:
	This variadic function generates a list with random integer numbers
*/
function faceAttributes()
{
	//Will contain the index of face attributes which will then used to show in browser
	var randomNumbers = [];
	
	//Generating for every user checked face attribute a random integer number
	for(var attribute = 0; attribute < arguments.length; attribute++)
	{
		
		if(arguments[attribute].checked)
		{
			
			//Random float number between 0 and ATR-1			
			var randNumber = Math.floor(Math.random() * (Face.ATR - 0) + 0);

			randomNumbers.push(randNumber);
			
		}
		
	}
	
	return randomNumbers;
}



//MAIN
function faceIt()
{
	
	//Define path in which the images are
	var path = [	"eyes/eyes",
			"noses/nose",
			"mouths/mouth"];
	
	
	/*
		ATTENTION:
		Using "apply" by getting user Input "document.getElementsByName('checkedAtr')" 
		
		NOTE:
		"getElementsByName()" is an array
	*/
	var checkedAtr 		= document.getElementsByName('checkedAtr');
	var randomAttributes 	= faceAttributes.apply(Face, checkedAtr);
	
	
	
	/*
		NOTE:
		There exists two different arrays with two different length 
		which is why there are used two variables (j and c) for the index.
	*/
	//Getting the images and positioning them
	for(var j = 0, c = 0 ; j < Face.ATR && c < randomAttributes.length; j++)
	{
		
		if(checkedAtr[j].checked)
		{
			
			Face.Features[j].innerHTML = '<img style="position:relative; top:' + Face.POS[j] + 'px;" src="' + path[j] + randomAttributes[c] + '.jpg">'
			
			c++;
			
		}

	}
	

}
