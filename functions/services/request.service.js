const {bfast} = require("bfastnode");

class RequestService {

    /**
     *
     * @param order {{
     *     user: {
     *         fullname: string,
     *         email: string
     *     },
     *     amount: number,
     *     location: string,
     *     status: string,
     *     mobile: string,
     *     distribution: {
     *         value: string,
     *         quantity: number
     *     }[]
     * }}
     * @return {Promise<*>}
     */
    async add(order) {
        order = JSON.parse(JSON.stringify(order));
        if (this._isValidOrderData(order)) {
            order.status = 'NEW';
            return bfast.database().table('request').save(order);
        } else {
            throw {message: "Please enter valid order data"};
        }
    }

    /**
     *
     * @param order {{
     *     user: {
     *         fullname: string,
     *         email: string
     *     },
     *     amount: number,
     *     location: string,
     *     mobile: string,
     *     distribution: {
     *         value: string,
     *         quantity: number
     *     }[]
     * }}
     * @return {boolean}
     */
    _isValidOrderData(order) {
        return !!(order.user &&
            order.user.fullname &&
            order.user.email &&
            order.amount &&
            order.location &&
            order.mobile &&
            order.distribution &&
            Array.isArray(order.distribution));
    }
}

module.exports = {
    RequestService: RequestService
}
