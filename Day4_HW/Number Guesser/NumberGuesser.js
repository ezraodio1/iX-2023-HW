let dom;
dom = document;

function onButtonClick() {
    let random = Math.floor(Math.random() * 11);
    let guess = document.getElementById('guess').value;
    let output = document.getElementById('output');
    if (random - guess === 0) {
        console.log("Yay! You guessed correctly.");
        output.innerHTML = `Your guess of ${guess} was correct!`
    } else {
        console.log(`Your guess of ${guess} was incorrect. The correct answer was ${random}.`)
        output.innerHTML = `Your guess of ${guess} was incorrect. The correct answer was ${random}.`
    }
    document.getElementById('guess').value = '';
}