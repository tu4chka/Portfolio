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

function begin1() {
    let a = Number(prompt('input number'))
    alert(`Perimetr = ${4*a}`)
}

function begin2(){
    let a = Number(prompt('input number'))
    alert(`Area = ${a**2}`)
}

function begin6() {
    let a = Number(prompt('input number'))
    alert(`Lenth= ${2*3.14*a}`)
    alert(`Area = ${3.14*a**2}`)
}

function begin12() {
    let a = Number(prompt('input number'))
    let b = Number(prompt('введите значение катета b'))
    let c = (a**2+b**2)**0.5
    alert(`Гипотенуза= ${(a**2+b**2)**0.5}`)
    alert(`Периметр = ${a+b+c}`)
    }

    function begin15() { 
    let s = Number(prompt('задайте площадь круга'))
    let d = (4*s/3.14)**0.5
    let l = 3.14*d
    alert(`Площадь круга= ${(3.14*d**2)/4}`)
    alert(`Диаметр= ${l/3.14}`)
    alert(`Длина окружности = ${3.14*d}`)
    }

    function begin16() {
     let x1 = Number(prompt('input number'))
     let x2 = Number(prompt('input number'))
     alert(`jkmok ${x1-x2}`)
    }

    function begin7 () {
        let R = Number(prompt('input'))
        alert(`L = ${2*3.14*R}`)
        alert(`S = ${3.14*R**2}`)
    }
    function begin17() {
        let x1 = Number(prompt('введите значение точки А по х'))
        let y1 = Number(prompt('введите значение точки А по y'))
        let x2 = Number(prompt('введите значение точки B по х'))
        let y2 = Number(prompt('введите значение точки B по y'))
        let x3 = Number(prompt('введите значение точки C по х'))
        let y3 = Number(prompt('введите значение точки C по y'))
        let m = ((x3-x1)**2+(y3-y1)**2)**0.5
        let n = ((x3-x2)**2+(y3-y2)**2)**0.5
        alert(`AC = ${((x3-x1)**2+(y3-y1)**2)**0.5}`)
        alert(`BC = ${((x3-x2)**2+(y3-y2)**2)**0.5}`)
        alert(`AC+BC = ${m+n}`)
    }
    function begin18() {
        let x1 = Number(prompt('введите значение точки А по х'))
        let y1 = Number(prompt('введите значение точки А по y'))
        let x2 = Number(prompt('введите значение точки B по х'))
        let y2 = Number(prompt('введите значение точки B по y'))
        let x3 = (x1+x2)/2
        let y3 = (y1+y2)/2
        let m = ((x3-x1)**2+(y3-y1)**2)**0.5
        let n = ((x3-x2)**2+(y3-y2)**2)**0.5
        
        alert(`AC = ${((x3-x1)**2+(y3-y1)**2)**0.5}`)
        alert(`BC = ${((x3-x2)**2+(y3-y2)**2)**0.5}`)
        alert(`AC*BC = ${m*n}`)
    }
    function begin19() {
        let x1 = Number(prompt('введите значение точки А по х'))
        let y1 = Number(prompt('введите значение точки А по y'))
        let x2 = Number(prompt('введите значение точки B по х'))
        let y2 = Number(prompt('введите значение точки B по y'))
        let q = ((x2-x1)**2+(y2-y1)**2)**0.5
        let m = 4
        
        alert(`P = ${2*(q+m)}`)
        alert(`S = ${q*m}`)
     
    }
    function begin20() {
        let x1 = Number(prompt('введите значение точки А по х'))
        let y1 = Number(prompt('введите значение точки А по y'))
        let x2 = Number(prompt('введите значение точки B по х'))
        let y2 = Number(prompt('введите значение точки B по y'))   
        alert(`L = ${((x2-x1)**2+(y2-y1)**2)**0.5}`)
    }
    function begin21() {
        let x1 = Number(prompt('введите значение точки А по х'))
        let y1 = Number(prompt('введите значение точки А по y'))
        let x2 = Number(prompt('введите значение точки B по х'))
        let y2 = Number(prompt('введите значение точки B по y'))  
        let x3 = Number(prompt('введите значение точки C по х'))
        let y3 = Number(prompt('введите значение точки C по y')) 
        let a = ((x2-x1)**2+(y2-y1)**2)**0.5
        let b = ((x3-x2)**2+(y3-y2)**2)**0.5
        let c = ((x3-x1)**2+(y3-y1)**2)**0.5
        let p = (a+b+c)/2
        alert(`S = ${(p*(p-a)*(p-b)*(p-c))**0.5}`)
    }