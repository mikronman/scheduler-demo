import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PoDetails } from "../models/po-details.model";

export const selectPoDetails = createSelector(
  (state: AppState) => state.poDetails,
  (poDetails: Array<PoDetails>) => poDetails
);
