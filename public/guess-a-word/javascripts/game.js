const words = ['apple', 'banana', 'orange', 'pear', 'cantaloupe', 'grape', 'watermelon', 'kiwi'];

class Game {
  static ALLOWED_WRONG_GUESSES = 6;
  
  constructor(){
    this.incorrectGuesses = 0;
    this.lettersGuessed = [];
    this.word = this.randomWord().toUpperCase();
    this.lettersLeft = this.word.length;
    this.body = document.querySelector('body');
    this.spaces = document.querySelector('#spaces');
    this.guesses = document.querySelector('#guesses');
    this.apples = document.querySelector('#apples');
    this.message = document.querySelector('#message')
    this.replay = document.querySelector('#replay');
    this.addSpaces();
  }
  randomWord(){
    //const randomIndex = Math.floor(Math.round()*words.length)
    const word = words.splice(0, 1)[0];
    console.log(word)
    return word;
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
    return this.lettersGuessed.indexOf(letter) === -1;
  }
  inWord(letter){
    return this.word.indexOf(letter) >= 0
  }
  updateSpaces(letter){
    this.word.split('').forEach((ltr, index)=>{
      const space = this.spaces.children[index+1];
      if(ltr === letter){
        space.textContent = letter;
        this.lettersLeft--;
      }
    })
  }
  updateApples(){
    this.apples.className = '';
    this.apples.className = 'guess_'+this.incorrectGuesses;
  }
  updateMessage(msg){
    this.message.textContent = msg;
  }
  handleLoss(){
    this.body.removeEventListener('keyup', this.letterHandler);
    this.body.classList.add('lose');
    this.updateMessage("Sorry! You're out of guesses");
  }
  handleWin(){
    this.body.removeEventListener('keyup', this.letterHandler);
    this.body.classList.add('win');
    this.updateMessage("You win!");
  }
  resetFeature(feature){
    const children = feature.children;
    for (let index = children.length-1; index > 0; index--){
      children[index].remove();
    }
  }
  resetMessage(){
    this.message.textContent = '';
  }
  resetApples(){
    this.apples.className = '';
  }
  resetGameStatus(){
    this.body.className = '';
  }
  reset(){
    this.incorrectGuesses = 0;
    this.lettersGuessed = [];
    this.word = this.randomWord().toUpperCase();
    this.lettersLeft = this.word.length;
    this.resetFeature(this.spaces);
    this.resetFeature(this.guesses);
    this.resetMessage();
    this.resetApples();
    this.resetGameStatus();
    this.addSpaces();
  }
  play(){
    this.body.addEventListener('keyup', (e)=>{
      this.letterHandler(e);
    })
    this.replay.addEventListener('click', (e)=>{
      e.preventDefault();
      this.reset();
    })
  }
  letterHandler(e){
    let key = e.key
    if(this.isLetter(key)){
      const letter = key.toUpperCase();
      if(this.notYetPlayed(letter)){
        this.lettersGuessed.push(letter);
        this.addGuessed(letter)
        if(this.inWord(letter)){
          this.updateSpaces(letter)
        } else{
          this.incorrectGuesses+=1;
          this.updateApples()
        }
      }
    }
    if(this.incorrectGuesses === Game.ALLOWED_WRONG_GUESSES){
      this.handleLoss()
    } else if (this.lettersLeft === 0){
      this.handleWin()
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('content loaded...')
  const game = new Game();
  game.play();
})