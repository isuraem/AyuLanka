const Joi = require('joi');

const companyValidationSchema = {

    createSellerAccount: Joi.object().keys({
		sellerName: Joi.string().regex(/^[^<>=*$^]*$/).trim().required(),
		shopName: Joi.string().regex(/^[^<>=*$^]*$/).trim().allow(null, ''),
		Email: Joi.string().regex(/^[^<>=*$^]*$/).allow(null, ''),
        mobileNumber: Joi.number().regex(/^[^<>=*$^]*$/).allow(null, ''),
	})

}

module.exports = companyValidationSchema;