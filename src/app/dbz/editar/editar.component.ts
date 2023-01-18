import { Component, Input } from "@angular/core";
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
    selector: 'app-editar',
    templateUrl: './editar.component.html'
})

export class EditarComponent{
    
    constructor(private dbzService:DbzService ){
    }
    cerrarModal(){
        this.dbzService.$modal.emit(false);
    }

    get personaje(){
        return this.dbzService.personaje;
    }
}