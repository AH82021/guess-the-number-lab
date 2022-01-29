const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  getGuess:function() {
    let input;
    do{
      input = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
    }
  while(typeof input !=='string' && input >= this.smallestNum && input <= this.biggestNum){
    
  }
  return input;
  },
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    do {
    this.prevGuesses.push(getGuess)
        
    } while (this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum);
    }
    

  }
  
console.log(game)

game.getGuess()
console.log(game.prevGuesses)

