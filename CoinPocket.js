// noprotect
var Coin = function(c) {
  var coin = {
    value: c
  };
  return coin;
};

var myPocket = {
  coins: [],
  capacity: 50
};

$('#instructions').addClass('animated bounceOutLeft');

var game = {
  answer: Math.floor(Math.random() * myPocket.capacity),
  allowedGuesses: 15,
  lowGuesses: [0],
  highGuesses: [myPocket.capacity],

  init: function() {
    var gameObject = this;
    while(myPocket.coins.length < this.answer) {
      myPocket.coins.push(new Coin("Quarter"));
    }
    console.log("My pocket has " + myPocket.coins.length + " coins");


  $("#game-input").on("submit", function() {
      var message;
      var guess = parseInt($("#guess").val());
      var diff = gameObject.answer - guess;
      gameObject.allowedGuesses--;

      if (diff > 0) {
        message = "You're too low ";
        gameObject.lowGuesses.push(guess);
      } else if (diff < 0) {
        message = "You're too high" ;
        gameObject.highGuesses.push(guess);
      } else {
        message = "Wow you guessed right! And no I'm not gonna give you any of them. " + "Oh, and Happy aniversary to the web!! Congrats!";
      }

      $("#result").html(message);

      gameObject.count();

      return false;
    });
  },
  count: function() {
    $("#count").html("Count: You only have " + parseInt(this.allowedGuesses) + " guesses left!");
    if($("#count") < 1) {
      $("#count").html("You lose");
    }
                    }
};

game.init();

