import { PoDetails } from "../store/models/po-details.model";

export interface AppState {
  poDetails: ReadonlyArray<PoDetails>;
}
