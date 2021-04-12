import { createReducer, on, Action } from "@ngrx/store";
import { getPoDetails } from "../actions/po-details.actions";
import { PoDetails } from "../models/po-details.model";

export const initialState: ReadonlyArray<PoDetails> = [];

export const getPoDetailsReducer = createReducer(
  initialState,
  on(getPoDetails, (state, { poDetails }) => [...poDetails])
);
