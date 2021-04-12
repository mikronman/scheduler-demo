import { createAction, props } from "@ngrx/store";

export const getPoDetails = createAction(
  "[PO Details/API] PO details were retrieved successfully.",
  props<{ poDetails }>()
);
