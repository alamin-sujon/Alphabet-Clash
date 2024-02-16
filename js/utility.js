function hideElementById(elementId) {
    document.getElementById(elementId).classList.add('hidden');
}

function showElementById(elementId) {
    document.getElementById(elementId).classList.remove('hidden');
}
function setBgColor(elementId) {
    document.getElementById(elementId).classList.add('bg-orange-400');
}
function removeBgColor(elementId) {
    document.getElementById(elementId).classList.remove('bg-orange-400');
}

function gameStart() {
    const alphabate = getRandomAlphebate();
    document.getElementById('alphabate').innerText = alphabate;
    setBgColor(alphabate)
}

function setElementByValue(elementId, value) {
    document.getElementById.innerText = value;
}

function getRandomAlphebate() {
    const str = 'abcdefghijklmnopqrstuvwxyz';
    const arr = str.split('');
    const num = Math.random() * 25
    const index = Math.round(num);
    return arr[index];
}

function play() {

   
    hideElementById('home');
    showElementById('play');

   

    gameStart();
}

function getIntValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    return parseInt(elementText);
}

function setValue(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function updateLife(){
    hideElementById('play');
    showElementById('life-score');

    // Get Score Value
    const score = getIntValueById('score');
    const finalScore = document.getElementById('final-score');
    finalScore.innerText = score;
}

function countScore(event) {
    const press = event.key;
 

    const given = document.getElementById('alphabate').innerText;
     if(press === 'Escape'){
         updateLife();
     }
     if (press === given) {
        console.log('You got a point');
        removeBgColor(press);
        // Update Score

        const score = getIntValueById('score')
        const updateScore = document.getElementById('score');
        updateScore.innerText = score + 1;
        gameStart();
    }
    else {
        const life = getIntValueById('life');
        const lifeText = document.getElementById('life');
        lifeText.innerText = life - 1;
        if (life - 1 === 0) {
           updateLife();
        }

    }

}

function gameOver(){
    hideElementById('life-score');
    setValue('life', 5)
    setValue('score', 0);
    const id = document.getElementById('alphabate').innerText
    removeBgColor(id);
    play();
}

document.addEventListener('keyup', countScore);

