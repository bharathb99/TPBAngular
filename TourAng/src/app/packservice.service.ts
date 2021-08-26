import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Packages } from './Packages';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PackserviceService {
  private resturl: string = 'http://localhost:8080/tourpackspring/package';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getPackages(): Observable<Packages[]> {
    return this.http
      .get<Packages[]>(this.resturl + '/allPack')
      .pipe(retry(1), catchError(this.handleError))
  }

  getAPackage(packageID: any): Observable<Packages> {
    return this.http
      .get<Packages>(this.resturl + '/getPack/' + packageID)
      .pipe(retry(1), catchError(this.handleError));
  }

  createPackage(packageData: any): Observable<Packages> {
    return this.http
      .post<Packages>(
        this.resturl + '/createPack',
        JSON.stringify(packageData),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updatePackage(packageData: any): Observable<Packages> {
    return this.http
      .put<Packages>(
        this.resturl + '/updatePack',
        JSON.stringify(packageData),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  deletePackage(packageID: any): Observable<Packages> {
    return this.http
      .delete<Packages>(this.resturl + '/deletePack/' + packageID, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(err: { error: { message: string; }; status: any; message: any; }) {
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

