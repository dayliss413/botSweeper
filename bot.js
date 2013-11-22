var startGame = function(x,y,width,height,bombs) {
  var game = new Game(x,y,width,height,bombs);
  printGame(game,true);
  expand(x,y);
}
