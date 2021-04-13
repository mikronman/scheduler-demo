import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import OrderLine from '../store/models/order-line.model'

@Injectable ({
    providedIn: 'root'
})

export class LineService {
    private LINE_SERVICE = "https://6071c13650aaea001728514c.mockapi.io/api/v1/lines";
    
    constructor(private httpClient: HttpClient) { }

    getLines() {
        return this.httpClient.get<any>(this.LINE_SERVICE);
    }
}