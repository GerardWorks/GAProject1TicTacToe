var $gameArea = $('.gameArea');
var checkWin = false;
var game = {
            gameArray : [],
            winner : 0,
            player : "player1",
            count : 0,
            columnArray : [],
            diagonalArray : [],
            gameSize : 0,
            player1Score : 0,
            player2Score : 0,
            gameRounds : 0
            };

var createRow = function(){
  var arrayContainer = [];
  var emptyString = " ";

  for(var num = 0; num < game.gameSize ; num++){
    arrayContainer[num] = emptyString;
  }
  return arrayContainer;
}
var gameBoard = function(gameSize){
  game.gameSize = Math.sqrt(gameSize);
  game.count = gameSize;

  for(var i=0; i < game.gameSize; i++){
    game.gameArray[i] = createRow();
  }
  appendToDom(game.gameArray);
}

var gridMath = function(){
  if(game.gameSize === 3){
    return 100/3;
  }else if(game.gameSize === 4){
    return 100/4;
  }else if(game.gameSize === 5){
    return 100/5;
  }else if(game.gameSize === 6){
    return 100/6;
  }
}

var appendToDom = function(array){
  var widthGrid = gridMath().toString();
  console.log(widthGrid);

  var chainingElements = function(row, column){
    var $outerDiv = $('<div>')
                    .addClass('gameButton')
                    .data('values', row+''+column)
                    .css("width", widthGrid+'%')
                    .css('padding-top', widthGrid+'%');
    var $innerDiv = $('<div>')
                    .addClass('first');
    var $insideDiv = $('<div>')
                    .addClass('second');

    return $outerDiv.append($innerDiv.append($insideDiv));
  }

  for(var i = 0; i < game.gameSize; i++){
    for(var num = 0; num < game.gameSize ; num++){
      $gameArea.append(chainingElements(i,num));
    }
  }
}

var editGameArray = function(values, playerSymbol){
  var valuesArray = values.split('');
  game.gameArray[Number(valuesArray[0])][Number(valuesArray[1])] = playerSymbol;
}
var gameReset = function(gridSize){
  $('.gameButton').remove();
  game.gameArray = [];
  game.winner = 0;
  game.player = "player1";
  game.columnArray= [];
  game.diagonalArray= [];
  checkWin = false;
  $('#winnerText').text('Player 1 Start');
  gameBoard(gridSize);
  resetListener();
}
$('#grid3').on('click', function(){
  gameReset(9);
});
$('#grid4').on('click', function(){
  gameReset(16);
});
$('#grid5').on('click', function(){
  gameReset(25);
});
$('#grid6').on('click', function(){
  gameReset(36);
});
$('.resetButton').on('click', function(){
  gameReset(9);
});

gameBoard(9);

$('.gameButton').on('click', function(e){
  var $clickedArea = $(this).data('values');
  var array = $clickedArea.split('');
  var gameArrayCheck = game.gameArray[array[0]][array[1]];
  var $text = $(this).text();
  var picture1 = $('<img>')
                  .attr('src', 'images/rasengan.jpg')
                  .addClass('animateSpinRasengan');
  var picture2 = $('<img>')
                  .attr('src', 'images/chidori.gif' )
                  .addClass('animateSpinSharingan');

    if(game.count>0){
      if(game.player==="player1" && game.winner ===0 && gameArrayCheck === " "){
       checkWin = checkForWinner('X');
        if(!checkWin){
          game.count--;
          $(e.target).append(picture1);
          game.player = "player2";
          $('#winnerText').text('Player 2 Turn');
          editGameArray($clickedArea, 'X');
          checkForWinner('X')
        }
      }else if(game.player==="player2" && game.winner ===0 && gameArrayCheck === " "){
       checkWin = checkForWinner('O');
        if(!checkWin){
          game.count--;
          $(e.target).append(picture2);
          game.player = "player1";
          checkForWinner('O')
          $('#winnerText').text('Player 1 Turn');
          editGameArray($clickedArea, 'O');
        }
      }else{
        return;
      }
    }else{
      checkForWinner(' ');
    }
});
