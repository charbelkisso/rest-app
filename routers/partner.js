const partnerService = require('../Services/PartnerService');
const express = require('express');
const router = express.Router();

router.get('/', async function (req, res) {

    try {
        var partners = await partnerService.service.requestBuilder()
            .getAll()
            .filter(partnerService.type())
            .select(
                partnerService.service.BUSINESS_PARTNER,
                partnerService.service.LAST_NAME,
                partnerService.service.FIRST_NAME
            )
            .execute({
                destinationName: partnerService.destinationName
            });
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

router.get('/:partnerId', async (req, res) => {

    try {
        var partner = await partnerService.service.requestBuilder()
            .getByKey(req.params.partnerId)
            .select(
                partnerService.service.BUSINESS_PARTNER,
                partnerService.service.LAST_NAME,
                partnerService.service.FIRST_NAME
            )
            .execute({
                destinationName: partnerService.destinationName
            });
        res.status(200).json(partner);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;