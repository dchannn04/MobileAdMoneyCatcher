//Function to the Mobile Ad

var userBalance = 0;
var time = 0;

// Gets called whenever the money finished tweening to the bottom.
function addFromCatch(value)
{
	userBalance += value;
}

// Gets called every frame.
// Time elapsed since the last update is passed into the function(milliseconds)
function onUpdate({delta})
{
	if (time < 2000){
		time = time + {delta};
	}
	else {
		updateBalance (userBalance);
		time = 0;
	}
}
