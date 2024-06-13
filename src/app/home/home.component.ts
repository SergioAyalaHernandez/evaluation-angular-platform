import { Component, OnInit } from '@angular/core';
import {ExamServiceService} from "../exam-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clases: any[] = [];

  constructor(private claseService: ExamServiceService) { }

  ngOnInit(): void {
    this.claseService.getExams().subscribe(data => {
      console.log(data)
      this.clases = data;
    });
  }
}
