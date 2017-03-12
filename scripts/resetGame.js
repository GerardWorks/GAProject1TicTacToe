var resetListener = function(){
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
          $('#winnerText').text('Player 1 Turn');
          editGameArray($clickedArea, 'O');
          checkForWinner('O')
        }
      }else{
        return;
      }
    }else{
      checkForWinner(' ');
    }
});
}
