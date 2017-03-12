var $gameArea = $('.gameArea');
var checkWin = false;
var game = {
            gameArray : [],
            winner : 0,
            player : "player1",
            count : 0,
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
  return appendToDom(game.gameArray);
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

var chainingElements = function(row, column, widthGrid){
  var $outerDiv = $('<div>')
  .addClass('gameButton')
  .css("width", widthGrid+'%')
  .css('padding-top', widthGrid+'%');
  var $innerDiv = $('<div>')
  .addClass('first');
  var $insideDiv = $('<div>')
  .addClass('second')
  .data('values', row+''+column);

  return $outerDiv.append($innerDiv.append($insideDiv));
}

var appendToDom = function(array){
  var widthGrid = gridMath().toString();

  for(var i = 0; i < game.gameSize; i++){
    for(var num = 0; num < game.gameSize ; num++){
      $gameArea.append(chainingElements(i, num, widthGrid));
    }
  }
  return;
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
}

$('.buttonHolder').on('click', function(e){
  // debugger;
  var targetId = e.target.id;

  if(targetId === "grid3"){
    gameReset(9);
  }else if(targetId === "grid4"){
    gameReset(16);
  }else if(targetId === "grid5"){
    gameReset(25);
  }else if(targetId === "grid6"){
    gameReset(36);
  }else if(targetId === "resetGame"){
    gameReset(9);
  }
});

var editGameArray = function(valuesArray, playerSymbol){
  game.gameArray[Number(valuesArray[0])][Number(valuesArray[1])] = playerSymbol;
}

gameBoard(9);

$('.gameArea').on('click', function(e){
  // debugger;
  var $clickedArea = $(e.target).data('values').split('');
  var gameArrayCheck = game.gameArray[$clickedArea[0]][$clickedArea[1]];

  var picture1 = $('<img>')
                  .attr('src', 'images/rasengan.jpg')
                  .addClass('animateSpinRasengan');
  var picture2 = $('<img>')
                  .attr('src', 'images/chidori.gif' )
                  .addClass('animateSpinSharingan');

    if(game.count>0){
      if(game.player === "player1" && game.winner === 0 && gameArrayCheck === " "){
       checkWin = checkForWinner('X');
        if(!checkWin){
          game.count--;
          $(e.target).append(picture1);
          game.player = "player2";
          $('#winnerText').text('Player 2 Turn');
          editGameArray($clickedArea, 'X');
          checkForWinner('X');
        }
      }else if(game.player==="player2" && game.winner ===0 && gameArrayCheck === " "){
       checkWin = checkForWinner('O');
        if(!checkWin){
          game.count--;
          $(e.target).append(picture2);
          game.player = "player1";
          $('#winnerText').text('Player 1 Turn');
          editGameArray($clickedArea, 'O');
          checkForWinner('O');
        }
      }
    }
});
