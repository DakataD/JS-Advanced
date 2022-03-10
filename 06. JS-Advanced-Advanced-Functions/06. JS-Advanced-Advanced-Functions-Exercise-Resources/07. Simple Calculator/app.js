function calculator() {
    let num1 = document.getElementById('num1');
    let num2 = document.getElementById('num2');
    let result = document.getElementById('result');
    let subButton = document.getElementById('subtractButton');
    let sumButton = document.getElementById('sumButton');
    sumButton.addEventListener('click', add);
    subButton.addEventListener('click', subtract )
    function add(){
        result.value =Number(num1.value) + Number(num2.value);
        num1.value = '';
        num2.value = '';
    }
    function subtract(){
        result.value =Number(num1.value) - Number(num2.value);
    }



}
