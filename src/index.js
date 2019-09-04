import Calculator from "./calculator";

const userType = 1;
const productType = 0;
const price = 100;
const publishedDate = new Date();

const calc = new Calculator(userType, productType, price, publishedDate);

const calculatedPrice = calc.calculatePrice();

const main = () => {
    console.log(`Final price is: ${calculatedPrice}`);
}

main();