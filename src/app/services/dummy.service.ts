import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  constructor(private httpClient:HttpClient) { }

  //call API

  getAllDAta():Observable<any>{
 return this.httpClient.get('https://dummyjson.com/todos')

  }
}
