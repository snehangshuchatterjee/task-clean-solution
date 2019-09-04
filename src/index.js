import Calculator from "./calculator";

var userType = 1;
var productType = 0;
var price = 110;
var publishedDate = new Date();

const calc = new Calculator(userType, productType, price, publishedDate);

const calculatedPrice = calc.calculatePrice();

const main = () => {
    console.log(`Final price is: ${calculatedPrice}`);
}

main();