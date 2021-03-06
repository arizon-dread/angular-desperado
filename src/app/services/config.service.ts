import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, map, tap } from 'rxjs/operators';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = '/config/cfg.json';
  config: Config | undefined;
  constructor(private httpClient: HttpClient) {
    this.getConfig().subscribe((data: Config) => {
      this.config = data;
    });
  }

  getConfig(): Observable<Config> {
    console.log("About to get config..." + window.location.origin + this.configUrl);

    return this.httpClient.get<Config>(window.location.origin + this.configUrl)
    .pipe(
      catchError(this.handleError<Config>("getConfig", this.config = { apiBaseUrl: ""}))
    )
  }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
