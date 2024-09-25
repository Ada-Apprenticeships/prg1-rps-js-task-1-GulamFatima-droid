function rockPaperScissors(player1, player2) {

  const gameChoices = {
    rock : {
      weaknesses : ['paper','spock']
    },
    paper : {
      weaknesses : ['scissors','lizard']
    },
    scissors : {
      weaknesses : ['rock','spock']
    },
    lizard : {
      weaknesses : ['rock','scissors']
    },
    spock : {
      weaknesses : ['lizard','paper']
    }
  }
  

  const player1Choice = gameChoices[player1];
  const player2Choice = gameChoices[player2];


  console.log(player1Choice['weaknesses']);

  if(player1 === player2){
    return 'draw';
  }else if(player1Choice['weaknesses'].includes(player2) ){
    return 'player2'
  }else{
    return 'player1'
  }
     
}










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}