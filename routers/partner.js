const businessPartner = require('@sap/cloud-sdk-vdm-business-partner-service');
const express = require('express');
const router = express.Router();

const service = function () {
    return businessPartner.BusinessPartner;
}

router.get('/', async function (req, res) {
    try {
        var partners = await service().requestBuilder()
            .getAll()
            .filter(service().BUSINESS_PARTNER_CATEGORY = 1)
            .select(service().BUSINESS_PARTNER, service().LAST_NAME, service().FIRST_NAME)
            .execute({
                destinationName: "ErpQueryEndpoint"
            });
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }

})

module.exports = router;