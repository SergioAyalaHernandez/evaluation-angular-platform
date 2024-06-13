import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

export interface Persona {
  idPersona?: number;
  nombres: string;
  apellidos: string;
  email: string;
  password: string;
  celular: string;
  tipoUsuario: string;
  plan: {
    idPlan: number;
    tipoPlan?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class PersonServiceService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createPersona(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona);
  }
}
