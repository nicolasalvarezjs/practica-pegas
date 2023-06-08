import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../interfaces/Person';
import { environment } from 'src/environments/environment';

@Injectable()
export class PeopleService {

  private url = environment.SERVER_URL;

  constructor(private httpClient: HttpClient){}

  getPeople(){
    return this.httpClient.get<Person[]>(this.url);
  }

  createPerson(body: Person){
    return this.httpClient.post(this.url, body);
  }

}
