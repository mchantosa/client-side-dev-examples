const words = ['apple', 'banana', 'orange', 'pear'];

class Game {
  static ALLOWED_WRONG_GUESSES = 6;
  constructor(){
    this.incorrectGuesses = 0;
    this.lettersGuessed = [];
    this.word = this.randomWord().toUpperCase();
    this.spaces = document.querySelector('#spaces');
    this.guesses = document.querySelector('#guesses');
    this.apples = document.querySelector('#apples');
    this.addSpaces();
  }
  randomWord(){
    const getRandomIndex = Math.floor(Math.round()*words.length)
    return words.splice(getRandomIndex, 1)[0];
  }
  addSpaces(){
    for(let i = 0; i < this.word.length; i++){
      this.spaces.append(document.createElement('SPAN'));
    }
  }
  addGuessed(letter){
    const span = document.createElement('SPAN');
    span.textContent = letter;
    this.guesses.append(span);
  }
  isLetter(letter){
    return (letter.length === 1) 
      && (97 <= letter.charCodeAt(0)) 
      && (letter.charCodeAt(0) <= 122)
  }
  notYetPlayed(letter){
    return !this.lettersGuessed.indexOf(letter) >= 0
  }
  inWord(letter){
    return this.word.indexOf(letter) >= 0
  }
  updateSpaces(letter){
    this.word.split('').forEach((ltr, index)=>{
      const space = this.spaces.children[index+1];
      if(ltr === letter){
        space.textContent = letter;
      }
    })
  }
  updateApples(){
    this.apples.className = '';
    this.apples.className = 'guess_'+this.incorrectGuesses;
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  const body = document.querySelector('body');
  
  body.addEventListener('keyup', (e)=>{
    let key = e.key
    if(game.isLetter(key)){
      const letter = key.toUpperCase();
      if(game.notYetPlayed(letter)){
        game.lettersGuessed.push(letter);
        game.addGuessed(letter)
        if(game.inWord(letter)){
          game.updateSpaces(letter)
        } else{
          game.incorrectGuesses+=1;
          game.updateApples()
        }
      }
    }
    console.log(`Word: ${game.word}`)
    console.log(`Letters guessed: ${game.lettersGuessed}`)
    console.log(`Incorrect guesses: ${game.incorrectGuesses}`)
  })


})