import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";
import {Persona, PersonServiceService} from "../person-service.service";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

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

  constructor(private authService: AuthServiceService, private personaService: PersonServiceService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
        (response: any) => {
        console.log('Login successful', response);
          this.router.navigate(['/home']);
      },
        (error: any) => {
        console.error('Login failed', error);
        alert("no se puede iniciar sesión, no existe el usuario");
          this.clearFields();
        }
    );
  }

  clearFields(): void {
    this.email = '';
    this.password = '';
  }
  onSubmit2(): void {
    this.personaService.createPersona(this.persona).subscribe(
      (data: any) => {
        this.response = data;
      },
      (error: any) => {
        if (error.status === 400 && error.error === 'El correo electrónico ya está registrado') {
          alert('El correo electrónico ya está registrado. Por favor, comuníquese con un administrador.');
          this.closeModal()
        } else {
          console.error('Login failed', error);
        }
      }
    );
  }

  formValid: boolean = false;
  checkFormValidity(): void {
    const nombresValid = this.persona.nombres && this.persona.nombres.trim() !== '';
    const apellidosValid = this.persona.apellidos && this.persona.apellidos.trim() !== '';
    const emailValid = this.persona.email && this.validateEmail(this.persona.email); // Lógica para validar el correo
    const celularValid = this.persona.celular && this.persona.celular.trim() !== ''; // Lógica para validar el celular
    const passwordValid = this.persona.password && this.persona.password.trim() !== ''; // Lógica para validar la contraseña
    const tipoUsuarioValid = this.persona.tipoUsuario && ['A', 'E', 'P'].includes(this.persona.tipoUsuario); // Lógica para validar el tipo de usuario
    const idPlanValid = this.persona.plan.idPlan && ["1", "2", "3"].includes(String(this.persona.plan.idPlan)); // Lógica para validar el ID del plan
    if (nombresValid && apellidosValid && emailValid && celularValid && passwordValid && tipoUsuarioValid && idPlanValid) {
      this.formValid = true;
    } else {
      this.formValid = false;
    }
  }
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }




  ngOnInit(): void {
  }

  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

}
