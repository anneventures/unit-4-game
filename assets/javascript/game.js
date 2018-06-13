$(document).ready(function() {
  
  	//VARIABLES	
	var wins = 0;
	var losses = 0;
	var counter = 0;
	var crystals = $("#crystals");
	var randomNum = Math.floor(Math.random() * 120) + 19;

	$('#randomNum').text(randomNum);

	var allCrystals = ["orange", "blue", "green", "pink"];

		for (var colour in allCrystals) {

			var randomValue = Math.floor(Math.random() * 12) + 1;

			var selector = "#" + allCrystals[colour];

			$(selector).attr("data-value", randomValue);

		}

	
	 function reset() {

	 	 randomNum = Math.floor(Math.random() * 120) + 19;

	 	$('#randomNum').text(randomNum);

	 allCrystals = ["orange", "blue", "green", "pink"];


		for (var colour in allCrystals) {

			var randomValue = Math.floor(Math.random() * 12) + 1;

			var selector = "#" + allCrystals[colour];

			$(selector).attr("data-value", randomValue);

		}
		
        counter = 0;

	 	$('#totalScore').text(counter);

	 };

	 function win() {
	 	alert("You win!");
	 	wins++;
	 	$('#wins').text(wins);
	 	reset();	
	 }

	 function lose() {
		alert("You lose!!");
		losses++;
		$('#losses').text(losses);
		reset();
	 }

	crystals.on("click", ".crystalImage", function() {

		var crystalValue = ($(this).attr("data-value"));
    	
    	crystalValue = parseInt(crystalValue);

    	counter+=crystalValue;

		$('#totalScore').text(counter);

	    if (counter === randomNum) {
			win();
	     }

	     else if (counter > randomNum) {
	     	lose();
	     }

  	});		


});