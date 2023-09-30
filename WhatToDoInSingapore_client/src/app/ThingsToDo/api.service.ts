import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http:HttpClient) { }


  getAccoms(searchInput:string): Observable<any>{
    return this.request('GET',`https://api.stb.gov.sg/content/accommodation/v2/search?searchType=keyword&searchValues=${searchInput}`,'');
  }


  request(method: string,url:string,data:any): Observable<any>{
    let headers:any;

    headers = new HttpHeaders().set('X-API-Key', 'JAPI KEY shift to backend');

    switch(method.toLowerCase()){
      case 'get':
          return this.http.get<any>(url,{headers:headers});
        break;
      case 'post':
          return this.http.post<any>(url, data, {headers: headers});
        break;
      case 'put':
          return this.http.put<any>(url, data, {headers: headers});
        break;
      default:
          console.log("delete triggered");
          return this.http.delete<any>(url, {headers:headers});
    }
  }

}
