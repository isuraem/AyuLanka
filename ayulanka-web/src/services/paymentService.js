import axios from 'axios';
const BASE_URL = `http://localhost:3007/payment`

export const createPayment = async (paymentPayload) => {

    try {
        const response = await axios.post(BASE_URL + '/add', paymentPayload);
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

