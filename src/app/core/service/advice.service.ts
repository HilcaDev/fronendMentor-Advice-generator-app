import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdvice } from 'src/app/domain/dto/advice.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  constructor(private http: HttpClient) { }

  getadvice(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>(`${environment.baseUrl}/advice`, { observe: 'response' })
  }
}
