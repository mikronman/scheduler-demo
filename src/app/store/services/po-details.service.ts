import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { PoDetails } from "../models/po-details.model";

@Injectable({ providedIn: "root" })
export class PoDetailsService {
  constructor(private http: HttpClient) {}

  getPoDetails(): Observable<Array<PoDetails>> {
    return this.http
      .get<{ items: PoDetails[] }>(
        "https://6071c13650aaea001728514c.mockapi.io/api/v1/podetails"
      )
      .pipe(map((poDetails) => poDetails.items || []));
  }
}
