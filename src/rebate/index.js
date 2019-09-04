import * as constants from '../constants';

export default class Rebate {
    /**
     * Method to get the discount amount based on the type of the user
     */
    calculateUserSpecificRebate = (userTypeString) => {
        const userSpecificRebate = constants.USER_SPECIFIC_REBATE[userTypeString];

        return userSpecificRebate;
    }

    /**
     * Method to get launch date discount amount. 
     */
    getLaunchDateRebate = () => {
        return constants.LAUNCH_DATE_REBATE;
    }
}