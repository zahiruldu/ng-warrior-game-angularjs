(function(app) {

	var wow  =ng.core.Component({selector: 'hello-frnd', template: 'It is Okay'}).Class({constructor: function(){} });

	var frnd  =ng.core.Component({selector: 'frnd', template: 'It is not okay'}).Class({constructor: function(){} });

var FriendLists = ng.core.Component({
    	selector:'friends',
    	template:'<ul><li *ngFor="let friend of friends let i = index"> {{friend}}</li></ul>',
    	directives: [ng.common.NgFor]
    }).Class({

    	constructor: function(){
    		this.friends = ["Alice", "Bob", "James", "Aaron"];

    		// var audio = new audio();
    		// 	audio.src = "../audio/start.mp3";
    		// 	audio.load();
    		// 	audio.play();

    	}
    });

  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>AngularAttack 2016</h1><p>Welcome NG Wariors</p><p> Hackathon starts</p><hello-frnd></hello-frnd> <br> <frnd></frnd> <br><friends></friends>',
      directives: [wow, frnd, FriendLists]
    })
    .Class({
      constructor: function() {}
    });

    

    


})(window.app || (window.app = {}));
