var game;
var startGame = function(x,y,width,height,bombs) {
  game = new Game(x,y,width,height,bombs);
  console.log("finished mapping");
  return expandClick(x,y);
}

var expandClick = function(x,y) {
  var expandTo = new Array();
  expandTo[0] = {}
  expandTo[0].x = x;
  expandTo[0].y = y;
  while(expandTo.length > 0) {
    game.click(expandTo[0].x,expandTo[0].y);
	if(getSpace(expandTo[0].x,expandTo[0].y) == 0) {
	  for(var i = expandTo[0].x-1; i <= 1+expandTo[0].x;i++) {
	    for(var j = expandTo[0].y-1; j <= 1+expandTo[0].y;j++) {
	      if(getSpace(i,j) == 'empty') {
		    expandTo.push({});
			expandTo[expandTo.length-1].x = i;
			expandTo[expandTo.length-1].y = j;
			game.click(i,j);
		  }
	    }
	  }
	}
	expandTo.splice(0,1);
  }
  console.log("finished expanding");
  printGame(game,true);
  console.log("finished printing");
}

var getSpace = function(x,y) {
  if(game.getRevealed()[x] != undefined && game.getRevealed()[x][y] != undefined) {
    if(game.getRevealed()[x][y] === ' ') {  //in javascript, empty strings are equal to 0. this will make it more clear
      return 'empty';
	}
	else {
	  return game.getRevealed()[x][y];
	}
  }
  else {
    return 'outOfBounds';
  }
}

//startGame(10,10,20,20,10);