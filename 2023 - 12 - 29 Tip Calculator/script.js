const billAmountEle = document.getElementById('billAmount');
const tipPercentageEle = document.getElementById('tipPercentage');
const calculateEle = document.getElementById('calculate');
const resultEle = document.getElementById('result');

calculateTip = () => {
    const billAmountEleValue = billAmountEle.value;
    const tipPercentageEleValue = tipPercentageEle.value;

    const res = billAmountEleValue * (1 + tipPercentageEleValue / 100);
    
    resultEle.innerText = res.toFixed(2);
};

calculateEle.addEventListener('click', calculateTip);