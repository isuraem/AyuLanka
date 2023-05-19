import axios from 'axios';
const BASE_URL = `http://localhost:3001/api/buyer`

// buyer services
// service for add new buyer
export const createBuyerService = async (buyer) => {
    console.log(">>>>>", buyer);
    try {
        const response = await axios.post(BASE_URL + '/addBuyer', buyer);
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

// service for update buyer using id
export const updateBuyerService = async (id, buyer) => {
    try {
        let response = await axios.post(BASE_URL + `/updateBuyer/${id}`, buyer);

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

// service for delete selected buyer
export const deleteBuyer = async (buyer) => {
    console.log("pay>>", buyer)
    try {
        let response = await axios.post(BASE_URL + '/deleteBuyer', buyer);

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

// service for get all buyers 
export const getBuyerService = async () => {

    try {
        let response = await axios.get(BASE_URL + '/getAllBuyers');

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

// service for get one buyer using Email
export const getOneBuyerService = async (Email) => {

    try {
        let response = await axios.get(BASE_URL + `/getBuyer/${Email}`);

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

// feedback services
// service for create new feedback
export const createFeedbackService = async (feedback) => {
    console.log(">>>>>", feedback);
    try {
        const response = await axios.post(BASE_URL + '/addFeedback', feedback);
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

// service for get all feedbacks
export const getFeedbackService = async () => {

    try {
        let response = await axios.get(BASE_URL + '/getAllFeedbacks');

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

// service for buyer login
export const loginBuyerService = async (Email,Password) => {

    try {
        let response = await axios.get(BASE_URL + `/login/${Email}/${Password}`);

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