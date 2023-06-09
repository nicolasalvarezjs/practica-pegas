import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Person } from '../../interfaces/Person';
import { getPeopleList } from './store/home.actions';
import { State } from './store/home.reducer';
import { selectPeople } from './store/home.selectors';
import { Observable } from 'rxjs';

const headTable  = [
  'Nombre',
  'Apellido',
  'Telefono',
  'Edad',
  'Genero',
  'Fecha de nacimiento',
  'Embarazo o Lactancia'
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  headTable = headTable;
  people = new Observable<Person[]>();
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch( getPeopleList() );
    this.people = this.store.select( selectPeople );
  }

}
