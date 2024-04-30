const h2element=document.querySelector("h2")
let answer=0
let operator=""
let operator_selected=false

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

function Clear()
{
    h2element.textContent="0"
}
function Operator(button)
{
    answer = parseFloat(h2element.textContent)
    operator_selected=true
    operator = button.textContent
}