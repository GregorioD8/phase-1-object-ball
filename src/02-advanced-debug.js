console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // gameKey iterates through home and away
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      //q: are you ABSOLUTELY SURE what 'teamKey' is? 
      //a: teamKey are the keys colors, players and teamName
      // use debugger to find out!

      console.log(teamKey)
      debugger

      //q: what is 'data' at each loop through out this block?
      //a: the 'data' is the value from each key in the nested object
      //q: when will the following line of code work and when will it break?
      //a: it will work with brackets and break with perentheses because its an object that contains keys with a string that has a space or symbols 
      //let data = teamObj.player

      
      let data = teamObj[teamKey]
      console.log(data)
      debugger
      
    
      
    
  }
}

}