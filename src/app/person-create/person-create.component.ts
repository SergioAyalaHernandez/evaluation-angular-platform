import { Component, OnInit } from '@angular/core';
import {Persona, PersonServiceService} from "../person-service.service";
import {data} from "autoprefixer";
import * as console from "console";

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.scss']
})
export class PersonCreateComponent implements OnInit {
  persona: Persona = {
    nombres: '',
    apellidos: '',
    email: '',
    password: '',
    celular: '',
    tipoUsuario: '',
    plan: {
      idPlan: 0
    }
  };
  response: Persona | null = null;

  constructor(private personaService: PersonServiceService) {}

  onSubmit(): void {
    this.personaService.createPersona(this.persona).subscribe(
      data => this.response = data
    );
  }


  closeModal(): void {
    this.response = null;
  }
  isDarkMode = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  ngOnInit(): void {
  }

}
