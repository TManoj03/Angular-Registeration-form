import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }

  postApi(data: any){ 
  	return this.http.post('http://localhost:3000/api/insert',data);
  	}

  getApi(data:any){
  	return this.http.post('http://localhost:3000/api/read',data);
  }
  getall(){
  	return this.http.get('http://localhost:3000/api/read');
  }
  getsingle(){
    return this.http.get('http://localhost:3000/api/single');
  }

}
