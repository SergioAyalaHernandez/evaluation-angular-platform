import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  private apiUrl = 'http://localhost:8080/api/clases';
  private claseInfo: any;

  constructor(private http: HttpClient) {}

  getClassById(id: number | undefined): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }


}
