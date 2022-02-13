import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Desperado } from '../models/desperado.desperado';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ConfigService } from './config.service';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class DesperadoBackendService {

  backendUrl = "";
  config: Config | undefined;
  constructor(private httpClient: HttpClient, private confSvc: ConfigService) {
    // this.confSvc.getConfig().subscribe((data: Config) => this.config = {
    //   apiBaseUrl: data.apiBaseUrl
    // })
   }
  postToDesperadoBackend(text: string): Observable<Desperado> {
    const desperado: Desperado = {
      text: text
    }
    return this.httpClient.post<Desperado>(this.confSvc.config?.apiBaseUrl + "/api/desperado", desperado, {
      headers: new HttpHeaders ({
        "Content-Type": "application/json",
        "Accept": "application/json"
      }),
      observe: "body",
      responseType: "json"
  })
  }
}
