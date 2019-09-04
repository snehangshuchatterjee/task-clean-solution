import User from "../user";
import Product from "../product";

export default class Calculator {
    user = "";
    product = "";
    price = 0;
    publishedDate = "";

    constructor(userType, productType, price, publishedDate) {
        this.user = new User(userType);
        this.product = new Product(productType, publishedDate);
        this.price = price;
    }

    /**
     * Method to calculate the actual price of the product.
     * @param {*} user 
     */
    calculatePrice = function () {
        const { price, product } = this;
        const productSpecificPrice = product.getProductSpecificPrice();
        const totalRebate = this.getTotalRebate();

        let calculatedPrice = 0;

        calculatedPrice = (price + productSpecificPrice) - totalRebate;

        return calculatedPrice;
    };

    /**
     * Method to return the total rebate applicable on the current calculation
     */
    getTotalRebate = () => {
        const { user, product } = this;
        const userSpecificRebate = user.getUserSpecificRebate();
        const productSpecificRebate = product.getProductRebate();

        return userSpecificRebate + productSpecificRebate;
    }
}