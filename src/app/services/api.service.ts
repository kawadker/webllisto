import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  localstorage = localStorage
  token;
  constructor(
    private http: HttpClient
  ) { }
  loadToken() {
    const token = localStorage.getItem('token');
    this.token = JSON.parse(token);
  }
  login(data) {
    let url = environment['baseUrl'] + 'jwt/api-token-auth/'
    return this.http.post(url, data)
  }

  getDataTable(data) {
    let url = environment['baseUrl'] + 'exchange/trades/'
    this.loadToken()
    const header = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': this.token });
    return this.http.post(url, data, { headers: header, responseType: "json" })

  }
}
