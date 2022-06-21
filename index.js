window.onload(calculator())

function calculator(){
    var firstNum = Number(prompt("Enter first number"))
    var secondNum = Number(prompt("Enter second number"))
    var result = 0;
    const operations = prompt("Input one of these operations (+),(-),(/),(*)")
    if (operations == "+"){
        result = firstNum + secondNum;
        alert(result + " Thanks for using!")
    }
    else if (operations == "-"){
        result = firstNum - secondNum;
        alert(result + " Thanks for using!")
    }
    else if (operations == "/"){
        result = firstNum / secondNum;
        alert(result + " Thanks for using!")
    }
    else if (operations == "*"){
        result = firstNum * secondNum;
        alert(result + " Thanks for using!")
    }
    else{
        alert("Invalid Operation!Please try again with a valid operation.")
    }
}