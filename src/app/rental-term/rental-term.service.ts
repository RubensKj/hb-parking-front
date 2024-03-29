import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RentalTermService {
  private url = "http://localhost:8080/api";

  constructor(private http: HttpClient) {}

  uploadTerm(file: File, title: string): Observable<any> {
    let url = this.url + "/termo/create";

    let formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('title', title);

    return this.http.post(url, formData);
  }
}
