$(document).ready(function() {
  
  //VARIABLES

	var wins = 0;
	var losses = 0;

	var userTotal = 0;

	var randomNum = Math.floor((Math.random() * 100) + 5);

	var orange = Math.floor((Math.random() * 10) + 1);
	var blue = Math.floor((Math.random() * 10) + 1);
	var green = Math.floor((Math.random() * 10) + 1);
	var pink = Math.floor((Math.random() * 10) + 1);

    $("#randomNum").append(randomNum);

    });