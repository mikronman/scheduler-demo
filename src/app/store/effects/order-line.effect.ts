import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { GetLineAction, GetLineFailAction, GetLineSuccessAction, OrderLineActionTypes } from '../actions/order-line.action';
import { LineService } from '../../_services/line.service';
import { mergeMap, map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from "@ngrx/store";


@Injectable()

export class OrderLineEffects {

    constructor(private actions$: Actions,
        private store: Store,
        private lineService: LineService) { }

     getOrderLines$ = createEffect(() => this.actions$.pipe(
        ofType<GetLineAction>(OrderLineActionTypes.GET_LINE),
            mergeMap(
                () => this.lineService.getLines()
                .pipe(
                    map(data => {
                        return new GetLineSuccessAction(data)
                    }),
                    catchError(error => of(new GetLineFailAction(error)))
                )
            )
        )
    )
}