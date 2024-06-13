import { Component, OnInit } from '@angular/core';
import {ExamServiceService} from "../exam-service.service";

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.scss']
})
export class ExamenComponent implements OnInit {

  exams: any[] = [];

  constructor(private examService: ExamServiceService) {}

  ngOnInit(): void {
    this.examService.getExams().subscribe(data => {
      this.exams = data;
    });
  }

}
