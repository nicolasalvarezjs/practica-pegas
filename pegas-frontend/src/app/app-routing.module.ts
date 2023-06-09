import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PeopleService } from './services/people.service';
import { FormRegisterComponent } from './pages/person-register/form-register.component';

const routes: Routes = [
  {
    path: '',
    component: FormRegisterComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/people-list/home.module').then( m => m.HomeModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ PeopleService ]
})
export class AppRoutingModule { }
