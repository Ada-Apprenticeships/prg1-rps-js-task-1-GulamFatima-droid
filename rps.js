function rockPaperScissors(player1, player2) {

  const gameRules = {
      rockWeaknesses : ['paper','spock'],
      paperWeaknesses : ['scissors','lizard'],
      scissorsWeaknesses : ['rock','spock'],
      lizardWeaknesses : ['rock','scissors'],
      spockWeaknesses : ['lizard','paper']    
  }

  if(player1 === player2){
    return 'draw';
  }else if(gameRules[`${player2}Weaknesses`].includes(player1) ){
    return 'player1'
  }
  return 'player2'
  
     
}






// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}