var checkColumns = function(){
  var containerArray = [];
  var arrayLength = game.gameArray.length;

  var checkRow = function(column){
    var rowArray = [];
    for(var row = 0; row<arrayLength; row++){
      rowArray[row]= game.gameArray[row][column];
    }
    return rowArray;
  }
  for(var column = 0; column<arrayLength; column++){
      game.columnArray[column] = checkRow(column)
  }
}

var checkDiagonals = function(){

  var diagonalOne = function(){
    var diagonalOneArray = [];
    for(var num=0; num<game.gameArray.length; num++){
      diagonalOneArray[num] = game.gameArray[num][num];
    }
    return diagonalOneArray;
  }
  var diagonalTwo = function(){
    var gameLength = game.gameArray.length;
    var diagonalTwoArray = [];
    for(var num=0; num<gameLength; num++){
      diagonalTwoArray[num] = game.gameArray[num][gameLength-num-1];
    }
    return diagonalTwoArray;
  }
  var array1 = diagonalOne();
  var array2 = diagonalTwo();
  game.diagonalArray = [array1, array2];
}

var gameWinner = function(symbol){
  if(symbol === 'X'){
    console.log(symbol + " : is the winner");
    game.player1Score += 1;
    game.gameRounds += 1;
    $('div.player1').text('Player 1: '+ game.player1Score);
    $('div.rounds').text('Round: '+ game.gameRounds);
    $('#winnerText').text('PLAYER 1 WINS')
  }else if(symbol === 'O'){
    console.log(symbol + " : is the winner");
    game.player2Score += 1;
    game.gameRounds += 1;
    $('div.player2').text('Player 2: '+ game.player2Score);
    $('div.rounds').text('Round: '+ game.gameRounds);
    $('#winnerText').text('PLAYER 2 WINS')
  }else if(symbol === ' '){
    $('#winnerText').text('DRAW!!! Press Game Reset')
  }
}

var checkForWinner = function(symbol){
  checkColumns();
  checkDiagonals();

  var checkSymbol = function(element){
    return element === symbol;
  }

    for(var i=0; i<game.gameSize; i++){
      if((game.gameArray[i].every(checkSymbol)) || (game.columnArray[i].every(checkSymbol))){
        gameWinner(symbol);
        game.winner = 1;
        return true;
      }
    }
    for(var i=0; i<2; i++){
      if(game.diagonalArray[i].every(checkSymbol)){
        gameWinner(symbol);
        game.winner = 1;
        return true;
      }
    }
  



  if(game.count === 0){
    console.log('hello its here');
    $('#winnerText').text('DRAW!!! Press Game Reset')
  }
  return false;
}
