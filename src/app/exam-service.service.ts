import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {
  private apiUrlBase = environment.apiUrl2;
  private examPath = "/api/examenes";
  private preguntaPath = "/api/preguntas/curso";
  private respuestaPath = "/api/respuestas/respuestas-por-pregunta";
  private resultadosExamenPath = '/api/resultados-examen';
  private dataResultado = '/api/resultados-examen/buscar';

  constructor(private http: HttpClient) {}

  getExams(): Observable<any[]> {
    const apiUrl = `${this.apiUrlBase}${this.examPath}`; // Se concatena la URL completa
    return this.http.get<any[]>(apiUrl);
  }

  getExamById(examId: number): Observable<any> {
    const apiUrl = `${this.apiUrlBase}${this.examPath}/${examId}`;
    return this.http.get<any>(apiUrl);
  }

  getQuestionsByExamId(examId: number): Observable<any[]> {
    const apiUrl = `${this.apiUrlBase}${this.preguntaPath}/${examId}`;
    return this.http.get<any[]>(apiUrl);
  }

  getAnswersByQuestionIds(questionIds: number[]): Observable<any[]> {
    const apiUrl = `${this.apiUrlBase}${this.respuestaPath}`;
    const requestData = { idPreguntas: questionIds };
    return this.http.post<any[]>(apiUrl, requestData);
  }

  sendExamResults(body: any): Observable<any> {
    const apiUrl = `${this.apiUrlBase}${this.resultadosExamenPath}`;
    return this.http.post(apiUrl, body);
  }

  getResultadosById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrlBase}${this.dataResultado}/${id}`);
  }

}
