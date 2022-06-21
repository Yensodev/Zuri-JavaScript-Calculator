function calculate() {
    let operation = prompt(`
    Please type in the math operation you would like to perform:
    + for addition
    - for subtraction
    * for multiplication
    / for division
    % for modulus
    `)

    let number_1 = prompt('First number')
    let number_2 = prompt('Second number')

    number_1 = parseFloat(number_1)
    number_2 = parseFloat(number_2)

    console.log(number_1, number_2)

    if (isNaN(number_1) || isNaN(number_2)) {
        alert("Please input valid numbers!!!\n")
        // document.querySelector("body").style.backgroundColor = "red";
    }

    else {
        if (operation == '+') {
            alert(`${number_1} + ${number_2} = ${number_1 + number_2}`)
        }

        else if (operation == '-') {
            alert(`${number_1} - ${number_2} = ${number_1 - number_2}`)
        }

        else if (operation == '*') {
            alert(`${number_1} - ${number_2} = ${number_1 - number_2}`)
        }

        else if (operation == '/') {

            let quotient = number_1 / number_2

            // To check for ZeroDivisionError
            if (quotient == Infinity || quotient == -Infinity || isNaN(quotient)) {            
                alert("Can't divide by 0!!")
            }
            else {
                alert(`${number_1} / ${number_2} = ${quotient}`)
            }
        }

        else if (operation == '%') {
            alert(`${number_1} % ${number_2} = ${number_1 % number_2}`)
        }

        else {
            alert('You have not typed a valid operator, please run the program again.')
        }

        again()
    }
}


function again() {
    calc_again = prompt(`
        Do you want to calculate again?
        Please type Y for YES or N for NO.
    `)

    if (calc_again.toUpperCase() == 'Y') {
        calculate()
    }
    else if (calc_again.toUpperCase() == 'N') {
        alert('See you later.')
    }
    else {
        again()
    }
}

document.addEventListener("DOMContentLoaded", calculate)