import * as constants from '../constants';
import { PRODUCT_TYPE } from '../constants/productTypeMap';
import Rebate from "../rebate";

/**
 * Class for the product specific data
 * 
 * Currently I have assumed that the main focus of this application 
 * is on the type of product and its price
 * 
 * Also, I have assumed that the only product specific details are 
 * @productTypePrice
 * 
 * further requirements can be incorporated by altering this class
 * as per the new requirements
 */
export default class Product {
    currentProductType = "";
    productTypePrice = 0;
    productPublishedDate = "";
    productTypeRebate = 0;

    constructor(productType, publishedDate) {
        this.currentProductType = this.getProductTypeString(productType);
        this.productTypePrice = this.setProductTypePrice();
        this.productPublishedDate = publishedDate;
        this.productTypeRebate = this.setProductRebate();
    }

    /**
     * Get the product type string (new or old) depending upon the input values
     */
    getProductTypeString = (productType) => {
        const productTypeString = PRODUCT_TYPE[productType];

        return productTypeString;
    }

    /**
     * Set the product specific price
     */
    setProductTypePrice = () => {
        const productTypePrice = constants.PRODUCT_TYPE_PRICE[this.currentProductType];

        return productTypePrice;
    }

    /**
     * Getter method for getting the product specific price any "Product" object
     */
    getProductSpecificPrice = () => {
        return this.productTypePrice;
    }

    /**
     * Set the product specific discount. Currently the discount is only if its the launch date
     * but can be extended later
     */
    setProductRebate = () => {
        var rebate = 0,
            isRebateApplicable = this.isProductPublishedToday();

        if (this.currentProductType === "new" && isRebateApplicable) {
            rebate = new Rebate().getLaunchDateRebate();
        }

        return rebate;
    }

    /**
     * Getter method for the producct specific rebate
     */
    getProductRebate = () => {
        return this.productTypeRebate;
    }

    /**
     * Method to check whether the given product was publised today or not
     */
    isProductPublishedToday = () => {
        return this.productPublishedDate.toDateString() === new Date().toDateString();
    }
}