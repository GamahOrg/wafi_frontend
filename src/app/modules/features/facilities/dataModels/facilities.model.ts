export class ValidateFacilitiesModel {
    commercialRegistrationNo: string = "";
    chamberOfCommerceNo: string = "";
}

export class ValidateFacilitiesDTO {
    commercialRegisterNumber: string = "";
    chamberOfCommerceMembershipNumber: string = "";
    constructor(_validateFacilitiesModel: ValidateFacilitiesModel) {
        this.commercialRegisterNumber = _validateFacilitiesModel.commercialRegistrationNo;
        this.chamberOfCommerceMembershipNumber = _validateFacilitiesModel.chamberOfCommerceNo;
    }
}

