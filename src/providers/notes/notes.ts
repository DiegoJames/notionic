import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NotesProvider {

  notes = [
    {
      id:1,
      title:'Nota 1',
      descripcion: 'Descipcion de nota 1'
    },
    {
      id:2,
      title:'Nota 2',
      descripcion: 'Descipcion de nota 2'
    },
    {
      id:3,
      title:'Nota 3',
      descripcion: 'Descipcion de nota 3'
    }
  ]

  getNotes(){
    return this.notes;
  }

}
