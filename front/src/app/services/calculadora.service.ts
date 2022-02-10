import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CalculadoraService {

    baseUrl: string = 'https://localhost:44337';

    constructor(
        private http: HttpClient
    ) { }

    somar(form: any): Observable<number> {
        return this.http.post<number>(`${this.baseUrl}/somar`, form)
    }

    dividir(form: any): Observable<number> {
        return this.http.post<number>(`${this.baseUrl}/dividir`, form)
    }

    subtrair(form: any): Observable<number> {
        return this.http.post<number>(`${this.baseUrl}/subtrair`, form)
    }

    multiplicar(form: any): Observable<number> {
        return this.http.post<number>(`${this.baseUrl}/multiplicar`, form)
    }
}