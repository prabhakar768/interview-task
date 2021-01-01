import { Injectable } from '@angular/core';
import { Observable, observable, from } from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse, HttpParams} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) { }
  get_list():Observable<any>{
    return this.http.get('https://reqres.in/api/users?page=1').pipe(map((response) => response),
        catchError((response: any) => response ));
}

get_user(id:string):Observable<any>{
 return this.http.get('https://reqres.in/api/users').pipe(map((response) => response),
 catchError((response: any) => response ));
}
}
