import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormRegisterComponent } from './form-register/form-register.component';
import { PeopleService } from './services/people.service';

const routes: Routes = [
  {
    path: '',
    component: FormRegisterComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ PeopleService ]
})
export class AppRoutingModule { }
