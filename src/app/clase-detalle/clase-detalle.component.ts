import { Component, OnInit } from '@angular/core';
import {ClasesService} from "../clases.service";
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-clase-detalle',
  templateUrl: './clase-detalle.component.html',
  styleUrls: ['./clase-detalle.component.scss']
})
export class ClaseDetalleComponent implements OnInit {

  idClase: number | undefined;
  claseInfo: any; // Aquí puedes definir una interfaz o tipo para la respuesta de la API
  safeUrl: SafeResourceUrl | undefined;
  constructor(
    private route: ActivatedRoute,
    private clasesService: ClasesService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // @ts-ignore
    this.idClase = +this.route.snapshot.paramMap.get('id'); // Obtener el ID desde la URL
    this.getClassInfo();
  }

  getClassInfo(): void {
    this.clasesService.getClassById(this.idClase).subscribe(
      (data) => {
        this.claseInfo = data;
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.claseInfo.jsonEjemplo);
        console.log(data)
      },
      (error) => {
        console.error('Error al obtener la información de la clase:', error);
      }
    );
  }

}
