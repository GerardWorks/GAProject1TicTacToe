var checkColumns = function(array){
  var containerArray = [];
  var arraySize = array.length;
  var arrayLength = array[0].length;

  var checkRow = function(column,arrayNum){
    var rowArray = [];
    for(var row = 0; row<arrayLength; row++){
      rowArray[row]= array[arrayNum][row][column];
    }
    return rowArray;
  }
  var checkColumn = function(arrayNum){
    var columnsArray = [];
    for(var column = 0; column<arrayLength; column++){
      columnsArray[column] = checkRow(column, arrayNum);
    }
    return columnsArray;
  }

  for(var i=0; i<arraySize; i++){
    containerArray[i] = checkColumn(i);
  }
  return containerArray;
}

var checkDiagonals = function(array){

  var diagonalOne = function(){
    var diagonalOneArray = [];
    var convertOne = function(arrayNum){
      var convert1 = [];
      for(var num=0; num<array[0].length; num++){
        convert1[num] = array[arrayNum][num][num];
      }
      return convert1;
    }
    for(var i=0; i<array.length; i++){
      diagonalOneArray[i] = convertOne(i);
    }
    return diagonalOneArray;
  }
  var diagonalTwo = function(){
    var gameLength = array[0].length;
    var diagonalTwoArray = [];

    var convertTwo = function(arrayNum){
      var convert2 = [];
      for(var num=0; num<array[0].length; num++){
        convert2[num] = array[arrayNum][num][gameLength-num-1];
      }
      return convert2;
    }
    for(var i=0; i<array.length; i++){
      diagonalTwoArray[i] = convertTwo(i);
    }
    return diagonalTwoArray;
  }
  var array1 = diagonalOne();
  var array2 = diagonalTwo();
  return [array1, array2];
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
    game.gameRounds += 1;
    $('div.rounds').text('Round: '+ game.gameRounds);
    $('#winnerText').text('DRAW!!! Press Game Reset')
  }
}

var arrayMaker = function(length,range1,range2){
  var wholeArray = [];

  var rows = function(i,length,range1,range2){
    var tempArray = [];
    for(var j=0; j<length; j++){
      tempArray[j]=game.gameArray[i+range1][j+range2];
    }
    return tempArray;
  }
    for(var i=0; i<length;i++){
      wholeArray[i] = rows(i,length, range1, range2);
    }
    return wholeArray;
}

var arrayWinnerCheck = function(symbol, array){
  var arraySize = array.length;
  var arrayLength = array[0].length;
  var columnArray = checkColumns(array);
  var diagonalArray = checkDiagonals(array);

  var checkSymbol = function(element){
    return element === symbol;
  }

  for(var j=0; j<arraySize; j++){
    for(var i=0; i<arrayLength; i++){
      if((array[j][i].every(checkSymbol)) || (columnArray[j][i].every(checkSymbol))){
        gameWinner(symbol);
        game.winner = 1;
        return true;
      }
    }
  }
  for(var j=0; j<diagonalArray.length; j++){
    for(var i=0; i<diagonalArray[0].length; i++){
      if(diagonalArray[j][i].every(checkSymbol)){
        gameWinner(symbol);
        game.winner = 1;
        return true;
      }
    }
  }
}

var checkForWinner = function(symbol){
  var mainArrayCheck = [];

  if(game.gameSize === 3){
    mainArrayCheck = [game.gameArray];
    arrayWinnerCheck(symbol, mainArrayCheck);
  }else if(game.gameSize === 4){
    var array1 = arrayMaker(3,0,0);
    var array2 = arrayMaker(3,0,1);
    var array3 = arrayMaker(3,1,0);
    var array4 = arrayMaker(3,1,1);
    mainArrayCheck = [array1, array2, array3, array4];
    arrayWinnerCheck(symbol, mainArrayCheck);
  }else if(game.gameSize === 5){
    var array1 = arrayMaker(4,0,0);
    var array2 = arrayMaker(4,0,1);
    var array3 = arrayMaker(4,1,0);
    var array4 = arrayMaker(4,1,1);
    mainArrayCheck = [array1, array2, array3, array4];
    arrayWinnerCheck(symbol, mainArrayCheck);
  }else if(game.gameSize === 6){
    var array1 = arrayMaker(5,0,0);
    var array2 = arrayMaker(5,0,1);
    var array3 = arrayMaker(5,1,0);
    var array4 = arrayMaker(5,1,1);
    mainArrayCheck = [array1, array2, array3, array4];
    arrayWinnerCheck(symbol, mainArrayCheck);
  }
  if(game.count === 0){
    gameWinner(' ');
  }
}
