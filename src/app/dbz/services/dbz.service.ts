import { Injectable, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    $modal = new EventEmitter<any>();

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );
    }

    private _personaje: Personaje ={
      nombre:"",
      poder:0
    }

    get personaje(): Personaje{
        return this._personaje;
    }

    getPersonaje( personaje: Personaje){
        this._personaje=personaje;
        console.log(this.personaje)
    }

    eliminarPersonaje( personaje: Personaje ) {
      const indice :number = this._personajes.indexOf(personaje);
      this._personajes.splice(indice,1);
  }

}