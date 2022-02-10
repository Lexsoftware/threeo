import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    baseUrl: string = 'https://localhost:44337';
    private unsubscribe$: Subject<void> = new Subject<void>();

    constructor(
        private http: HttpClient
    ) { }


    sigin(form: any): Observable<any> {

        return this.http.post(`${this.baseUrl}/login`, form)
            .pipe(
                takeUntil(this.unsubscribe$)
            )
    }

    unsubscribe() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}