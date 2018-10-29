import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesProvider } from '../../providers/notes/notes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myNav') nav: NavController
  notes = [];

  constructor(public navCtrl: NavController, public notesProvider: NotesProvider) {
    this.notes = notesProvider.getNotes();
  }

  goToDetail(){
    this.navCtrl.push('DetailPage');
  }

}
