function rockPaperScissors(player1, player2) {

  const gameChoices = {
    rock : {
      weakness : 'paper'
    },
    paper : {
      weakness : 'scissors'
    },
    scissors : {
      weakness : 'rock'
    }
  }
  

  const player1Choice = gameChoices[player1];
  const player2Choice = gameChoices[player2];


  console.log(player1Choice['weakness']);

  if(player1 === player2){
    return 'draw';
  }else if(player1Choice['weakness'] === player2 ){
    return 'player2'
  }else{
    return 'player1'
  }
     
}

console.log(rockPaperScissors('paper','scissors'));










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}