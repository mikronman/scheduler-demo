import { Action } from '@ngrx/store';
import OrderLine from '../models/order-line.model';

export enum OrderLineActionTypes {
    GET_LINE = "[LINE] Get Lines",
    GET_LINE_SUCCESS = "[LINE] Get Lines Success",
    GET_LINE_FAIL = "[LINE] Get Lines Fail",
}

export class GetLineAction implements Action {
    readonly type = OrderLineActionTypes.GET_LINE;
}

export class GetLineSuccessAction implements Action {
    readonly type = OrderLineActionTypes.GET_LINE_SUCCESS;
    constructor(public payload: OrderLine[]){}
}

export class GetLineFailAction implements Action {
    readonly type = OrderLineActionTypes.GET_LINE_FAIL;
    constructor(public payload: OrderLine[]){}
}

export type OrderLineAction = GetLineAction | GetLineSuccessAction | GetLineFailAction;