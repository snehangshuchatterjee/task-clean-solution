import Rebate from "../rebate";
import { USER_TYPE } from '../constants/userTypeMap';

/**
 * Class for the user specific data
 * 
 * Currently I have assumed that the only user specific data is
 * the discount that is applicable to "company" users
 * 
 * further requirements can be incorporated by altering this class
 * as per the new requirements
 */
class User {
    userSpecificRebate = 0;

    constructor(userType) {
        const userTypeString = this.getUserTypeString(userType);
        this.userSpecificRebate = new Rebate().calculateUserSpecificRebate(userTypeString);
    }

    getUserTypeString = (userType) => {
        const userTypeString = USER_TYPE[userType];

        return userTypeString;
    }

    getUserSpecificRebate = () => {
        return this.userSpecificRebate;
    }
}

export default User;