const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'}
]

let dom;
dom = document;
let oldMovie = -1;
let newMovie = -2;
let description = document.getElementById("description");

resetForm();

function showHint() {
    let hint = document.getElementById("hint");
    hint.innerHTML = movies[newMovie].hint;
    hint.style.color = 'black';
    hint.style.fontWeight = 'normal';
}

function onSubmitClick() {
    let guess = document.getElementById("guess").value;
    if (guess.toLowerCase() === movies[newMovie].title.toLowerCase()) {
        hint.innerHTML = `Congratulations, your last guess of "${guess}" was correct!`
        hint.style.color = "green";
        hint.style.fontWeight = "bold";
    } else {
        hint.innerHTML = `The correct answer was actually "${movies[newMovie].title}"`;
        hint.style.color = "red";
    }
    resetForm();
}

function resetForm() {
    newMovie = Math.floor(Math.random() * movies.length);
    while (newMovie === oldMovie) {
        newMovie = Math.floor(Math.random() * movies.length);
    }
    oldMovie = newMovie;
    description.innerHTML = movies[newMovie].explanation;
    document.getElementById("guess").value = '';
}