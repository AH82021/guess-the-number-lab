const game = {
  title: 'Guess the Number!',
  biggestNum: null,
  smallestNum: null,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.setRange()
    // find the sectrum number in the range
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    do {
    this.prevGuesses.push(this.getGuess());
    this.resetRange();
    this.render();  
    } while (this.prevGuesses[this.prevGuesses.length-1] !== this.secretNum);
  
    },
    getGuess:function() {
      let input;
      do{
        input = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`));
      }
    while(isNaN(input) || input < this.smallestNum || input > this.biggestNum)
    return input;
    },
  
    setRange: function() {

      do {
        this.smallestNum = parseInt(
          prompt(
            `Enter a number - this will be the low end of the range.`
          )
        );
      } while (isNaN(this.smallestNum)) 
  
      do {
        this.biggestNum = parseInt(
          prompt(
            `Enter a number that is ${this.smallestNum + 2} or more. This will be the high end of the range.`
          )
        );
      } while (  
        isNaN(this.biggestNum) || 
        this.biggestNum < this.smallestNum + 2 
      )
    },
    resetRange: function () {
      // If the last number the player entered is more than secretNum
      if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
        // set the biggestNum equal to the player's last guess
        this.biggestNum = this.prevGuesses[this.prevGuesses.length - 1];
      } else {
        // otherwise set the smallestNum equal to the player's last guess
        this.smallestNum = this.prevGuesses[this.prevGuesses.length - 1]
      }
    },
    render: function(){
      let text;
      if(this.prevGuesses[this.prevGuesses.length-1] === this.secretNum) {
        text =`You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? "guesses" : "guess"}`;
      } else{
        text = `Your guess is too" ${this.prevGuesses[this.prevGuesses.length-1] > this.secretNum ? "high" : "low"}\nPrevious guesses: ${this.prevGuesses.join(",")}`;
      }
      alert(text);
    },
    

  };
  
  game.play();

