import { OrderLineState } from '../reducers/order-line.reducer';

export default interface AppState {
    line: OrderLineState;
}