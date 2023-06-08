import { Component, OnInit } from '@angular/core';
import { Person } from '../interfaces/Person';
import { PeopleService } from '../services/people.service';

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
  people: Person[] = [];
  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPeople()
      .subscribe( people => this.people = people  );
  }

}
