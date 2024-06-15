import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../../services/dashboard.service";
import {EstudiantesPorPlanProjection} from "../../models/EstudiantesPorPlanProjection";
import {PromedioResultadosPorCursoProjection} from "../../models/PromedioResultadosPorCursoProjection";
import {DistribucionCalificacionesProjection} from "../../models/DistribucionCalificacionesProjection";
import {TasaAprobacionPorCursoProjection} from "../../models/TasaAprobacionPorCursoProjection";
import {ClasesPorProfesorProjection} from "../../models/ClasesPorProfesorProjection";
import {PreguntasPorExamenProjection} from "../../models/PreguntasPorExamenProjection";
import {PreguntasAcertadasProjection} from "../../models/PreguntasAcertadasProjection";
import {UsuariosActivosPorMesProjection} from "../../models/UsuariosActivosPorMesProjection";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboardData.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardDataComponent implements OnInit {
  estudiantesPorPlan: EstudiantesPorPlanProjection[] | undefined;
  promedioResultadosPorCurso: PromedioResultadosPorCursoProjection[]| undefined;
  distribucionCalificaciones: DistribucionCalificacionesProjection[]| undefined;
  tasaAprobacionPorCurso: TasaAprobacionPorCursoProjection[]| undefined;
  clasesPorProfesor: ClasesPorProfesorProjection[]| undefined;
  preguntasPorExamen: PreguntasPorExamenProjection[]| undefined;
  preguntasMasAcertadas: PreguntasAcertadasProjection[]| undefined;
  preguntasMenosAcertadas: PreguntasAcertadasProjection[]| undefined;
  usuariosActivosPorMes: UsuariosActivosPorMesProjection[]| undefined;
  nuevosUsuariosPorMes: UsuariosActivosPorMesProjection[]| undefined;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getEstudiantesPorPlan().subscribe(data => {
      this.estudiantesPorPlan = data;
    });

    this.dashboardService.getPromedioResultadosPorCurso().subscribe(data => {
      this.promedioResultadosPorCurso = data;
    });

    this.dashboardService.getDistribucionCalificaciones().subscribe(data => {
      this.distribucionCalificaciones = data;
    });

    this.dashboardService.getTasaAprobacionPorCurso().subscribe(data => {
      this.tasaAprobacionPorCurso = data;
    });

    this.dashboardService.getClasesPorProfesor().subscribe(data => {
      this.clasesPorProfesor = data;
    });

    this.dashboardService.getPreguntasPorExamen().subscribe(data => {
      this.preguntasPorExamen = data;
    });

    this.dashboardService.getPreguntasMasAcertadas().subscribe(data => {
      this.preguntasMasAcertadas = data;
    });

    this.dashboardService.getPreguntasMenosAcertadas().subscribe(data => {
      this.preguntasMenosAcertadas = data;
    });

    this.dashboardService.getUsuariosActivosPorMes().subscribe(data => {
      this.usuariosActivosPorMes = data;
    });

    this.dashboardService.getNuevosUsuariosPorMes().subscribe(data => {
      this.nuevosUsuariosPorMes = data;
    });
  }
}
