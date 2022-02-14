function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;

    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;


    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    //calculateTotal
    calculateTotal();


}
//function for subtotal and subtaxt
/*
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    return productNumber;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;

}
*/
//or another way function for subtotal and subtaxt
function getInputValue(product) {
    const productInput = document.getElementById(product + '-total');
    const productNumber = parseFloat(productInput.innerText);
    return productNumber;
}
function calculateTotal() {

    const phoneTotal = getInputValue('phone');
    const caseTotal = getInputValue('case');
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    //console.log(phoneTotal, caseTotal)


}



//phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, true);


});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

//case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})