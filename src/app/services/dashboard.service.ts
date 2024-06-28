import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EstudiantesPorPlanProjection} from "../models/EstudiantesPorPlanProjection";
import {PromedioResultadosPorCursoProjection} from "../models/PromedioResultadosPorCursoProjection";
import {DistribucionCalificacionesProjection} from "../models/DistribucionCalificacionesProjection";
import {TasaAprobacionPorCursoProjection} from "../models/TasaAprobacionPorCursoProjection";
import {ClasesPorProfesorProjection} from "../models/ClasesPorProfesorProjection";
import {PreguntasPorExamenProjection} from "../models/PreguntasPorExamenProjection";
import {PreguntasAcertadasProjection} from "../models/PreguntasAcertadasProjection";
import {UsuariosActivosPorMesProjection} from "../models/UsuariosActivosPorMesProjection";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl1 = 'http://localhost:8080/api/dashboard';
  private apiUrlBase = environment.apiUrl2;
  private clasePath = "/api/dashboard";

  constructor(private http: HttpClient) {}

  getEstudiantesPorPlan(): Observable<EstudiantesPorPlanProjection[]> {
    return this.http.get<EstudiantesPorPlanProjection[]>(`${this.apiUrlBase}${this.clasePath}/estudiantes-por-plan`);
  }

  getPromedioResultadosPorCurso(): Observable<PromedioResultadosPorCursoProjection[]> {
    return this.http.get<PromedioResultadosPorCursoProjection[]>(`${this.apiUrlBase}${this.clasePath}/promedio-resultados-por-curso`);
  }

  getDistribucionCalificaciones(): Observable<DistribucionCalificacionesProjection[]> {
    return this.http.get<DistribucionCalificacionesProjection[]>(`${this.apiUrlBase}${this.clasePath}/distribucion-calificaciones`);
  }

  getTasaAprobacionPorCurso(): Observable<TasaAprobacionPorCursoProjection[]> {
    return this.http.get<TasaAprobacionPorCursoProjection[]>(`${this.apiUrlBase}${this.clasePath}/tasa-aprobacion-por-curso`);
  }

  getClasesPorProfesor(): Observable<ClasesPorProfesorProjection[]> {
    return this.http.get<ClasesPorProfesorProjection[]>(`${this.apiUrlBase}${this.clasePath}/clases-por-profesor`);
  }

  getPreguntasPorExamen(): Observable<PreguntasPorExamenProjection[]> {
    return this.http.get<PreguntasPorExamenProjection[]>(`${this.apiUrlBase}${this.clasePath}/preguntas-por-examen`);
  }

  getPreguntasMasAcertadas(): Observable<PreguntasAcertadasProjection[]> {
    return this.http.get<PreguntasAcertadasProjection[]>(`${this.apiUrlBase}${this.clasePath}/preguntas-mas-acertadas`);
  }

  getPreguntasMenosAcertadas(): Observable<PreguntasAcertadasProjection[]> {
    return this.http.get<PreguntasAcertadasProjection[]>(`${this.apiUrlBase}${this.clasePath}/preguntas-menos-acertadas`);
  }

  getUsuariosActivosPorMes(): Observable<UsuariosActivosPorMesProjection[]> {
    return this.http.get<UsuariosActivosPorMesProjection[]>(`${this.apiUrlBase}${this.clasePath}/usuarios-activos-por-mes`);
  }

  getNuevosUsuariosPorMes(): Observable<UsuariosActivosPorMesProjection[]> {
    return this.http.get<UsuariosActivosPorMesProjection[]>(`${this.apiUrlBase}${this.clasePath}/nuevos-usuarios-por-mes`);
  }
}
