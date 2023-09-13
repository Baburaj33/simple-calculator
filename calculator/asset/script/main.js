const input_Date = document.querySelector("#get_value");
function display(number) {
    input_Date.value += number
}
function calculator() {
    try {
        input_Date.value = eval(input_Date.value)
    }
    catch (error) {
        input_Date.style.color = 'red'

    }

}
function CLR() {
    input_Date.value = " "
}
function DEL() {
    input_Date.value = input_Date.value.slice(0, -1)
}


