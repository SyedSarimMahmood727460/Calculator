const h2element=document.querySelector("h2")
var answer=-1

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
    return result;
}



function result()
{
    let userInput=h2element.textContent
    let [num_1, operator, num_2] = userInput.split(/(\+|\-|\*|\/)/);

    num_1=parseFloat(num_1)
    num_1=parseFloat(num_1)
    answer=calculation(num_1,operator,num_2)
    h2element.textContent =answer;
}

function input(button)
{
    if(h2element.textContent==="Enter Your Values Here..." || parseFloat(h2element.textContent)===answer)
    {
        h2element.textContent ="";
        h2element.textContent += button.textContent;
    }
    else{
        h2element.textContent += button.textContent;
    }

}