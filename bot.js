var game;
var startGame = function(x,y,width,height,bombs) {
  game = new Game(x,y,width,height,bombs);
  printGame(game,true);
  click(x,y);
}

var click = function(x,y) {
  
}
