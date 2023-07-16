function todaysDate() {
    const date = new Date();
    console.log(date);
}
//todaysDate();

function perfectSquare(num) {
    const root = Math.sqrt(num);
    if (num === root * root) {
        console.log("true");
        return true;
    }
    else {
        console.log("false");
        return false;
    }
}
//perfectSquare(16)

function printEven(num) {
    for (let i = 2; i <= num; i+=2) {
        console.log(i);
    }
}
//printEven(50);

function fibonacci(len) {
    const fibs = [];
    if (len === 0) {
        return;
    }
    else if (len === 1) {
        console.log(0);
        return;
    }
    else if (len === 2) {
        console.log(0);
        console.log(1);
        return;
    }
    console.log(0);
    console.log(1);
    fibs[0] = 0;
    fibs[1] = 1;
    for (let i = 2; i < len; i++) {
        fibs[i] = fibs[i-1] + fibs[i-2];
        console.log(fibs[i]);
    }
}
//fibonacci(100);

function avgArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum+=arr[i];
    }
    console.log(sum / arr.length);
}
//avgArray([4, 5, 12, -30])

function maxVal(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}
//maxVal([4, 5, 12, -30])

function minVal(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
}
//minVal([4, 5, 12, -30])

function isVowel(char) {
    if (char === 'a' || char === 'e' || char === 'i'
        || char === 'o' || char === 'u') {
            return true;
        }
}

function countVowels(word) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (isVowel(word[i].toLowerCase())) {
            count++;
        }
    }
    console.log(count);
}
//countVowels("Ezra")

function add(num1, num2) {
    console.log(num1 + num2);
}
//add(9, 10)

function multiply(num1, num2) {
    console.log(num1 * num2);
}
//multiply(9, 10);

function sortStrings(arr) {
    arr.sort();
    console.log(arr);
}
//sortStrings(["hello", "a", "ezra", "banana"])

function sortNums(arr, order) {
    if (order === "asc") {
        arr.sort(function(a, b){return a - b});
    }
    else {
        arr.sort(function(a, b){return b - a});
    }
    console.log(arr);
}
//sortNums([5, 10, 3, 8, 30, 17], "asc");
//sortNums([5, 10, 3, 8, 30, 17], "desc");

function reverseNum(num) {
    console.log(parseFloat(num.toString().split('').reverse().join('')));
}
//reverseNum(54321);

function camelCase(sentence) {
    let curr = "";
    wordArray = sentence.split(' ');
    for (let i = 0; i < wordArray.length; i++) {
        wordArray[i] = wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
    }
    console.log(wordArray.join(' '));
}
//camelCase("hello my name is ezra");

function returnOccurences(word, letter) {
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }
    console.log(count);
}
//returnOccurences('because', 'e');

function filterArray(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != target) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
}
//filterArray(["target", "trget", "target", "arget"], "target");
//filterArray([5, 6, 7, 8, 8, 8, 9], 8);

function greaterThanTen(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 10) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
}
//greaterThanTen([1, 10, 4, 5, 20]);

function filterByID(arr, ID) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id != ID) {
            arr.splice(i, 1);
            i--;
        }
    }
    console.log(arr);
}
//filterByID([{name:"Ezra", id:"5"}, {name:"Cameron", id:"3"}], "7");

function getObjByID(arr, ID) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === ID) {
            console.log(arr[i].name);
        }
    }
}
//getObjByID([{name:"Ezra", id:"5"}, {name:"Cameron", id:"3"}], "5");

function postalCode(city) {
    switch (city) {
        case "Weston" :
            console.log("02493");
            break;
        case "Boston" :
            console.log("02108");
            break;
        case "Lisbon" : 
            console.log("1150");
            break;
        default:
            console.log("Enter different city");
            break;
         
    }
}
//postalCode("Boston");