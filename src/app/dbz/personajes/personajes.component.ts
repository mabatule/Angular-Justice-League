import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  switchModal : boolean = false;

  ngOnInit(){
    this.dbzService.$modal.subscribe((valor)=>{this.switchModal=valor})
  }
  // @Input() personajes: Personaje[] = [];
  get personajes() {
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService ) {}

  mostrarModal(){
    this.switchModal = true;
  }

  ////
  @Input() personajeEditar: Personaje = {
    nombre: "",
    poder: 0
  }

  get(personaje: Personaje){
    this.personajeEditar=personaje
    this.dbzService.getPersonaje( this.personajeEditar );
  }
  eliminar(personaje: Personaje) {

    this.dbzService.eliminarPersonaje(personaje);

  }
}
