import axios from 'axios';
const BASE_URL = `http://localhost:3005/order`

export const createOrder = async (paymentPayload) => {
    console.log(">>>>>", paymentPayload);
    try {
        const response = await axios.post(BASE_URL + '/addOrder', paymentPayload);
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}

export const createDilerveryForOrderService = async (paymentPayload) => {

    try {
        const response = await axios.post(BASE_URL + '/addDelivery', paymentPayload);
        return {
            ok: true,
            data: response.data
        }
    } catch (error) {
        return {
            ok: false,
            error: error
        }
    }

}