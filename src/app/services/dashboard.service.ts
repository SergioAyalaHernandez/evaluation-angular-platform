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


@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl1 = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) {}

  getEstudiantesPorPlan(): Observable<EstudiantesPorPlanProjection[]> {
    return this.http.get<EstudiantesPorPlanProjection[]>(`${this.apiUrl1}/estudiantes-por-plan`);
  }

  getPromedioResultadosPorCurso(): Observable<PromedioResultadosPorCursoProjection[]> {
    return this.http.get<PromedioResultadosPorCursoProjection[]>(`${this.apiUrl1}/promedio-resultados-por-curso`);
  }

  getDistribucionCalificaciones(): Observable<DistribucionCalificacionesProjection[]> {
    return this.http.get<DistribucionCalificacionesProjection[]>(`${this.apiUrl1}/distribucion-calificaciones`);
  }

  getTasaAprobacionPorCurso(): Observable<TasaAprobacionPorCursoProjection[]> {
    return this.http.get<TasaAprobacionPorCursoProjection[]>(`${this.apiUrl1}/tasa-aprobacion-por-curso`);
  }

  getClasesPorProfesor(): Observable<ClasesPorProfesorProjection[]> {
    return this.http.get<ClasesPorProfesorProjection[]>(`${this.apiUrl1}/clases-por-profesor`);
  }

  getPreguntasPorExamen(): Observable<PreguntasPorExamenProjection[]> {
    return this.http.get<PreguntasPorExamenProjection[]>(`${this.apiUrl1}/preguntas-por-examen`);
  }

  getPreguntasMasAcertadas(): Observable<PreguntasAcertadasProjection[]> {
    return this.http.get<PreguntasAcertadasProjection[]>(`${this.apiUrl1}/preguntas-mas-acertadas`);
  }

  getPreguntasMenosAcertadas(): Observable<PreguntasAcertadasProjection[]> {
    return this.http.get<PreguntasAcertadasProjection[]>(`${this.apiUrl1}/preguntas-menos-acertadas`);
  }

  getUsuariosActivosPorMes(): Observable<UsuariosActivosPorMesProjection[]> {
    return this.http.get<UsuariosActivosPorMesProjection[]>(`${this.apiUrl1}/usuarios-activos-por-mes`);
  }

  getNuevosUsuariosPorMes(): Observable<UsuariosActivosPorMesProjection[]> {
    return this.http.get<UsuariosActivosPorMesProjection[]>(`${this.apiUrl1}/nuevos-usuarios-por-mes`);
  }
}
