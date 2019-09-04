import expect from "expect";
import Calculator from "./";
import 'babel-polyfill';

describe("Calculator Tests", () => {
    let normalUser, companyUser, newProduct, oldProduct;
    beforeEach(() => {
        normalUser = 0;
        companyUser = 1;
        newProduct = 0;
        oldProduct = 1;
    });
    it('should use the product type price as 25 for new product', function () {
        const userType = normalUser;
        const productType = newProduct;
        const price = 1;
        const publishedDate = new Date();

        const expected = 16;
        const calc = new Calculator(userType, productType, price, publishedDate);
        const actual = calc.calculatePrice();
        expect(expected).toEqual(actual);
    });

    it('should not add a rebate of 10SEK if the product is not pulbished today', function () {
        const userType = normalUser;
        const productType = newProduct;
        const price = 1;
        let publishedDate = new Date();
        publishedDate.setDate(publishedDate.getDate() - 1);

        const expected = 26;
        const calc = new Calculator(userType, productType, price, publishedDate);
        const actual = calc.calculatePrice();
        expect(expected).toEqual(actual);
    });

    it('should use the product type price as 35 witout additional rebate of 10SEK for old product', function () {
        const userType = normalUser;
        const productType = oldProduct;
        const price = 1;
        const publishedDate = new Date();

        const expected = 36;
        const calc = new Calculator(userType, productType, price, publishedDate);
        const actual = calc.calculatePrice();
        expect(expected).toEqual(actual);
    });

    it('should give an additional rebate of 5SEK if the user is a company user', function () {
        const userType = companyUser;
        const productType = newProduct;
        const price = 1;
        const publishedDate = new Date();

        const expected = 11;
        const calc = new Calculator(userType, productType, price, publishedDate);
        const actual = calc.calculatePrice();
        expect(expected).toEqual(actual);
    });
});