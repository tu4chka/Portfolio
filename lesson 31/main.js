// // let str = "Привет";
// // let str2 = 'Одинарные кавычки тоже подойдут';
// // let phrase = Обратные кавычки позволяют встраивать переменные ${str};

// // let name = "Иван";

// // // Вставим переменную
// // alert( Привет, ${name}! ); // Привет, Иван!

// // // Вставим выражение
// // alert( результат: ${1 + 2} ); // результат: 3


// // typeof undefined // "undefined"

// // typeof 0 // "number"

// // typeof 10n // "bigint"

// // typeof true // "boolean"

// // typeof "foo" // "string"

// // typeof Symbol("id") // "symbol"

// // typeof Math // "object"  (1)

// // typeof null // "object"  (2)

// // typeof alert // "function"  (3)

// // alert( Number("   123   ") ); // 123
// // alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
// // alert( Number(true) );        // 1
// // alert( Number(false) );       // 0

let body = document.querySelector('body')
body.insertAdjacentHTML('afterbegin',`
    <h1>Learning JavaScript</h1>
    <h1>Learning JavaScript</h1>
    <button onclick='changeColor()'>Change color</button>
`)
let mainHeading = document.querySelector('h1')
let changeBTN = document.querySelector('button')

mainHeading.style.color = 'blue'

function changeColor () {
    let red = Math.round(Math.random()*255)
    // alert(red)
    mainHeading.style.color = `rgb(${red},21,211)`
    mainHeading.style.fontSize = '50px'
    changeBTN.innerHTML = mainHeading.style.color
    
}

function integer2() {
    let a = Number(prompt('input number'));
    var m = a/1000; 
    alert(m) 
}

function integer3(){
    let a = Number(prompt('input number'))
    var m = a/1024;
    alert(m)
}
function integer1(){
    let a = Number(prompt('input number'))
    var l = a/1
    alert(l)
}