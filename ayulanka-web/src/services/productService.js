import axios from 'axios';
const BASE_URL = `http://localhost:3002/api/product`

export const getAllProductService = async () => {

    try {
        let response = await axios.get(BASE_URL + '/view');

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


export const createProductService = async (newSeller) => {

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

export const updateProductService = async (newProduct) => {

    try {
        let response = await axios.post(BASE_URL + '/update',newProduct);

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

export const sellerProductsService = async (id) => {

    try {
        let response = await axios.post(BASE_URL + `/sellerProducts/${id}`);

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

export const deleteProductsService = async (id) => {

    try {
        let response = await axios.post(BASE_URL + `/deleteProducts/${id}`);

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
