import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cat } from '../entities/cat.entity';

const DATABASE_URL = 'http://127.0.0.1:5984';
const DATABASE = 'cat';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}

  async getAllcats() {
    var headers_object = new HttpHeaders();
    headers_object.append('Authorization', 'Basic ' + btoa('cat:cat'));
    this.http
      .get(`${DATABASE_URL}/${DATABASE}/_all_docs`, {
        headers: headers_object,
      })
      .subscribe((data) => console.log(data));
  }
}
