import axios from "axios";
const BASE_URL_CART = `http://localhost:3006/cart`

export const addCartItemsService = async (cart) => {

    try {
        let response = await axios.post(BASE_URL_CART + '/addItem', cart);

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

export const getCartItemsService = async () => {

    try {
        let response = await axios.get(BASE_URL_CART + '/viewCart');

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


export const updateCartItemsService = async (payload) => {

    try {
        let response = await axios.put(BASE_URL_CART + '/updateItem', payload);

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

export const deleteCartItemsService = async (payload) => {
    console.log("pay>>", payload)
    try {
        let response = await axios.post(BASE_URL_CART + '/deleteItem', payload);

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