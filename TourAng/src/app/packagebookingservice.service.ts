import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Booking } from './Booking';

@Injectable({
  providedIn: 'root'
})
export class PackagebookingserviceService {

  private resturl: string = 'http://localhost:8080/tourpackspring/packageBooking';

  constructor(public http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  getPackBookings(customerID: any): Observable<Booking[]> {
    return this.http
      .get<Booking[]>(
        this.resturl + '/getPackBookingCustomer/' + customerID,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  createPackBooking(booking: any): Observable<Booking> {
    return this.http.post<Booking>(this.resturl + '/createPackBooking', JSON.stringify(booking), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(err: any) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    }
    else {
      errorMessage = `Error code: ${err.status} \n Error Message : ${err.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
