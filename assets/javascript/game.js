$(document).ready(function(){
	var crystals = [];
	var score = 0;
	var target = 0;
	var wins = 0;
	var losses = 0;
	var previous = 0;
	function init(){
		// generate crystal values
		for(var i = 0; i < 4; i++){
			crystals[i] = Math.floor((Math.random()*5)+1);
		}
		// generate number to reach
		target = Math.floor((Math.random()*100)+1);
		$("#target").html("Target: " + target);
		score = 0;
		$("#result").html("Score: 0");
		
		// update wins/losses
		$("#wins").html("Wins: " + wins);
		$("#losses").html("Losses: " + losses);
		$("#previous").html("Previous: " + previous);
	}
	init();
	
	function checkScore(){
		if(score === target){
			alert();
			previous = target;
			wins++;
			init();
		}else if(score > target){
			alert();
			previous = target;
			losses++;
			init();
		}
	}
	
	function addScore(i){
		score += crystals[i];
		$("#result").html("Score: " + score);
		checkScore();
	}
	$("#c1").on("click", function(){
		addScore(0);
	});
	$("#c2").on("click", function(){
		addScore(1);
	});
	$("#c3").on("click", function(){
		addScore(2);
	});
	$("#c4").on("click", function(){
		addScore(3);
	});
});