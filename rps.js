function rockPaperScissors(player1, player2) {
  const rock = {
    weakness : 'paper'
  }
  const paper = {
    weakness : 'scissors'
  }
  const scissors = {
    weakness : 'rock'
  }


  console.log(player1['weakness']);

  if(player1 === player2){
    return 'draw';
  }else if(player1['weakness'] === player2 ){
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