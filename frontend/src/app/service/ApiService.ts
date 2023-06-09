import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";
import { HttpClientModule } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
        return this.http.get(`${this.apiUrl}/products`);
    }


}
