
var calculator = document.createElement('div')
calculator.classList.add('calculator')

var input = document.createElement('input')
input.id = 'result';
input.type = 'text';
input.name = 'display';
calculator.append(input)

//wrap one
var wrapOne = document.createElement('div')
calculator.append(wrapOne)

var eqlBtn = document.createElement('button')
eqlBtn.id = '=';
eqlBtn.innerHTML = "=";
wrapOne.append(eqlBtn)

var clrBtn = document.createElement('button')
clrBtn.id = 'c';
clrBtn.innerHTML = "c";
wrapOne.append(clrBtn)

//wrap two
var wrapTwo = document.createElement('div')
calculator.append(wrapTwo)

var btn7 = document.createElement('button')
btn7.id = '7'
btn7.innerHTML = "7"
wrapTwo.append(btn7)

var btn8 = document.createElement('button')
btn8.id = '8'
btn8.innerHTML = "8"
wrapTwo.append(btn8)

var btn9 = document.createElement('button')
btn9.id = '9'
btn9.innerHTML = "9"
wrapTwo.append(btn9)

var btnDivide = document.createElement('button')
btnDivide.id = '/'
btnDivide.innerHTML = "/"
wrapTwo.append(btnDivide)

// wrap three
var wrapThree = document.createElement('div')
calculator.append(wrapThree)

var btn4 = document.createElement('button')
btn4.id = '4'
btn4.innerHTML = "4"
wrapThree.append(btn4)

var btn5 = document.createElement('button')
btn5.id = '5'
btn5.innerHTML = "5"
wrapThree.append(btn5)

var btn6 = document.createElement('button')
btn6.id = '6'
btn6.innerHTML = "6"
wrapThree.append(btn6)

var btnMultiply = document.createElement('button')
btnMultiply.id = '*'
btnMultiply.innerHTML = "*"
wrapThree.append(btnMultiply)

// wrap four
var wrapFour = document.createElement('div')
calculator.append(wrapFour)

var btn1 = document.createElement('button')
btn1.id = '1'
btn1.innerHTML = "1"
wrapFour.append(btn1)

var btn2 = document.createElement('button')
btn2.id = '2'
btn2.innerHTML = "2"
wrapFour.append(btn2)

var btn3 = document.createElement('button')
btn3.id = '3'
btn3.innerHTML = "3"
wrapFour.append(btn3)

var btnMinus = document.createElement('button')
btnMinus.id = '-'
btnMinus.innerHTML = "-"
wrapFour.append(btnMinus)

// wrap five
var wrapFive = document.createElement('div')
calculator.append(wrapFive)

var btn0 = document.createElement('button')
btn0.id = '0'
btn0.innerHTML = "0"
wrapFive.append(btn0)

var btnDecimal = document.createElement('button')
btnDecimal.id = '.'
btnDecimal.innerHTML = "."
wrapFive.append(btnDecimal)

var btnPlus = document.createElement('button')
btnPlus.id = '+'
btnPlus.innerHTML = "+"
wrapFive.append(btnPlus)


var main = document.getElementsByClassName('main-container')[0]
main.append(calculator)

//adding num class name for every button that is a number
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
nums.forEach(function (num) {
    var numBtns = document.getElementById(num)
    numBtns.classList.add('num')
})

//adding operator class name for every button that is a operator
var operators = ['+', '-', '*', '/']
operators.forEach(function (oprtr) {
    var oprtrBtns = document.getElementById(oprtr)
    oprtrBtns.classList.add('operator')
})

//adding mainBtn class name for = and c buttons
var mainBtns = ['=', 'c']
mainBtns.forEach(function (mBtns) {
    var finalBtns = document.getElementById(mBtns)
    finalBtns.classList.add('mainBtn')
})

//styling main-container
main.style.backgroundColor = "#242530";
main.style.height = '500px';
main.style.width = '300px';
main.style.margin = '40px auto';
main.style.position = 'relative';
main.style.borderRadius = '20px'
main.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px';

//styling calculator div
var calcDiv = document.querySelector('.calculator')
calcDiv.style.position = 'absolute'
calcDiv.style.bottom = '0'

//styling divs inside calculator div
var calcChildDivs = document.querySelectorAll('.calculator > div')
calcChildDivs.forEach(function (div) {
    div.style.marginTop = '2px'
})

//styling input tag
var inputTag = document.getElementById('result')
inputTag.style.width = '100%'
inputTag.style.height = '50px'
inputTag.style.border = 'none'
inputTag.style.backgroundColor = 'transparent'
inputTag.style.color = 'white'
inputTag.style.textAlign = 'right'
input.style.fontSize = '35px'


//Default button styles
var buttons = document.querySelectorAll('button')
buttons.forEach(function (button) {
    button.style.height = '60px';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer'
    button.style.border = 'none'
    button.style.margin = '1px'
    button.style.fontSize = '20px'
    button.style.fontFamily = 'Poppins, sans-serif'
})

//styles to all num buttons
var numbers = document.querySelectorAll('.num')
numbers.forEach(function (num) {
    num.style.backgroundColor = '#2F303E'
    num.style.color = 'white'
    num.style.width = '72px'
})

//styles to all operator buttons
var optrBtns = document.querySelectorAll('.operator')
optrBtns.forEach(function (optr) {
    optr.style.width = '73px'
    optr.style.backgroundColor = '#3C3D4A'
    optr.style.color = '#E18962'
})

//styles to = and c button
var topBtns = document.querySelectorAll('.mainBtn')
topBtns.forEach(function (mBtn) {
    mBtn.style.width = '147px'
    mBtn.style.color = 'white'
    mBtn.style.backgroundColor = '#E18962'
})

//extra styles
document.getElementById('0').style.borderRadius = "5px 5px 5px 20px";
document.getElementById('0').style.width = "147px";
document.getElementById('+').style.borderRadius = "5px 5px 20px 5px";
document.body.style.backgroundColor = '#6bb8f4'

var inputField = document.getElementById("result")
var buttons = document.querySelectorAll("button")
var clear = document.getElementById('c')
var answer = document.getElementById('=')


buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var buttonValue = button.textContent;
        if (buttonValue !== "=") {
            inputField.value += buttonValue;
        }
    })
})

clear.addEventListener('click', function () {
    inputField.value = ""
})

answer.addEventListener('click', function () {
    var expression = inputField.value;
    inputField.value = eval(expression);
})