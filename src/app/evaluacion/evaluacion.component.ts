import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamServiceService } from '../exam-service.service';
import {AuthServiceService} from "../auth-service.service";

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.scss']
})
export class EvaluacionComponent implements OnInit {
  examId: number | undefined;
  examData: any;
  preguntas: any[] | undefined;
  respuestas: any[] | undefined;
  selectedAnswers: { [key: number]: number } = {};
  @ViewChild('myModal') myModal!: ElementRef;
  resultado: any; // Aquí guarda el resultado del examen

  constructor(
    private route: ActivatedRoute,
    private examService: ExamServiceService,
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.examId = +params['id'];
      this.examService.getExamById(this.examId).subscribe(data => {
        this.examData = data;
      });
      this.examService.getQuestionsByExamId(this.examId).subscribe(preguntas => {
        this.preguntas = preguntas;
        const idPreguntas = preguntas.map(pregunta => pregunta.idPregunta);
        // Llamar a la API de respuestas con los IDs de las preguntas
        this.examService.getAnswersByQuestionIds(idPreguntas).subscribe(respuestas => {
          this.respuestas = this.shuffleArray(respuestas);
        });
      });
    });
  }

  shuffleArray(array: any[]): any[] {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // Mientras queden elementos para barajar
    while (currentIndex !== 0) {
      // Obtener un elemento aleatorio del array restante
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // Intercambiar el elemento actual con el aleatorio
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  getRespuestasByPreguntaId(idPregunta: number): any[] {
    // @ts-ignore
    return this.respuestas.filter(respuesta => respuesta.idPregunta === idPregunta);
  }

  submitForm(): void {
    const idPersona = parseInt(this.authService.getUserId()); // Obtener el ID de la persona de alguna manera

    // @ts-ignore
    const todasRespondidas = this.preguntas.every(pregunta =>
      this.selectedAnswers.hasOwnProperty(pregunta.idPregunta)
    );

    if (!todasRespondidas) {
      // Mostrar mensaje de error o tomar alguna acción
      alert('Por favor, responde todas las preguntas antes de enviar el formulario.');
      return; // No enviar el formulario si no todas las preguntas están respondidas
    }

    // @ts-ignore
    const idPreguntas = this.preguntas.map(pregunta => pregunta.idPregunta);
    const idRespuestas = idPreguntas.map(idPregunta => this.selectedAnswers[idPregunta]);

    const requestBody = {
      idPersona: idPersona,
      idExamen: this.examId,
      idPreguntas: idPreguntas,
      idRespuestas: idRespuestas
    };
    console.log(requestBody)
    this.examService.sendExamResults(requestBody).subscribe(resultado => {
      // Aquí se guarda el resultado del examen y se abre el modal
      this.resultado = resultado;

      this.openModal();
      console.log('Resultado del examen:', resultado);
    });
  }

  openModal() {
    this.myModal.nativeElement.style.display = 'block';
  }

  closeModal() {
    this.myModal.nativeElement.style.display = 'none';
    this.router.navigate(['/home']); // Utiliza el Router para navegar al home
  }
}
