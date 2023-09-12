var calculator = document.createElement('div')
calculator.classList.add('calculator')

var input = document.createElement('input')
input.name = 'display';
input.type = 'text';
input.id = 'result';
calculator.append(input)

var nums = [
    { val: '=', type: "mainBtn" }, { val: 'c', type: "mainBtn" },
    { val: 7, type: "NUMBER" }, { val: 8, type: "NUMBER" }, { val: 9, type: "NUMBER" }, { val: '/', type: "OPERATOR" },
    { val: 4, type: "NUMBER" }, { val: 5, type: "NUMBER" }, { val: 6, type: "NUMBER" }, { val: '*', type: "OPERATOR" },
    { val: 1, type: "NUMBER" }, { val: 2, type: "NUMBER" }, { val: 3, type: "NUMBER" }, { val: '-', type: "OPERATOR" },
    { val: 0, type: "NUMBER" }, { val: '.', type: "NUMBER" }, { val: '+', type: "OPERATOR" }
];

nums.forEach(function (object) {
    var button = document.createElement("button");
    calculator.append(button);
    button.innerHTML = object.val;

    //default styles to all the buttons
    button.style.height = '60px';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.border = 'none';
    button.style.margin = '1px';
    button.style.fontSize = '20px';
    button.style.fontFamily = 'Poppins, sans-serif';

    switch (object.type) {
        case "NUMBER":
            button.style.backgroundColor = '#2F303E';
            button.style.color = 'white';
            button.style.width = '74px';
            break;
        case "OPERATOR":
            button.style.width = '74px';
            button.style.backgroundColor = '#3C3D4A';
            button.style.color = '#E18962';
            break;
        case "mainBtn":
            button.style.width = '150px';
            button.style.color = 'white';
            button.style.backgroundColor = '#E18962';
        default:
            break;
    }
    //extra custom button styles
    if (object.val === 0) {
        button.style.borderRadius = "5px 5px 5px 20px";
        button.style.width = "150px";
    } else if (object.val === '+') {
        button.style.borderRadius = "5px 5px 20px 5px";
    }

})

var main = document.querySelector('.main-container')
main.append(calculator)

var inputField = document.getElementById('result');
var buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var buttonValue = button.textContent;
        if (buttonValue !== "=" && buttonValue !== "c") {
            inputField.value += buttonValue;
        } else if (buttonValue === "c") {
            inputField.value = "";
        } else if (buttonValue === "=") {
            inputField.value = eval(inputField.value);
        }
    });
});

//styling main-container
main.style.backgroundColor = "#242530";
main.style.height = '500px';
main.style.width = '304px';
main.style.margin = '40px auto';
main.style.position = 'relative';
main.style.borderRadius = '20px';
main.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px';

//styling calculator div
var calcDiv = document.querySelector('.calculator')
calcDiv.style.position = 'absolute';
calcDiv.style.bottom = '0';
calcDiv.style.width = '100%';

//styling input tag
var inputTag = document.getElementById('result')
inputTag.style.width = '99%';
inputTag.style.height = '50px';
inputTag.style.border = 'none';
inputTag.style.backgroundColor = 'transparent';
inputTag.style.color = 'white';
inputTag.style.textAlign = 'right';
input.style.fontSize = '35px';

//body background color
document.body.style.backgroundColor = '#91d7ed';