const businessPartner = require('@sap/cloud-sdk-vdm-business-partner-service');
const cloud = require('@sap/cloud-sdk-core');

const getPartnerService = function () {
    return {
        service: businessPartner.BusinessPartner,
        destinationName: "ErpQueryEndpoint",
        type: function(){
            return businessPartner.BusinessPartner.BUSINESS_PARTNER_CATEGORY.equals("1");
        },
        select: function(){
            return[
                businessPartner.BusinessPartner.LAST_NAME,
                businessPartner.BusinessPartner.FIRST_NAME,
                businessPartner.BusinessPartner.BUSINESS_PARTNER
            ];
        }
    }
}

module.exports = getPartnerService();