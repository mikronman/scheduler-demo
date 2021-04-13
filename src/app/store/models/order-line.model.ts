export default interface OrderLine {
    lineNumber: string;
    lineTitle: string;
    description: string;
    shipToName: string;
    shipToAddress: string;
    shipToCity: string;
    shipToProvince: string;
    shipToZip: string;
    supplierProductId: number;
    upcNumber: number;
    contractNumber: number;
    salesOrderNumber: number;
    additionalDetails: AdditionalDetails[];
    quantity: Quantity[];
    arrivalDate: ArrivalDate[];
    price: Price[];
}

interface AdditionalDetails {
    productGradeDescription: string;
    specification: number;
    issue: string;
    producer: string;
    transportMethod: string;
    incoTerms: string;
    unloadingPoint: string;
    shipToContact: string;
    contactPhone: string;
    contactFax: string;
}

interface Quantity {
    unitType: string;
    ordered: number;
    confirmed: number;
}

interface ArrivalDate {
    requested: string;
    confirmed: string;
}

interface Price {
    requested: PriceRequested[];
    confirmed: PriceConfirmed[];
}

interface PriceRequested {
    currency: string;
    unitType: string;
    unitQuantity: number;
    pricePerUnit: number;
}

interface PriceConfirmed {
    currency: string;
    unitType: string;
    unitQuantity: number;
    pricePerUnit: number;
}