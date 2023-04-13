const words = ['apple', 'banana', 'orange', 'pear'];

class Game {
  static ALLOWED_WRONG_GUESSES = 6;
  constructor(){
    this.incorrectGuesses = 0;
    this.lettersGuessed = [];
    this.word = this.randomWord();
  }
  randomWord(){
    const getRandomIndex = Math.floor(Math.round()*words.length)
    return words.splice(getRandomIndex, 1)[0];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  const spaces = document.querySelector('#spaces');
  for(let i = 0; i < game.word.length; i++){
    const span = document.createElement('SPAN')
    span.textContent = ""
    spaces.append(span);
  }
})