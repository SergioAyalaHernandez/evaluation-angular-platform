import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ExamServiceService} from "../exam-service.service";

@Component({
  selector: 'app-examen-unitario',
  templateUrl: './examen-unitario.component.html',
  styleUrls: ['./examen-unitario.component.scss']
})
export class ExamenUnitarioComponent implements OnInit {

  examId: number | undefined;
  examData: any;

  constructor(private route: ActivatedRoute, private examService: ExamServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.examId = +params['id'];
      this.examService.getExamById(this.examId).subscribe(data => {
        this.examData = data;
      });
    });
  }
}
