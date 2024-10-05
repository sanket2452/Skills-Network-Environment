let Grocery1;
let Grocery2;
let Grocery3;

function calculateAmount(){
    Grocery1 = parseFloat(document.getElementById('Grocery1').value);
    Grocery2 = parseFloat(document.getElementById('Grocery2').value);
    Grocery3 = parseFloat(document.getElementById('Grocery3').value);

    let amount = Grocery1+Grocery2+Grocery3;

    DocumentTimeline.getElementById('amount').innerText = `The total amount is: ${amount}`;
}