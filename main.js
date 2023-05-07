let number = Math.trunc(Math.random() * 20);
document.querySelector('.number').value = number
let score = 20;
document.querySelector('.score').textContent = score;
//Again
document.querySelector('.btn').addEventListener('click', function(){
    number = Math.trunc(Math.random() * 20) ;

    document.querySelector('.number').textContent = '?';
    document.querySelector('.content').style.backgroundColor = '#3b0764';
    document.querySelector('.boxNumber').style.width = '60px';
    document.querySelector('.message').textContent = 'Start guessing...';

    score = 20;
    document.querySelector('.score').textContent = score;
})
//function message    
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

let highScore = 0;
document.querySelector('.btn-check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.input-guess').value);
    if (!guess){
        displayMessage('⛔ No number!')
    }else if (guess !== number){
        if(score > 1){
            displayMessage(guess > number ? 'Too high':'Too low')
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost!';
            document.querySelector('.score').textContent = 0;
        }

    }else if (guess === number && score > 1){
        displayMessage('Correct number!')
        document.querySelector('.number').textContent = number;
        document.querySelector('.content').style.backgroundColor = '#4ade80'
        document.querySelector('.boxNumber').style.width = '160px'
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
}) 




