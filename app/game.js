
 var app = angular.module("NgWarrior",[]);

 	app.controller("bgCtrl", function($scope,$timeout){

 		$scope.welcome = "Welcome to Ng Warrior Game!";


 		// var start = $scope.start = true;
 			
 		var wrong = document.getElementById("wrongSound");
 			wrong.load();

 		var bg = document.getElementById("bgSound");
 			bg.load();

 		var cut = document.getElementById("cutSound");
 			cut.load();

 		var miss = document.getElementById("missSound");
 			miss.load();

 		var start = document.getElementById("startSound");
		    start.load();
		    start.play();

			    start.onended = function($scope){
			    
		         setTimeout(function() {
					   document.getElementById('suru').style.display='none'
					  document.getElementById('start').style.display='block'
					  

					}, 100); 

			    	var start = $scope.start = true;
			    };


			    // starting games
			    $scope.points = 0;
			    $scope.start = function($scope){

			    	document.getElementById('start').style.display='none';
			    	document.getElementById('enemy1').style.display='block';
			    	document.getElementById('enemy2').style.display='block';
			    	document.getElementById('enemy3').style.display='block';
			    	document.getElementById('enemy4').style.display='block';
			    	document.getElementById('enemy5').style.display='block';

			    	

			    	bg.play();
			    	bg.onended = function(){
			    		bg.play();
			    	};


			    };

			    $scope.point = function(value,name){
			    		cut.play();
			    		console.log("it is"+value+"name:"+name)
			    		$scope.points +=value;

			    		document.getElementById(name).style.display='none'

			    		setTimeout(function() {
						  
						  document.getElementById(name).style.display='block'
						  

						}, 1000); 

			    	};

			    $scope.missClick = function(){
			    	wrong.play();

			    };



 	});