
const h2element=document.querySelector("h2")
let answer=0
let operator=""
let num_2=0
let operator_selected=false
let percent_selecetd=false

function calculation(num_1, operator, num_2) {
    var result;
    switch (operator) {
        case '+':
            result = num_1 + num_2;
            break;
        case '-':
            result = num_1 - num_2;
            break;
        case '*':
            result = num_1 * num_2;
            break;
        case '/':
            result = num_1 / num_2;
            break;
        default:
            result = "Invalid operator";
    }
    return result
}

function result()
{
    num_1=answer
    num_2=parseFloat(h2element.textContent)
    answer=calculation(num_1,operator,num_2)
    h2element.textContent =answer;
}

function input(button)
{
    buttonColor_onClick(button)
    if (parseFloat(h2element.textContent) === 0 || operator_selected) 
    {
        operator_selected=false
        h2element.textContent = button.textContent;
        return;
    }
    else if( /^\d+$/.test(button.textContent))
    {
        h2element.textContent += button.textContent;
    }
    
}

function Clear(button)
{
    buttonColor_onClick(button)
    h2element.textContent="0"
}
function Operator(button)
{
    buttonColor_onClick(button)
    answer = parseFloat(h2element.textContent)
    operator_selected=true
    if(percent_selecetd==false)
    {
        operator = button.textContent
    }
    percent_selecetd=false
}

function buttonColor_onClick(button)
{
    button.style.backgroundColor = 'lightgreen';
    setTimeout(function() 
    {
        button.style.backgroundColor = 'pink';
    }, 140);
}

function percent(button)
{
    percent_selecetd=true
    Operator(button)
    answer=answer/100
    h2element.textContent = answer;
}

function changeSign(button)
{
    percent_selecetd=true
    Operator(button)
    answer=answer*(-1)
    h2element.textContent = answer;
}


