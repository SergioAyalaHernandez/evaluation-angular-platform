import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClasesService {
  private apiUrlBase = environment.apiUrl2;
  private clasePath = "/api/clases";
  private apiUrl = 'http://localhost:8080/api/clases';
  private claseInfo: any;

  constructor(private http: HttpClient) {}

  getClassById(id: number | undefined): Observable<any> {
    const url = `${this.apiUrlBase}${this.clasePath}/${id}`;
    return this.http.get<any>(url);
  }


}
