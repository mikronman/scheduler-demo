import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable ({
    providedIn: 'root'
})

export class LineService {
    private LINE_SERVICE = "https://6071c13650aaea001728514c.mockapi.io/api/v1/lines";
    
    constructor(private httpClient: HttpClient) { }

    public sendGetRequest() {
        return this.httpClient.get(this.LINE_SERVICE);
    }
}