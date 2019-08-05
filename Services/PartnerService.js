const businessPartner = require('@sap/cloud-sdk-vdm-business-partner-service');

const getPartnerService = function () {
    return {
        service: businessPartner.BusinessPartner,
        destinationName: "ErpQueryEndpoint",
        type: function () {
            return businessPartner.BusinessPartner.BUSINESS_PARTNER_CATEGORY.equals("1");
        }
    }
}

module.exports = getPartnerService();