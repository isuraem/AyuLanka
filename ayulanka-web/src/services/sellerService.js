import axios from 'axios';
const BASE_URL = `http://localhost:3004/api/seller`

export const createSellerService = async (newSeller) => {

    try {
        let response = await axios.post(BASE_URL + '/add',newSeller);

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

export const getSellerService = async (id) => {

    try {
        let response = await axios.post(BASE_URL + `/get/${id}`);

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