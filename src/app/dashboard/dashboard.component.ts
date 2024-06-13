import { Component, OnInit } from '@angular/core';
import {ExamServiceService} from "../exam-service.service";
import {AuthServiceService} from "../auth-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  resultados: any[] = [];

  constructor(private resultadoExamenService: ExamServiceService, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.getResultados();
  }

  getResultados(): void {
    const idPersona = this.authService.getUserId();
    this.resultadoExamenService.getResultadosById(idPersona).subscribe((data: any[]) => {
      this.resultados = data;
    });
  }

}
