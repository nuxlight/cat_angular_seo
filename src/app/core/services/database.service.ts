import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../entities/cat.entity';

const DATABASE_URL = 'http://127.0.0.1:5984';
const DATABASE = 'cat';
@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private headers_object = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Basic ' + btoa('cat:cat'));

  constructor(private http: HttpClient) {}

  getCatsIds(): Observable<any> {
    return this.http.get(`${DATABASE_URL}/${DATABASE}/_all_docs`, {
      headers: this.headers_object,
    });
  }

  async getCatsDetails(ids: string[]): Promise<Cat[]> {
    return new Promise<Cat[]>((resolve, reject) => {
      let cats: Cat[] = [];
      for (const id of ids.map((val: any) => val.id)) {
        this.http
          .get<Cat>(`${DATABASE_URL}/${DATABASE}/${id}`, {
            headers: this.headers_object,
          })
          .subscribe((cat: Cat) => {
            cats.push(cat);
          });
      }
      resolve(cats);
    });
  }
}
