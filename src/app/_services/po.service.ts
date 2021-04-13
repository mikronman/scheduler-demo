import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable ({
    providedIn: 'root'
})

export class PoService {
    private PO_SERVICE = "https://6071c13650aaea001728514c.mockapi.io/api/v1/podetails";
    
    constructor(private httpClient: HttpClient) { }

    public sendGetRequest() {
        return this.httpClient.get(this.PO_SERVICE);
    }
}