import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

  private resturl: string = 'http://localhost:8080/tourpackspring/customer';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  deleteCustomer(customerID: any): Observable<Customer[]> {
    return this.http
      .delete<Customer[]>(
        this.resturl + '/deleteCus/' + customerID,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  getCustomers(): Observable<Customer[]> {
    return this.http
      .get<Customer[]>(this.resturl + '/allCus')
      .pipe(retry(1), catchError(this.handleError));
  }

  getCustomer(email: any): Observable<Customer> {
    return this.http.get<Customer>(this.resturl + '/signCus/' + email + '/').pipe(retry(1), catchError(this.handleError));
  }

  createCustomer(customer: any): Observable<Customer> {
    return this.http.post<Customer>(this.resturl + '/createCus', JSON.stringify(customer), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  getCustomerByID(cid: any): Observable<Customer> {
    return this.http.get<Customer>(this.resturl + '/getCus/' + cid).pipe(retry(1), catchError(this.handleError));
  }

  updateCustomer(customer: any): Observable<Customer[]> {
    return this.http.put<Customer[]>(this.resturl + '/updateCus', JSON.stringify(customer), this.httpOptions).pipe(retry(1), catchError(this.handleError));
  }

  handleError(err: any) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error code : ${err.status} \n Error Message : ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
