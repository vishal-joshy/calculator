const operators = {
    add : function (firstNumber,secondNumber){
        return firstNumber+secondNumber;
    },
    substract: function(firstNumber,secondNumber){
        return firstNumber -secondNumber;
    },
    multiply: function(firstNumber,secondNumber){
        return firstNumber*secondNumber;
    },
    divide :function(firstNumber ,secondNumber){
        return firstNumber/secondNumber;
    }
}

function getUserOperand(){
    const numberKeys = document.querySelectorAll('#number-key');
    numberKeys.forEach(key => {
        key.addEventListener('click',()=>{
            firstOperand =firstOperand + key.dataset.value;

            console.log(firstOperand);
        });
    });
}
function getUserOperator(){
    const operatorKeys = document.querySelectorAll('#operator-key');
    operatorKeys.forEach(key=>{
        key.addEventListener('click',()=>{
            if(isOperatorNull(currentOperator)){
                secondOperand =firstOperand;    
                firstOperand = '';
            }else{
                let result = calculate(currentOperator,secondOperand,firstOperand);
                secondOperand = result;
                firstOperand = '';
            }
            currentOperator = key.dataset.value;
            
        });
    });
}

function calculate(operator,firstNumber,secondNumber){
    let result = operate(operator,parseInt(firstNumber),parseInt(secondNumber));
    console.log(result);
    return result;
}

function operate(operator ,firstNumber ,secondNumber){
    switch(operator){
        case 'add' : return operators.add(firstNumber,secondNumber);
        case 'substract' : return operators.substract(firstNumber,secondNumber);
        case 'multiply' : return operators.multiply(firstNumber,secondNumber);
        case 'divide' :return operators.multiply(firstNumber,secondNumber);
    }
}

function isOperatorNull(currentOperator){
    if(currentOperator == null){
        return true;
    }
}



//-----------------------------
let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
getUserOperand();
getUserOperator();