import OrderLine from '../models/order-line.model';
import { OrderLineActionTypes, OrderLineAction } from '../actions/order-line.action';

export interface OrderLineState {
    orderLines: OrderLine[];
    loading: boolean;
    error: string | any;
}

const initialState: OrderLineState = {
    orderLines: [
        {
            lineNumber: "0010",
            lineTitle: "NaCl (Sodium Chloride)",
            description: "Table Salt, 100KG Tanks",
            shipToName: "Amsterdam",
            shipToAddress: "1234 Tulip Lane",
            shipToCity: "Ludwigshafen",
            shipToProvince: "DE",
            shipToZip: "12345",
            supplierProductId: 12123812837,
            upcNumber: 12123817394,
            contractNumber: 230812837443,
            salesOrderNumber: 12345,
            additionalDetails: [
                {
                productGradeDescription: "Corax N 339",
                specification: 12345343,
                issue: "003",
                producer: "Orion Engineer",
                transportMethod: "Road",
                incoTerms: "CPT",
                unloadingPoint: "Amsterdam",
                shipToContact: "Alan Dowl",
                contactPhone: "(770) 444-4444",
                contactFax: "(770) 444-4444"
                }
            ],
            quantity: [
                {
                unitType: "KGM",
                ordered: 21000,
                confirmed: 21000
                }
            ],
            arrivalDate: [
                {
                requested: "04/22/2021",
                confirmed: "04/22/2021"
                }
            ],
            price: [
                {
                requested: [
                    {
                    currency: "USD",
                    unitType: "KGM",
                    unitQuantity: 2,
                    pricePerUnit: 80
                    }
                ],
                confirmed: [
                    {
                    currency: "USD",
                    unitType: "KGM",
                    unitQuantity: 2,
                    pricePerUnit: 80
                    }
                ]
                }
            ]
        }
    ],
    loading: false,
    error: ''
}

export function OrderLineReducer(state: OrderLineState = initialState, action: OrderLineAction) {
    switch(action.type){
        case OrderLineActionTypes.GET_LINE:
            return {
                ...state,
                loading: true
            }
        case OrderLineActionTypes.GET_LINE_SUCCESS:
            return {
                ...state,
                orderLines: action.payload,
                loading: false
            }
        case OrderLineActionTypes.GET_LINE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}
